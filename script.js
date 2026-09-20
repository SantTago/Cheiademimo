/* ========================================================================
   CHEIA DE MIMO HOME · CONFIGURAÇÃO DA LOJA
   Edite os campos abaixo. Não é necessário editar HTML ou CSS para cadastrar
   produtos. A pasta produtos/ NÃO é lida automaticamente.
========================================================================= */
const CONFIG = {
  whatsapp: "5591991143369",             // DDI + DDD + número, só dígitos
  mensagemWhatsApp: "Olá! Gostaria de conhecer os produtos da Cheia de Mimo Home.",
};

/* CATÁLOGO MANUAL
   - ativo: false => esconde o produto sem apagar o cadastro.
   - frente: primeira foto; verso: segunda foto (se houver).
   - exibirVerso: true => habilita Frente / Verso, mas SÓ se verso tiver link.
   - id: cada produto deve ter um número único, que não muda ao reordenar.
   - Cada produto tem seu próprio preço, nome, texto e imagens.

   EXEMPLO para COPIAR e colar antes do último ];
   {
     id: 23,
     nome: "Nome do seu produto",
     categoria: "Jogo americano",
     descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
     preco: 29.90,
     frente: "produtos/minha-foto-frente.jpg",
     verso: "produtos/minha-foto-verso.jpg",
     exibirVerso: true,
     ativo: true,
   },
*/
const PRODUTOS = [
  
  
   
  {
    id: 2,
    nome: "Jogo Americano — Modelo 01",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 2.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 2 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 3,
    nome: "Jogo Americano — Modelo 02",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 3.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 3 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 4,
    nome: "Jogo Americano — Modelo 03",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 4.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 4 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 5,
    nome: "Jogo Americano — Modelo 04",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 5.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 5 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 6,
    nome: "Jogo Americano — Modelo 05",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 6.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 6 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 7,
    nome: "Jogo Americano — Modelo 06",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 7.jpeg",
    verso: "produtos/Produto 8.jpeg",                 // Opcional: "produtos/Produto 7 - Verso.jpg"
    exibirVerso: true,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
 
  {
    id: 9,
    nome: "Jogo Americano — Modelo 08",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 9.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 9 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 10,
    nome: "Jogo Americano — Modelo 09",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 10.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 10 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 11,
    nome: "Jogo Americano — Modelo 10",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 11.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 11 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 12,
    nome: "Jogo Americano — Modelo 11",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 12.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 12 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 13,
    nome: "Jogo Americano — Modelo 12",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 13.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 13 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 14,
    nome: "Jogo Americano — Modelo 13",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 14.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 14 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 15,
    nome: "Jogo Americano — Modelo 14",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 15.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 15 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 16,
    nome: "Jogo Americano — Modelo 15",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 16.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 16 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 17,
    nome: "Jogo Americano — Modelo 17",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 17.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 17 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 18,
    nome: "Jogo Americano — Modelo 18",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 18.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 18 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 19,
    nome: "Jogo Americano — Modelo 19",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 19.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 19 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },

  {
    id: 21,
    nome: "Jogo Americano — Modelo 21",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 21.jpeg",
    verso: "produtos/Produto 20.jpeg",                 // Opcional: "produtos/Produto 21 - Verso.jpg"
    exibirVerso: true,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 22,
    nome: "Jogo Americano — Modelo 22",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.90,
    frente: "produtos/Produto 22.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 22 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
 ];

/* CARROSSEL DE VÍDEOS: nomes SEM espaço e SEM acento, exatos no GitHub Pages.
   Coloque os arquivos MP4 na pasta "videos" com os nomes abaixo.
   O cartão fica marcado "Em breve" se o arquivo não tiver sido enviado.
   Pode editar titulo e capa; a capa reutiliza fotos originais, sem alterá-las.
   Para ocultar um cartão, defina ativo: false.
*/
const VIDEOS = [
  { titulo: " ", arquivo: "videos/Video1.mp4", capa: "produtos/capa2.jpeg", ativo: true },
  { titulo: " ", arquivo: "videos/Video2.mp4", capa: "produtos/capa1.jpeg", ativo: true },
  { titulo: " ", arquivo: "videos/Video3.mp4", capa: "produtos/Produto 9.jpeg", ativo: true },
  { titulo: " ", arquivo: "videos/Video4.mp4", capa: "produtos/Produto 21.jpeg", ativo: true },
];

/* ========================================================================
   MOTOR DA LOJA · não é necessário alterar abaixo desta linha.
========================================================================= */

const $ = (selector) => document.querySelector(selector);
const el = {
  body: document.body,
  header: $(".site-header"),
  menu: $(".menu-trigger"),
  mobileNav: $(".mobile-nav"),
  grid: $("[data-products-grid]"),
  search: $("[data-product-search]"),
  productCount: $("[data-products-count]"),
  videoCarousel: $("[data-video-carousel]"),
  cartDrawer: $("[data-cart-drawer]"),
  cartItems: $("[data-cart-items]"),
  cartTotal: $("[data-cart-total]"),
  cartCounts: document.querySelectorAll("[data-cart-count]"),
  checkout: $("[data-checkout]"),
  toast: $("[data-toast]"),
};

function readCart() {
  try {
    const value = JSON.parse(localStorage.getItem("cheiaDeMimoCart") || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

const state = {
  products: PRODUTOS.filter((product) => product.ativo !== false),
  cart: readCart(),
  lastFocus: null,
};

const money = (value) => new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL",
}).format(value);
const price = (product) => (product.preco > 0 ? money(product.preco) : "Valor sob consulta");
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);
const normalize = (value) => String(value ?? "").normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

function renderProducts() {
  const term = normalize(el.search.value);
  const shown = state.products.filter((product) =>
    normalize(`${product.nome} ${product.categoria} ${product.descricao}`).includes(term)
  );
  el.productCount.textContent = `${shown.length} ${shown.length === 1 ? "produto" : "produtos"}`;
  if (!shown.length) {
    el.grid.innerHTML = `<div class="empty-state">${state.products.length
      ? "Nenhum produto encontrado. Tente outro nome."
      : "Nenhum produto ativo. Cadastre produtos na lista PRODUTOS do arquivo script.js."}</div>`;
    return;
  }

  el.grid.innerHTML = shown.map((product, index) => {
    const hasBack = Boolean(product.exibirVerso && String(product.verso || "").trim());
    return `
      <article class="product-card reveal" data-delay="${index % 3}">
        <div class="product-media">
          <img src="${escapeHtml(product.frente)}" alt="${escapeHtml(product.nome)} — frente" loading="lazy" decoding="async" data-product-image="${product.id}" />
          <span class="media-label">Cheia de Mimo Home</span>
        </div>
        <div class="product-content">
          ${hasBack ? `<div class="side-switcher" role="group" aria-label="Ver fotos de ${escapeHtml(product.nome)}">
            <button type="button" class="active" data-side="front" data-product-id="${product.id}" aria-pressed="true">Frente</button>
            <button type="button" data-side="back" data-product-id="${product.id}" aria-pressed="false">Verso</button>
          </div>` : `<span class="product-kicker">${escapeHtml(product.categoria)}</span>`}
          <h3 class="product-name">${escapeHtml(product.nome)}</h3>
          <p class="product-description">${escapeHtml(product.descricao)}</p>
          <div class="product-purchase">
            <p class="product-price">${price(product)}</p>
            <button class="add-button" type="button" data-add-product="${product.id}" aria-label="Adicionar ${escapeHtml(product.nome)} à sacola">Adicionar <span aria-hidden="true">+</span></button>
          </div>
        </div>
      </article>`;
  }).join("");
  observeReveals();
}

function setupVideos() {
  const enabled = VIDEOS.filter((video) => video.ativo !== false && video.arquivo && video.titulo);
  const carousel = el.videoCarousel;
  const dots = $("[data-video-dots]");
  const indicator = $("[data-video-indicator]");
  const prev = $("[data-video-prev]");
  const next = $("[data-video-next]");
  if (!enabled.length) {
    $("#videos").hidden = true;
    document.querySelectorAll("[data-video-nav]").forEach((nav) => { nav.hidden = true; });
    return;
  }
  carousel.innerHTML = enabled.map((video, index) => `
    <article class="video-card" data-video-card>
      <div class="video-poster"><img class="video-poster-blur" src="${escapeHtml(video.capa)}" alt="" aria-hidden="true" loading="lazy" decoding="async" /><img class="video-poster-art" src="${escapeHtml(video.capa)}" alt="" loading="lazy" decoding="async" /></div>
      <video hidden preload="metadata" playsinline controls poster="${escapeHtml(video.capa)}" aria-label="${escapeHtml(video.titulo)}">
        <source src="${escapeHtml(video.arquivo)}" type="video/mp4" />
      </video>
      <div class="video-overlay">
        <div class="video-card-top"><span>INSPIRAÇÃO ${String(index + 1).padStart(2, "0")}</span><span>✳</span></div>
        <div class="video-card-bottom">
          <p>CHEIA DE MIMO HOME</p><h3>${escapeHtml(video.titulo)}</h3>
          <button type="button" class="video-play" hidden data-play-video aria-label="Assistir ${escapeHtml(video.titulo)}"><span aria-hidden="true">▶</span> Assistir vídeo</button>
          <span class="video-unavailable">Em breve · ${escapeHtml(video.arquivo.split("/").pop())}</span>
        </div>
      </div>
    </article>`).join("");
  const cards = [...carousel.querySelectorAll("[data-video-card]")];
  dots.innerHTML = cards.map((_, index) => `<button type="button" data-video-dot="${index}" aria-label="Ir para inspiração ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("");
  const dotButtons = [...dots.querySelectorAll("button")];
  let current = 0;
  const leftOf = (card) => carousel.scrollLeft + card.getBoundingClientRect().left - carousel.getBoundingClientRect().left;
  const goTo = (index, smooth = true) => {
    const target = Math.max(0, Math.min(index, cards.length - 1));
    carousel.scrollTo({ left: leftOf(cards[target]), behavior: smooth ? "smooth" : "instant" });
    setCurrent(target);
  };
  function setCurrent(index) {
    current = index;
    indicator.textContent = `${String(index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    dotButtons.forEach((dot, dotIndex) => dot.setAttribute("aria-current", String(dotIndex === index)));
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1 || carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 3;
  }
  prev.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));
  dotButtons.forEach((dot, index) => dot.addEventListener("click", () => goTo(index)));
  let scrollFrame = 0;
  carousel.addEventListener("scroll", () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      const nearest = cards.reduce((best, card, index) =>
        Math.abs(card.getBoundingClientRect().left - carousel.getBoundingClientRect().left) < Math.abs(cards[best].getBoundingClientRect().left - carousel.getBoundingClientRect().left) ? index : best, 0);
      setCurrent(nearest);
      // Não tocar áudio em um cartão que já saiu da tela.
      cards.forEach((card, index) => { if (index !== nearest) card.querySelector("video").pause(); });
    });
  }, { passive: true });
  carousel.addEventListener("keydown", (event) => {
    if (event.target !== carousel) return;
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(current + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(current - 1); }
  });
  cards.forEach((card) => {
    const video = card.querySelector("video");
    const button = card.querySelector("[data-play-video]");
    const available = () => { card.classList.add("video-ready"); button.hidden = false; };
    const missing = () => {
      card.classList.remove("video-ready", "is-playing");
      card.classList.add("video-missing");
      button.hidden = true; video.hidden = true;
    };
    video.addEventListener("loadedmetadata", available);
    video.addEventListener("error", missing);
    // source filho pode emitir erro separado do elemento <video>.
    video.querySelector("source").addEventListener("error", missing);
    button.addEventListener("click", async () => {
      if (!card.classList.contains("video-ready")) return;
      cards.forEach((other) => { if (other !== card) other.querySelector("video").pause(); });
      video.hidden = false;
      card.classList.add("is-playing");
      try { await video.play(); }
      catch { card.classList.remove("is-playing"); video.hidden = true; showToast("Não foi possível reproduzir o vídeo. Confira o arquivo MP4."); }
    });
    video.addEventListener("ended", () => { video.hidden = true; card.classList.remove("is-playing"); });
  });
  setCurrent(0);
}

