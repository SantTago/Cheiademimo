const WHATSAPP_NUMBER = "5591991143369";
const CART_KEY = "cheia-de-mimo-cart";

// Os endereços enviados são Viewer Links do ImgBB (ibb.co/...).
// Um Viewer Link entrega HTML, então ele NÃO pode ser usado diretamente em <img src>.
// A loja resolve o endereço direto i.ibb.co somente quando a foto entra na tela,
// guarda o resultado no navegador e depois usa o arquivo externo normalmente.
const IMAGE_CACHE_KEY = "cheia-de-mimo-direct-images-v3";

function loadImageCache() {
  try { return JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY)) || {}; }
  catch { return {}; }
}

const directImageCache = loadImageCache();
const pendingImageRequests = new Map();

function saveImageCache() {
  try { localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(directImageCache)); }
  catch {}
}

function cleanDirectUrl(url) {
  return String(url || "")
    .replace(/&amp;/g, "&")
    .replace(/\\\//g, "/")
    .replace(/[\\),.;]+$/g, "")
    .trim();
}

function extractDirectImageUrl(text) {
  if (!text) return null;
  const decoded = String(text)
    .replace(/&amp;/g, "&")
    .replace(/\\u002F/gi, "/")
    .replace(/\\\//g, "/");

  // ImgBB usa i.ibb.co para o arquivo real. Pegamos primeiro URLs com extensão de imagem.
  const imagePattern = /https?:\/\/i\.ibb\.co\/[A-Za-z0-9_~!$&'()*+,;=:@%./?\-]+?\.(?:jpe?g|png|webp|gif|avif)(?:\?[^\s"'<>\])}]*)?/gi;
  const imageMatches = decoded.match(imagePattern) || [];
  if (imageMatches.length) return cleanDirectUrl(imageMatches[0]);

  // Fallback para respostas que omitem a extensão na serialização.
  const genericPattern = /https?:\/\/i\.ibb\.co\/[A-Za-z0-9_~!$&'()*+,;=:@%./?\-]+/gi;
  const genericMatches = decoded.match(genericPattern) || [];
  return genericMatches.length ? cleanDirectUrl(genericMatches[0]) : null;
}

async function fetchTextWithTimeout(url, timeout = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "force-cache",
      signal: controller.signal,
      headers: { "Accept": "text/plain,text/html,application/json;q=0.9,*/*;q=0.8" }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

async function resolveDirectImage(viewerUrl) {
  if (!viewerUrl) throw new Error("Link da foto ausente");
  if (/^https?:\/\/i\.ibb\.co\//i.test(viewerUrl)) return viewerUrl;
  if (directImageCache[viewerUrl]) return directImageCache[viewerUrl];
  if (pendingImageRequests.has(viewerUrl)) return pendingImageRequests.get(viewerUrl);

  const task = (async () => {
    const readerUrls = [
      `https://r.jina.ai/https://ibb.co/${viewerUrl.split("/").pop()}`,
      `https://api.allorigins.win/raw?url=${encodeURIComponent(viewerUrl)}`
    ];

    let lastError;
    for (const proxyUrl of readerUrls) {
      try {
        const text = await fetchTextWithTimeout(proxyUrl);
        const directUrl = extractDirectImageUrl(text);
        if (directUrl) {
          directImageCache[viewerUrl] = directUrl;
          saveImageCache();
          return directUrl;
        }
        lastError = new Error("Endereço direto não encontrado na resposta");
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("Não foi possível resolver a imagem");
  })();

  pendingImageRequests.set(viewerUrl, task);
  try {
    return await task;
  } finally {
    pendingImageRequests.delete(viewerUrl);
  }
}

function setResolvedImage(img, directUrl) {
  if (!img || !directUrl) return;
  img.onload = () => {
    img.classList.add("is-loaded");
    img.closest(".product-image-wrap, .cart-item-image-wrap")?.classList.remove("is-loading", "image-error");
  };
  img.onerror = () => {
    img.classList.remove("is-loaded");
    img.closest(".product-image-wrap, .cart-item-image-wrap")?.classList.add("image-error");
  };
  img.src = directUrl;
}

async function hydrateProductImage(wrap, viewerUrl) {
  if (!wrap || !viewerUrl || wrap.dataset.loadedViewer === viewerUrl) return;
  const img = wrap.querySelector(".product-main-image");
  if (!img) return;

  wrap.classList.add("is-loading");
  wrap.classList.remove("image-error");
  try {
    const directUrl = await resolveDirectImage(viewerUrl);
    wrap.dataset.loadedViewer = viewerUrl;
    setResolvedImage(img, directUrl);
  } catch (error) {
    console.error("Falha ao carregar foto do produto:", viewerUrl, error);
    wrap.classList.remove("is-loading");
    wrap.classList.add("image-error");
  }
}

let imageObserver;
function observeProductImages() {
  if (imageObserver) imageObserver.disconnect();

  const wraps = [...document.querySelectorAll(".product-image-wrap[data-viewer-url]")];
  if (!("IntersectionObserver" in window)) {
    wraps.forEach(wrap => hydrateProductImage(wrap, wrap.dataset.viewerUrl));
    return;
  }

  imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const wrap = entry.target;
      hydrateProductImage(wrap, wrap.dataset.viewerUrl);
      imageObserver.unobserve(wrap);
    });
  }, { rootMargin: "500px 0px" });

  wraps.forEach(wrap => imageObserver.observe(wrap));
}

