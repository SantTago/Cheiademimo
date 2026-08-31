const WHATSAPP_NUMBER = "5591991143369";
const CART_KEY = "cheia-de-mimo-cart";

const products = [
  ["folhagem-salvia","Jogo Americano Folhagem Sálvia","Folhagens","Jogo americano","folhagem-salvia.jpg","Jogo americano verde-sálvia bordado com folhagens"],
  ["folhagem-rubi","Jogo Americano Folhagem Rubi","Folhagens","Jogo americano","folhagem-rubi.jpg","Jogo americano rubi bordado com folhagens"],
  ["folhagem-marfim","Jogo Americano Folhagem Marfim","Folhagens","Jogo americano","folhagem-marfim.jpg","Jogo americano marfim bordado com folhagens"],
  ["kit-folhagens","Composição Folhagens","Folhagens","Composição de mesa","colecao-folhagens.jpg","Composição da coleção Folhagens em diferentes cores"],
  ["fe-marfim","Jogo Americano Fé — Marfim","Fé à Mesa","Jogo americano","fe-a-mesa.jpg","Jogo americano marfim com bordado dourado"],
  ["bordado-salvia","Jogo Americano Bordado Sálvia","Fé à Mesa","Jogo americano","bordado-salvia.jpg","Jogo americano branco com bordado verde-sálvia"]
].map(([id,name,collection,category,file,alt]) => ({id,name,collection,category,image:`./images/${file}`,alt}));

let cart = loadCart();
const $ = selector => document.querySelector(selector);
const grid = $("#productsGrid");
const cartBody = $("#cartBody");
const panel = $("#cartPanel");
const backdrop = $("#cartBackdrop");

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function totalItems() {
  return cart.reduce((sum,item) => sum + item.quantity, 0);
}

function renderProducts() {
  grid.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.alt}" loading="lazy">
      </div>
      <div class="product-content">
        <div>
          <p class="product-collection">${product.collection}</p>
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="availability">Disponibilidade sob consulta</p>
        </div>
        <button class="add-button" type="button" data-add="${product.id}">Adicionar</button>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const total = totalItems();
  $("#cartCount").textContent = total;
  $("#cartTotal").textContent = total;
  $("#cartSubtitle").textContent = total ? `${total} ${total === 1 ? "peça selecionada" : "peças selecionadas"}` : "Escolha seus detalhes favoritos para começar.";
  $("#cartSummary").hidden = total === 0;

  if (!cart.length) {
    cartBody.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">♡</div><h3>Seu carrinho está vazio</h3><p>Adicione produtos para montar seu pedido pelo WhatsApp.</p></div>';
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <article class="cart-item">
      <img src="${item.image}" alt="">
      <div class="cart-item-info">
        <p>${item.collection}</p><h3>${item.name}</h3>
        <div class="quantity-control"><button type="button" data-delta="-1" data-id="${item.id}" aria-label="Diminuir">−</button><span>${item.quantity}</span><button type="button" data-delta="1" data-id="${item.id}" aria-label="Aumentar">+</button></div>
      </div>
      <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Remover">×</button>
    </article>
  `).join("");

  $("#whatsappButton").href = buildWhatsAppUrl();
}

function buildWhatsAppUrl() {
  const total = totalItems();
  const items = cart.map(item => `• ${item.quantity}x ${item.name}\n  Coleção: ${item.collection}`);
  const message = [
    "Olá! Vim pelo site da Cheia de Mimo Home e gostaria de solicitar um orçamento.",
    "", "*Meu pedido:*", ...items, "",
    `*Total:* ${total} ${total === 1 ? "peça" : "peças"}`, "",
    "Pode me confirmar disponibilidade, cores, valores, prazo, pagamento e entrega?"
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({...product,quantity:1});
  saveCart();
  renderCart();
  showToast("Produto adicionado ao carrinho");
}

function updateQuantity(id,delta) {
  const item = cart.find(product => product.id === id);
  if (!item) return;
  item.quantity = Math.max(1,item.quantity + delta);
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
    panel.setAttribute("aria-hidden","false");
    $("#closeCart").focus();
  });
}

function closeCart() {
  document.body.classList.remove("cart-open");
  panel.setAttribute("aria-hidden","true");
  setTimeout(() => backdrop.hidden = true,250);
  $("#openCart").focus();
}

function showToast(message) {
  const toast = $("#toastMessage");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"),2200);
}

grid.addEventListener("click",event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

cartBody.addEventListener("click",event => {
  const quantity = event.target.closest("[data-delta]");
  const remove = event.target.closest("[data-remove]");
  if (quantity) updateQuantity(quantity.dataset.id,Number(quantity.dataset.delta));
  if (remove) removeFromCart(remove.dataset.remove);
});

$("#openCart").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
backdrop.addEventListener("click",closeCart);
document.addEventListener("keydown",event => {
  if (event.key === "Escape" && document.body.classList.contains("cart-open")) closeCart();
});

renderProducts();
renderCart();