function saveCart() {
  try { localStorage.setItem("cheiaDeMimoCart", JSON.stringify(state.cart)); } catch { /* Navegação privada */ }
}

function cartEntries() {
  return Object.entries(state.cart).map(([id, quantity]) => ({
    product: state.products.find((item) => item.id === Number(id)),
    quantity: Number(quantity),
  })).filter(({ product, quantity }) => product && Number.isSafeInteger(quantity) && quantity > 0);
}

function addToCart(id) {
  if (!state.products.some((product) => product.id === id)) return;
  state.cart[id] = (Number(state.cart[id]) || 0) + 1;
  saveCart();
  renderCart();
  showToast("Produto adicionado à sacola");
}

function changeQuantity(id, amount) {
  const next = (Number(state.cart[id]) || 0) + amount;
  if (next <= 0) delete state.cart[id];
  else state.cart[id] = next;
  saveCart();
  renderCart();
}

function renderCart() {
  const entries = cartEntries();
  const count = entries.reduce((total, item) => total + item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + Math.max(0, Number(item.product.preco) || 0) * item.quantity, 0);
  el.cartCounts.forEach((counter) => { counter.textContent = count; });
  el.cartTotal.textContent = entries.every(({ product }) => product.preco > 0) ? money(total) : "A confirmar";
  el.checkout.disabled = !entries.length;

  if (!entries.length) {
    el.cartItems.innerHTML = `<div class="cart-empty"><strong>Sua sacola está vazia.</strong><span>Escolha os produtos que mais combinam com você.</span></div>`;
    return;
  }
  el.cartItems.innerHTML = entries.map(({ product, quantity }) => `
    <article class="cart-item">
      <img src="${escapeHtml(product.frente)}" alt="${escapeHtml(product.nome)}" loading="lazy" />
      <div>
        <h3>${escapeHtml(product.nome)}</h3><p>${price(product)}</p>
        <div class="quantity" aria-label="Quantidade de ${escapeHtml(product.nome)}">
          <button type="button" data-quantity="-1" data-product-id="${product.id}" aria-label="Diminuir quantidade">−</button>
          <span>${quantity}</span>
          <button type="button" data-quantity="1" data-product-id="${product.id}" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove-product="${product.id}" aria-label="Remover ${escapeHtml(product.nome)}">Remover</button>
    </article>`).join("");
}