const products = [
  {
    id: "listrado-verde-branco-1",
    name: "Jogo americano listrado verde com branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 23,
    photos: [
      { page: "https://ibb.co/4ZZc53Mk" },
      { page: "https://ibb.co/mC2w32rf" }
    ],
    alt: "Jogo americano listrado verde com branco, dupla face e impermeável"
  },
  {
    id: "listrado-verde-branco-2",
    name: "Jogo americano listrado verde com branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 23,
    photos: [
      { page: "https://ibb.co/4n9CmQHT" },
      { page: "https://ibb.co/7JSPm68z" }
    ],
    alt: "Jogo americano listrado verde com branco, dupla face e impermeável"
  },
  {
    id: "listrado-rosa-branco",
    name: "Jogo americano listrado rosa com branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 24,
    photos: [
      { page: "https://ibb.co/4n9CmQHT" },
      { page: "https://ibb.co/7JSPm68z" }
    ],
    alt: "Jogo americano listrado rosa com branco, dupla face e impermeável"
  },
  {
    id: "listrado-azul-branco",
    name: "Jogo americano listrado azul com branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 24,
    photos: [
      { page: "https://ibb.co/zWsy7HVs" },
      { page: "https://ibb.co/zHPyxn4X" }
    ],
    alt: "Jogo americano listrado azul com branco, dupla face e impermeável"
  },
  {
    id: "xadrez-preto-branco-1",
    name: "Jogo americano xadrez preto e branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 18,
    photos: [
      { page: "https://ibb.co/fY16q1TC" },
      { page: "https://ibb.co/5gfJJ5ds" }
    ],
    alt: "Jogo americano xadrez preto e branco, dupla face e impermeável"
  },
  {
    id: "xadrez-preto-branco-2",
    name: "Jogo americano xadrez preto e branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 18,
    photos: [
      { page: "https://ibb.co/tPqwV8kN" },
      { page: "https://ibb.co/NktMtZs" }
    ],
    alt: "Jogo americano xadrez preto e branco, dupla face e impermeável"
  },
  {
    id: "xadrez-verde-branco",
    name: "Jogo americano xadrez verde com branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 16,
    photos: [
      { page: "https://ibb.co/nMMzypRB" },
      { page: "https://ibb.co/KjSjSH7p" }
    ],
    alt: "Jogo americano xadrez verde com branco, dupla face e impermeável"
  },
  {
    id: "xadrez-rosa-verde",
    name: "Jogo americano xadrez rosa e verde",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 20,
    photos: [
      { page: "https://ibb.co/jt6J0L9" },
      { page: "https://ibb.co/Kxr05T4F" }
    ],
    alt: "Jogo americano xadrez rosa e verde, dupla face e impermeável"
  },
  {
    id: "xadrez-vermelho-branco",
    name: "Jogo americano xadrez vermelho com branco",
    collection: "Jogo americano",
    category: "Dupla face e impermeável",
    price: 29,
    stock: 18,
    photos: [
      { page: "https://ibb.co/vvJYK6ts" },
      { page: "https://ibb.co/wZrspmjh" }
    ],
    alt: "Jogo americano xadrez vermelho com branco, dupla face e impermeável"
  },
  {
    id: "kiwi",
    name: "Jogo americano de kiwi",
    collection: "Jogo americano",
    category: "Impermeável",
    price: 26,
    stock: 12,
    photos: [{ page: "https://ibb.co/pjsQ1xSv" }],
    alt: "Jogo americano de kiwi impermeável"
  },
  {
    id: "mamao",
    name: "Jogo americano de mamão",
    collection: "Jogo americano",
    category: "Impermeável",
    price: 26,
    stock: 16,
    photos: [{ page: "https://ibb.co/RkjPwk3r" }],
    alt: "Jogo americano de mamão impermeável"
  },
  {
    id: "banana",
    name: "Jogo americano de banana",
    collection: "Jogo americano",
    category: "Impermeável",
    price: 26,
    stock: 18,
    photos: [{ page: "https://ibb.co/DHdx10xv" }],
    alt: "Jogo americano de banana impermeável"
  },
  {
    id: "morango-rosa",
    name: "Jogo americano de morango rosa",
    collection: "Jogo americano",
    category: "Impermeável",
    price: 26,
    stock: 24,
    photos: [{ page: "https://ibb.co/vxL5bhfd" }],
    alt: "Jogo americano de morango rosa impermeável"
  },
  {
    id: "morango",
    name: "Jogo americano de morango",
    collection: "Jogo americano",
    category: "Impermeável",
    price: 26,
    stock: 18,
    photos: [{ page: "https://ibb.co/kV9kzc4g" }],
    alt: "Jogo americano de morango impermeável"
  }
];