function openCart() {
  state.lastFocus = document.activeElement;
  el.cartDrawer.inert = false;
  el.body.classList.add("cart-open");
  el.cartDrawer.setAttribute("aria-hidden", "false");
  $("[data-close-cart]").focus();
}

function closeCart() {
  if (!el.body.classList.contains("cart-open")) return;
  el.body.classList.remove("cart-open");
  el.cartDrawer.setAttribute("aria-hidden", "true");
  el.cartDrawer.inert = true;
  if (state.lastFocus && state.lastFocus.isConnected) state.lastFocus.focus();
}

function checkoutWhatsApp() {
  const entries = cartEntries();
  if (!entries.length) return;
  const count = entries.reduce((total, item) => total + item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + Math.max(0, Number(item.product.preco) || 0) * item.quantity, 0);
  const lines = [
    "Olá! Gostaria de fazer um pedido na Cheia de Mimo Home:", "",
    ...entries.map(({ product, quantity }) => `• ${product.nome} — ${quantity} ${quantity === 1 ? "unidade" : "unidades"} — ${price(product.preco > 0 ? product : { preco: 0 }) === "Valor sob consulta" ? "valor sob consulta" : money(product.preco * quantity)}`),
    "", `Total de peças: ${count}`,
    entries.every(({ product }) => product.preco > 0) ? `Subtotal: ${money(total)}` : "Valor: a confirmar",
    "", "Pode confirmar a disponibilidade e me orientar sobre entrega e pagamento?",
  ];
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
}

let toastTimer;
function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2400);
}

function observeReveals() {
  const nodes = document.querySelectorAll(".reveal:not(.visible)");
  if (!nodes.length) return;
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: .06, rootMargin: "0px 0px 30px 0px" });
  nodes.forEach((node) => observer.observe(node));
}

function switchPhoto(button) {
  const product = state.products.find((item) => item.id === Number(button.dataset.productId));
  if (!product) return;
  const back = button.dataset.side === "back";
  if (back && !(product.exibirVerso && product.verso)) return;
  const img = document.querySelector(`[data-product-image="${product.id}"]`);
  if (!img) return;
  const source = back ? product.verso : product.frente;
  const oldSource = img.getAttribute("src");
  const oldAlt = img.alt;
  const buttons = button.parentElement.querySelectorAll("button");
  buttons.forEach((item) => {
    item.classList.toggle("active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  if (oldSource === source) return;
  img.classList.add("is-switching");
  const preview = new Image();
  preview.onload = () => {
    img.src = source;
    img.alt = `${product.nome} — ${back ? "verso" : "frente"}`;
    img.classList.remove("is-switching");
  };
  preview.onerror = () => {
    img.src = oldSource;
    img.alt = oldAlt;
    img.classList.remove("is-switching");
    buttons.forEach((item) => {
      const active = item.dataset.side === (oldSource === product.verso ? "back" : "front");
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    showToast("Foto indisponível. Confira o caminho do verso no script.js.");
  };
  preview.src = source;
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add-product]");
  const quantity = event.target.closest("[data-quantity]");
  const remove = event.target.closest("[data-remove-product]");
  const side = event.target.closest("[data-side]");
  if (add) addToCart(Number(add.dataset.addProduct));
  if (quantity) changeQuantity(Number(quantity.dataset.productId), Number(quantity.dataset.quantity));
  if (remove) {
    delete state.cart[remove.dataset.removeProduct];
    saveCart(); renderCart();
  }
  if (side) switchPhoto(side);
});

el.search.addEventListener("input", renderProducts);
document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
$("[data-close-cart]").addEventListener("click", closeCart);
$("[data-cart-backdrop]").addEventListener("click", closeCart);
el.checkout.addEventListener("click", checkoutWhatsApp);
$("[data-clear-cart]").addEventListener("click", () => {
  state.cart = {}; saveCart(); renderCart();
});

function closeMenu() {
  el.body.classList.remove("menu-open");
  el.menu.setAttribute("aria-expanded", "false");
  el.mobileNav.setAttribute("aria-hidden", "true");
}
el.menu.addEventListener("click", () => {
  const open = el.body.classList.toggle("menu-open");
  el.menu.setAttribute("aria-expanded", String(open));
  el.mobileNav.setAttribute("aria-hidden", String(!open));
});
el.mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeCart(); closeMenu(); }
  if (event.key === "Tab" && el.body.classList.contains("cart-open")) {
    const controls = [...el.cartDrawer.querySelectorAll("button:not(:disabled), a[href]")];
    const first = controls[0]; const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

window.addEventListener("scroll", () => el.header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });
$("[data-year]").textContent = new Date().getFullYear();
$("[data-whatsapp-float]").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemWhatsApp)}`;
$("[data-whatsapp-footer]").href = `https://wa.me/${CONFIG.whatsapp}`;
if (/^55\d{11}$/.test(CONFIG.whatsapp)) {
  const number = CONFIG.whatsapp;
  $("[data-whatsapp-footer]").textContent = `+${number.slice(0, 2)} ${number.slice(2, 4)} ${number.slice(4, 9)}-${number.slice(9)}`;
}
setupVideos();
renderProducts();
renderCart();
observeReveals();

// A fita inicia em movimento e só para se a pessoa usar o controle.
const announcementToggle = document.querySelector("[data-announcement-toggle]");
if (announcementToggle) {
  announcementToggle.addEventListener("click", () => {
    const paused = announcementToggle.closest(".announcement-bar").classList.toggle("is-paused");
    announcementToggle.setAttribute("aria-pressed", String(paused));
    announcementToggle.setAttribute("aria-label", paused ? "Reproduzir a faixa de informações" : "Pausar a faixa de informações");
    announcementToggle.title = paused ? "Retomar movimento" : "Pausar movimento";
    announcementToggle.textContent = paused ? "▶" : "Ⅱ";
  });
}

// Remoção da animação breve de entrada: não deixa camada invisível sobre os botões.
const intro = document.querySelector("[data-intro]");
if (intro) window.setTimeout(() => intro.remove(), 1250);