const $ = selector => document.querySelector(selector);
const grid = $("#productsGrid");
const cartBody = $("#cartBody");
const panel = $("#cartPanel");
const backdrop = $("#cartBackdrop");

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return stored
      .map(item => {
        const product = products.find(productItem => productItem.id === item.id);
        if (!product) return null;
        return {
          ...product,
          quantity: Math.min(Math.max(Number(item.quantity) || 1, 1), product.stock)
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function totalItems() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function totalValue() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function cartQuantityFor(id) {
  return cart.find(item => item.id === id)?.quantity || 0;
}

function renderProducts() {
  grid.innerHTML = products.map(product => {
    const selected = cartQuantityFor(product.id);
    const reachedStock = selected >= product.stock;
    const firstPhoto = product.photos[0];

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-gallery">
          <div class="product-image-wrap is-loading" data-viewer-url="${firstPhoto.page}" aria-label="Foto de ${product.name}">
            <img class="product-main-image" alt="${product.alt}" decoding="async">
            <div class="product-image-status" aria-hidden="true">
              <span class="image-loader"></span>
              <small>Carregando foto</small>
            </div>
            <div class="product-image-error" aria-hidden="true">Foto indisponível</div>
            ${product.photos.length > 1 ? `
              <div class="product-photo-nav" aria-label="Fotos do produto">
                ${product.photos.map((photo, index) => `
                  <button type="button"
                    class="product-photo-dot ${index === 0 ? "is-active" : ""}"
                    data-viewer-url="${photo.page}"
                    data-photo-index="${index}"
                    aria-label="Mostrar foto ${index + 1} de ${product.name}">${index + 1}</button>
                `).join("")}
              </div>
            ` : ""}
          </div>
        </div>
        <div class="product-content">
          <div>
            <p class="product-collection">${product.collection}</p>
            <p class="product-category">${product.category}</p>
            <h3>${product.name}</h3>
            <p class="product-price">${formatPrice(product.price)} <span>unidade</span></p>
            <p class="availability">${product.stock} unidades disponíveis</p>
          </div>
          <button class="add-button" type="button" data-add="${product.id}" ${reachedStock ? "disabled" : ""}>${reachedStock ? "Limite atingido" : "Adicionar"}</button>
        </div>
      </article>
    `;
  }).join("");

  observeProductImages();
}

function renderCart() {
  const total = totalItems();
  const value = totalValue();
  $("#cartCount").textContent = total;
  $("#cartTotal").textContent = total;
  $("#cartValue").textContent = formatPrice(value);
  $("#cartSubtitle").textContent = total
    ? `${total} ${total === 1 ? "peça selecionada" : "peças selecionadas"}`
    : "Escolha seus detalhes favoritos para começar.";
  $("#cartSummary").hidden = total === 0;

  if (!cart.length) {
    cartBody.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">♡</div><h3>Seu carrinho está vazio</h3><p>Adicione produtos para montar seu pedido pelo WhatsApp.</p></div>';
    renderProducts();
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <article class="cart-item">
      <div class="cart-item-image-wrap is-loading" data-cart-viewer-url="${item.photos[0].page}">
        <img class="cart-item-image" alt="${item.alt}" decoding="async">
      </div>
      <div class="cart-item-info">
        <p>${item.category}</p>
        <h3>${item.name}</h3>
        <p class="cart-item-price">${formatPrice(item.price)} cada · ${formatPrice(item.price * item.quantity)}</p>
        <div class="quantity-control">
          <button type="button" data-delta="-1" data-id="${item.id}" aria-label="Diminuir">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-delta="1" data-id="${item.id}" aria-label="Aumentar" ${item.quantity >= item.stock ? "disabled" : ""}>+</button>
        </div>
        <p class="cart-stock">Estoque: ${item.stock} unidades</p>
      </div>
      <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Remover">×</button>
    </article>
  `).join("");

  cartBody.querySelectorAll("[data-cart-viewer-url]").forEach(async wrap => {
    try {
      const directUrl = await resolveDirectImage(wrap.dataset.cartViewerUrl);
      setResolvedImage(wrap.querySelector(".cart-item-image"), directUrl);
    } catch {
      wrap.classList.remove("is-loading");
      wrap.classList.add("image-error");
    }
  });

  $("#whatsappButton").href = buildWhatsAppUrl();
  renderProducts();
}

function buildWhatsAppUrl() {
  const total = totalItems();
  const value = totalValue();
  const items = cart.map(item =>
    `• ${item.quantity}x ${item.name}\n  ${formatPrice(item.price)} cada · ${formatPrice(item.price * item.quantity)}`
  );
  const message = [
    "Olá! Vim pelo site da Cheia de Mimo Home e gostaria de fazer este pedido.",
    "",
    "*Meu pedido:*",
    ...items,
    "",
    `*Total:* ${total} ${total === 1 ? "peça" : "peças"}`,
    `*Valor dos produtos:* ${formatPrice(value)}`,
    "",
    "Pode me confirmar pagamento, prazo e entrega?"
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  const currentQuantity = existing?.quantity || 0;

  if (currentQuantity >= product.stock) {
    showToast("Quantidade máxima disponível atingida");
    return;
  }

  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });

  saveCart();
  renderCart();
  showToast("Produto adicionado ao carrinho");
}

function updateQuantity(id, delta) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  const nextQuantity = item.quantity + delta;
  if (nextQuantity > item.stock) {
    showToast("Quantidade máxima disponível atingida");
    return;
  }

  item.quantity = Math.max(1, nextQuantity);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function openCart() {
  backdrop.hidden = false;
  requestAnimationFrame(() => {
    document.body.classList.add("cart-open");
    panel.setAttribute("aria-hidden", "false");
    $("#closeCart").focus();
  });
}

function closeCart() {
  document.body.classList.remove("cart-open");
  panel.setAttribute("aria-hidden", "true");
  setTimeout(() => backdrop.hidden = true, 250);
  $("#openCart").focus();
}

function showToast(message) {
  const toast = $("#toastMessage");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

grid.addEventListener("click", event => {
  const photoButton = event.target.closest(".product-photo-dot[data-viewer-url]");
  if (photoButton) {
    const card = photoButton.closest(".product-card");
    const wrap = card.querySelector(".product-image-wrap");
    const viewerUrl = photoButton.dataset.viewerUrl;

    card.querySelectorAll(".product-photo-dot").forEach(item => item.classList.remove("is-active"));
    photoButton.classList.add("is-active");
    wrap.dataset.viewerUrl = viewerUrl;
    wrap.dataset.loadedViewer = "";
    hydrateProductImage(wrap, viewerUrl);
    return;
  }

  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

cartBody.addEventListener("click", event => {
  const quantity = event.target.closest("[data-delta]");
  const remove = event.target.closest("[data-remove]");
  if (quantity) updateQuantity(quantity.dataset.id, Number(quantity.dataset.delta));
  if (remove) removeFromCart(remove.dataset.remove);
});

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("cart-open")) closeCart();
});

renderProducts();
renderCart();
