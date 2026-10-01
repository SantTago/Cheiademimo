/* ========================================================================
   CHEIA DE MIMO HOME · CONFIGURAÇÃO DA LOJA
   Edite os campos abaixo. Não é necessário editar HTML ou CSS para cadastrar
   produtos. A pasta produtos/ NÃO é lida automaticamente.
========================================================================= */
const CONFIG = {
  whatsapp: "5591991143369",             // DDI + DDD + número, só dígitos
  mensagemWhatsApp: "Olá! Gostaria de conhecer os produtos da Cheia de Mimo Home.",

  /* ================================================================
     CHAVE DA CAMPANHA DE LANÇAMENTO

     1. Troque ativa para true e publique o site: a promoção começa.
     2. Troque descontoPercentual para mudar TODOS os preços de uma vez.
     3. Troque duracaoHoras para escolher por quanto tempo o relógio roda.
     4. Quando quiser voltar ao site normal, use ativa: false.

     identificadorCampanha deve ser alterado a cada promoção nova. Isso faz
     o relógio começar novamente para quem já visitou uma campanha anterior.
  ================================================================= */
  promocao: {
    ativa: true,
    descontoPercentual: 10,
    duracaoHoras: 24,
    identificadorCampanha: "pre-inauguracao-site-v1",
    dataFim: "", // Opcional: "2026-10-04T23:59:59-03:00" para todos terminarem juntos.
    encerrarAutomaticamente: true,
    mostrarExperienciaDeEntrada: true,
  },
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
     preco: 29.00,
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
    preco: 29.00,
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
    preco: 29.00,
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
    preco: 29.00,
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
    preco: 29.00,
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
    preco: 29.00,
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
    preco: 29.00,
    frente: "produtos/Produto 7.jpeg",
    verso: "produtos/Produto 8.jpeg",                 // Opcional: "produtos/Produto 7 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
 
  {
    id: 9,
    nome: "Jogo Americano — Modelo 08",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.00,
    frente: "produtos/Produto 9.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 9 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  
  {
    id: 11,
    nome: "Jogo Americano — Modelo 10",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.00,
    frente: "produtos/Produto 11.jpeg",
    verso: "produtos/Produto 19.jpeg",                 // Opcional: "produtos/Produto 11 - Verso.jpg"
    exibirVerso: true,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
  {
    id: 12,
    nome: "Jogo Americano — Modelo 11",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.00,
    frente: "produtos/Produto 12.jpeg",
    verso: "",                 // Opcional: "produtos/Produto 12 - Verso.jpg"
    exibirVerso: false,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
 
  {
    id: 14,
    nome: "Jogo Americano — Modelo 13",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.00,
    frente: "produtos/Produto 14.jpeg",
    verso: "produtos/Produto 15.jpeg",                 // Opcional: "produtos/Produto 14 - Verso.jpg"
    exibirVerso: true,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
 
  {
    id: 17,
    nome: "Jogo Americano — Modelo 17",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.00,
    frente: "produtos/Produto 17.jpeg",
    verso: "produtos/Produto 16.jpeg",                 // Opcional: "produtos/Produto 17 - Verso.jpg"
    exibirVerso: true,         // Mude para true para liberar a troca de foto
    ativo: true,
  },

  

  {
    id: 21,
    nome: "Jogo Americano — Modelo 21",
    categoria: "Jogo americano",
    descricao: "Jogo americano impermeável • Disponibilidade sob consulta",
    preco: 29.00,
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
    preco: 29.00,
    frente: "produtos/Produto 22.jpeg",
    verso: "produtos/Produto 18.jpeg",                 // Opcional: "produtos/Produto 22 - Verso.jpg"
    exibirVerso: true,         // Mude para true para liberar a troca de foto
    ativo: true,
  },
{"id": 23, "nome": "Jogo Americano Courino — Azul", "categoria": "Jogos americanos em courino", "descricao": "Impermeável, tipo courino e fácil de limpar. Valor por unidade.", "preco": 18, "frente": "produtos/novos/courino-02.jpg", "verso": "produtos/novos/courino-08.jpg", "exibirVerso": true, "detalhe": true, "ativo": true},
{"id": 24, "nome": "Jogo Americano Courino — Marrom", "categoria": "Jogos americanos em courino", "descricao": "Impermeável, tipo courino e fácil de limpar. Valor por unidade.", "preco": 18, "frente": "produtos/novos/courino-03.jpg", "verso": "produtos/novos/courino-10.jpg", "exibirVerso": true, "detalhe": true, "ativo": true},
{"id": 25, "nome": "Jogo Americano Courino — Verde", "categoria": "Jogos americanos em courino", "descricao": "Impermeável, tipo courino e fácil de limpar. Valor por unidade.", "preco": 18, "frente": "produtos/novos/courino-04.jpg", "verso": "produtos/novos/courino-07.jpg", "exibirVerso": true, "detalhe": true, "ativo": true},
{"id": 26, "nome": "Jogo Americano Courino — Vinho", "categoria": "Jogos americanos em courino", "descricao": "Impermeável, tipo courino e fácil de limpar. Valor por unidade.", "preco": 18, "frente": "produtos/novos/courino-05.jpg", "verso": "produtos/novos/courino-09.jpg", "exibirVerso": true, "detalhe": true, "ativo": true},
{"id": 27, "nome": "Jogo Americano Courino — Claro", "categoria": "Jogos americanos em courino", "descricao": "Impermeável, tipo courino e fácil de limpar. Valor por unidade.", "preco": 18, "frente": "produtos/novos/courino-06.jpg", "verso": "produtos/novos/courino-11.jpg", "exibirVerso": true, "detalhe": true, "ativo": true},
{"id": 28, "nome": "Porta-guardanapo — Banana", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo banana. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-02.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 29, "nome": "Porta-guardanapo — Maçã", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo maçã. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-02.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 30, "nome": "Porta-guardanapo — Morango", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo morango. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-01.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 31, "nome": "Porta-guardanapo — Mamão", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo mamão. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-01.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 32, "nome": "Porta-guardanapo — Ovo", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo ovo. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-03.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 33, "nome": "Porta-guardanapo — Pão", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo pão. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-04.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 34, "nome": "Porta-guardanapo — Croissant", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo croissant. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-05.jpg", "verso": "", "exibirVerso": false, "ativo": true},
{"id": 35, "nome": "Porta-guardanapo — Pipoca", "categoria": "Porta-guardanapos", "descricao": "Valor por unidade do modelo pipoca. Outros modelos da foto vendidos separadamente.", "preco": 11.99, "frente": "produtos/novos/porta-guardanapo-06.jpg", "verso": "", "exibirVerso": false, "ativo": true}
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
  { titulo: " ", arquivo: "videos/Video3.mp4", capa: "videos/capa-video-3.jpg", ativo: true },
  { titulo: " ", arquivo: "videos/Video4.mp4", capa: "videos/capa-video-4.jpg", ativo: true },
  { titulo: "Inspiração à mesa", arquivo: "videos/Video5.mp4", capa: "videos/capa-video-5.jpg", ativo: true },
  { titulo: "Porta-guardanapos de perto", arquivo: "videos/Video6.mp4", capa: "videos/capa-video-6.jpg", ativo: true },
  { titulo: "Detalhes para encantar", arquivo: "videos/Video7.mp4", capa: "videos/capa-video-7.jpg", ativo: true },
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
  cartSavings: $("[data-cart-savings]"),
  cartSavingsValue: $("[data-cart-savings-value]"),
  cartCounts: document.querySelectorAll("[data-cart-count]"),
  checkout: $("[data-checkout]"),
  toast: $("[data-toast]"),
  launchExperience: $("[data-launch-experience]"),
  promotionClock: $("[data-promotion-clock]"),
  heroLaunch: $("[data-hero-launch]"),
  heroPrice: $("[data-hero-price]"),
};

function readCart() {
  try {
    const value = JSON.parse(localStorage.getItem("cheiaDeMimoCart") || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function createPromotionState() {
  const campaign = CONFIG.promocao || {};
  const percent = Math.min(99, Math.max(0, Number(campaign.descontoPercentual) || 0));
  const configured = campaign.ativa === true && percent > 0;
  const campaignId = String(campaign.identificadorCampanha || "campanha-padrao").trim() || "campanha-padrao";
  const storageKey = `cheiaDeMimoPromocao:${campaignId}`;
  let deadline = 0;

  if (configured) {
    const fixedDeadline = Date.parse(String(campaign.dataFim || "").trim());
    if (Number.isFinite(fixedDeadline)) {
      deadline = fixedDeadline;
    } else {
      try { deadline = Number(localStorage.getItem(storageKey)) || 0; } catch { deadline = 0; }
      if (!deadline) {
        const duration = Math.max(1, Number(campaign.duracaoHoras) || 24);
        deadline = Date.now() + duration * 60 * 60 * 1000;
        try { localStorage.setItem(storageKey, String(deadline)); } catch { /* Navegação privada */ }
      }
    }
  }

  const expired = Boolean(deadline && deadline <= Date.now());
  return {
    configured,
    active: configured && (!expired || campaign.encerrarAutomaticamente === false),
    percent,
    deadline,
    storageKey,
    timer: 0,
  };
}

const state = {
  products: PRODUTOS.filter((product) => product.ativo !== false),
  cart: readCart(),
  lastFocus: null,
  promotion: createPromotionState(),
};

const money = (value) => new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL",
}).format(value);
const originalPrice = (product) => Math.max(0, Number(product.preco) || 0);
const promotionalPrice = (product) => {
  const base = originalPrice(product);
  if (!base || !state.promotion.active) return base;
  return Math.round(base * (100 - state.promotion.percent)) / 100;
};
const price = (product) => (originalPrice(product) > 0 ? money(promotionalPrice(product)) : "Valor sob consulta");
const priceMarkup = (product, compact = false) => {
  const base = originalPrice(product);
  if (!base) return `<span class="price-current">Valor sob consulta</span>`;
  if (!state.promotion.active) return `<span class="price-current">${money(base)}</span>`;
  return `<span class="price-before">${money(base)}</span><span class="price-current">${money(promotionalPrice(product))}</span>${compact ? "" : `<span class="price-discount">−${state.promotion.percent}%</span>`}`;
};
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);
const normalize = (value) => String(value ?? "").normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

function countdownParts(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function updatePromotionClocks() {
  if (!state.promotion.active) return;
  const remaining = Math.max(0, state.promotion.deadline - Date.now());
  const time = countdownParts(remaining);
  document.querySelectorAll("[data-countdown-days]").forEach((node) => { node.textContent = String(time.days).padStart(2, "0"); });
  document.querySelectorAll("[data-countdown-hours]").forEach((node) => { node.textContent = String(time.hours).padStart(2, "0"); });
  document.querySelectorAll("[data-countdown-minutes]").forEach((node) => { node.textContent = String(time.minutes).padStart(2, "0"); });
  document.querySelectorAll("[data-countdown-seconds]").forEach((node) => { node.textContent = String(time.seconds).padStart(2, "0"); });
  const compact = `${time.days ? `${String(time.days).padStart(2, "0")}d ` : ""}${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`;
  document.querySelectorAll("[data-countdown-compact]").forEach((node) => { node.textContent = compact; });

  if (remaining <= 0 && CONFIG.promocao.encerrarAutomaticamente !== false) finishPromotion();
}

function renderAnnouncementContent() {
  const normalMessages = [
    "Jogos americanos que encantam sua mesa",
    "Coleções pensadas para receber bem",
    "Detalhes que transformam encontros em memórias",
    "Monte sua sacola e finalize pelo WhatsApp",
  ];
  const saleMessages = [
    `Inauguração do novo site · ${state.promotion.percent}% de desconto`,
    "Preço especial aplicado automaticamente em todo o site",
    "Uma nova experiência Cheia de Mimo começou",
    "Aproveite antes que o relógio chegue ao fim",
  ];
  const messages = state.promotion.active ? saleMessages : normalMessages;
  const html = messages.map((message) => `<span>${escapeHtml(message)}</span>`).join("");
  document.querySelectorAll(".announcement-group").forEach((group) => { group.innerHTML = html; });
}

function openLaunchExperience() {
  if (!state.promotion.active || !el.launchExperience) return;
  el.launchExperience.hidden = false;
  el.body.classList.add("launch-open");
  requestAnimationFrame(() => el.launchExperience.classList.add("is-visible"));
  window.setTimeout(() => $("[data-enter-launch]")?.focus(), 250);
}

function closeLaunchExperience(remember = true) {
  if (!el.launchExperience || el.launchExperience.hidden) return;
  el.launchExperience.classList.remove("is-visible");
  el.body.classList.remove("launch-open");
  if (remember) {
    try { sessionStorage.setItem(`${state.promotion.storageKey}:abertura`, "vista"); } catch { /* Navegação privada */ }
  }
  window.setTimeout(() => { el.launchExperience.hidden = true; }, 420);
}

function maybeShowLaunchExperience() {
  if (!state.promotion.active || CONFIG.promocao.mostrarExperienciaDeEntrada === false || !el.launchExperience) return;
  let seen = false;
  try { seen = sessionStorage.getItem(`${state.promotion.storageKey}:abertura`) === "vista"; } catch { seen = false; }
  if (seen) return;
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100 : 1350;
  window.setTimeout(openLaunchExperience, delay);
}

function applyPromotionUI({ showExperience = true } = {}) {
  window.clearInterval(state.promotion.timer);
  el.body.classList.toggle("promotion-active", state.promotion.active);
  document.querySelectorAll("[data-promotion-percent]").forEach((node) => { node.textContent = state.promotion.percent; });
  if (el.promotionClock) el.promotionClock.hidden = !state.promotion.active;
  if (el.heroLaunch) el.heroLaunch.hidden = !state.promotion.active;
  if (el.heroPrice) el.heroPrice.textContent = state.promotion.active
    ? `Todos os produtos com ${state.promotion.percent}% OFF`
    : "Peças a partir de R$ 11,99";
  renderAnnouncementContent();

  if (state.promotion.active) {
    updatePromotionClocks();
    state.promotion.timer = window.setInterval(updatePromotionClocks, 1000);
    if (showExperience) maybeShowLaunchExperience();
  } else {
    closeLaunchExperience(false);
  }
}

function finishPromotion() {
  if (!state.promotion.active) return;
  state.promotion.active = false;
  window.clearInterval(state.promotion.timer);
  applyPromotionUI({ showExperience: false });
  renderProducts();
  renderCart();
  showToast("A condição especial de lançamento foi encerrada.");
}

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

  const cardsHtml = (products) => products.map((product, index) => {
    const hasBack = Boolean(product.exibirVerso && String(product.verso || "").trim());
    return `
      <article class="product-card reveal${state.promotion.active ? " is-promotion" : ""}" data-delay="${index % 3}">
        <div class="product-media">
          <img src="${escapeHtml(product.frente)}" alt="${escapeHtml(product.nome)} — frente" loading="lazy" decoding="async" data-product-image="${product.id}" />
          <span class="media-label">Cheia de Mimo Home</span>
          ${state.promotion.active ? `<span class="product-promotion-seal">−${state.promotion.percent}%</span>` : ""}
        </div>
        <div class="product-content">
          ${hasBack ? `<div class="side-switcher" role="group" aria-label="Ver fotos de ${escapeHtml(product.nome)}">
            <button type="button" class="active" data-side="front" data-product-id="${product.id}" aria-pressed="true">${product.detalhe ? "Foto" : "Frente"}</button>
            <button type="button" data-side="back" data-product-id="${product.id}" aria-pressed="false">${product.detalhe ? "Detalhe" : "Verso"}</button>
          </div>` : `<span class="product-kicker">${escapeHtml(product.categoria)}</span>`}
          <h3 class="product-name">${escapeHtml(product.nome)}</h3>
          <p class="product-description">${escapeHtml(product.descricao)}</p>
          <div class="product-purchase">
            <div class="product-price">${priceMarkup(product)}</div>
            <button class="add-button" type="button" data-add-product="${product.id}" aria-label="Adicionar ${escapeHtml(product.nome)} à sacola">Adicionar <span aria-hidden="true">+</span></button>
          </div>
        </div>
      </article>`;
  }).join("");
  const sectionPrice = (value) => state.promotion.active
    ? `<span class="section-sale-price"><del>${money(value)}</del> <strong>${money(Math.round(value * (100 - state.promotion.percent)) / 100)}</strong></span>`
    : `<strong>${money(value)}</strong>`;
  const sections = [
    { category: "Jogo americano", id: "colecao-original", title: "Jogos americanos", description: `As estampas que você já ama. ${sectionPrice(29)} por unidade.` },
    { category: "Jogos americanos em courino", id: "colecao-courino", title: "Jogos americanos em courino", description: `Impermeáveis e fáceis de limpar. ${sectionPrice(18)} por unidade.` },
    { category: "Porta-guardanapos", id: "colecao-porta-guardanapos", title: "Porta-guardanapos", description: `Pequenos detalhes para completar sua mesa. ${sectionPrice(11.99)} por unidade.` },
  ];
  el.grid.innerHTML = sections.map((section) => {
    const products = shown.filter((product) => product.categoria === section.category);
    if (!products.length) return "";
    return `<section class="catalog-group" id="${section.id}" aria-labelledby="${section.id}-title">
      <header class="catalog-group-heading"><div><h3 id="${section.id}-title">${section.title}</h3><p>${section.description}</p></div><span>${products.length} modelos</span></header>
      ${section.id === "colecao-courino" && !term ? `<div class="collection-overview"><img src="produtos/novos/courino-01.jpg" alt="Cores da coleção courino" loading="lazy"><img src="produtos/novos/courino-12.jpg" alt="Jogos americanos courino em diferentes cores" loading="lazy"><p>Cores para combinar.<br><em>Praticidade para todos os dias.</em></p></div>` : ""}
      <div class="products-grid">${cardsHtml(products)}</div></section>`;
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
      <div class="video-poster"><img class="video-poster-blur" ${video.capa ? `src="${escapeHtml(video.capa)}"` : ""} alt="" aria-hidden="true" loading="lazy" decoding="async" /><img class="video-poster-art" ${video.capa ? `src="${escapeHtml(video.capa)}"` : ""} alt="" loading="lazy" decoding="async" /></div>
      <video hidden preload="metadata" playsinline controls ${video.capa ? `poster="${escapeHtml(video.capa)}"` : ""} aria-label="${escapeHtml(video.titulo)}">
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
    if (!enabled[cards.indexOf(card)].capa) {
      video.preload = "auto";
      video.addEventListener("loadeddata", () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth; canvas.height = video.videoHeight;
          canvas.getContext("2d").drawImage(video, 0, 0);
          const cover = canvas.toDataURL("image/jpeg", 0.85);
          video.poster = cover;
          card.querySelectorAll(".video-poster img").forEach((img) => { img.src = cover; });
        } catch { /* A reprodução permanece disponível se a captura falhar. */ }
      }, { once: true });
    }
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
  showToast(state.promotion.active ? `Produto adicionado com ${state.promotion.percent}% OFF` : "Produto adicionado à sacola");
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
  const originalTotal = entries.reduce((sum, item) => sum + originalPrice(item.product) * item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + promotionalPrice(item.product) * item.quantity, 0);
  const savings = Math.max(0, originalTotal - total);
  el.cartCounts.forEach((counter) => { counter.textContent = count; });
  el.cartTotal.textContent = entries.every(({ product }) => product.preco > 0) ? money(total) : "A confirmar";
  if (el.cartSavings && el.cartSavingsValue) {
    el.cartSavings.hidden = !(state.promotion.active && entries.length && savings > 0);
    el.cartSavingsValue.textContent = money(savings);
  }
  el.checkout.disabled = !entries.length;

  if (!entries.length) {
    el.cartItems.innerHTML = `<div class="cart-empty"><strong>Sua sacola está vazia.</strong><span>Escolha os produtos que mais combinam com você.</span></div>`;
    return;
  }
  el.cartItems.innerHTML = entries.map(({ product, quantity }) => `
    <article class="cart-item">
      <img src="${escapeHtml(product.frente)}" alt="${escapeHtml(product.nome)}" loading="lazy" />
      <div>
        <h3>${escapeHtml(product.nome)}</h3><div class="cart-item-price">${priceMarkup(product, true)}</div>
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
  const originalTotal = entries.reduce((sum, item) => sum + originalPrice(item.product) * item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + promotionalPrice(item.product) * item.quantity, 0);
  const savings = Math.max(0, originalTotal - total);
  const lines = [
    "Olá! Gostaria de fazer um pedido na Cheia de Mimo Home:", "",
    ...(state.promotion.active ? [`🎉 Condição de lançamento: ${state.promotion.percent}% de desconto`, ""] : []),
    ...entries.map(({ product, quantity }) => `• ${product.nome} — ${quantity} ${quantity === 1 ? "unidade" : "unidades"} — ${originalPrice(product) > 0 ? money(promotionalPrice(product) * quantity) : "valor sob consulta"}`),
    "", `Total de peças: ${count}`,
    entries.every(({ product }) => product.preco > 0) ? `Subtotal: ${money(total)}` : "Valor: a confirmar",
    ...(state.promotion.active && savings > 0 ? [`Economia de lançamento: ${money(savings)}`] : []),
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
    img.alt = `${product.nome} — ${product.detalhe ? (back ? "detalhe" : "foto") : (back ? "verso" : "frente")}`;
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

$("[data-close-launch]")?.addEventListener("click", () => closeLaunchExperience());
$("[data-enter-launch]")?.addEventListener("click", () => {
  closeLaunchExperience();
  window.setTimeout(() => $("#produtos")?.scrollIntoView({ behavior: "smooth", block: "start" }), 180);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeLaunchExperience(); closeCart(); closeMenu(); }
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
applyPromotionUI();
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


// Fotos do banner: preserva o espaço da imagem e respeita movimento reduzido.
function setupHeroSlideshow() {
  const carousel = document.querySelector("[data-hero-slideshow]");
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const dots = [...carousel.querySelectorAll("[data-hero-slide]")];
  const toggle = carousel.querySelector("[data-hero-toggle]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let paused = reducedMotion.matches;
  let hovering = false;
  let focused = false;
  let timer;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === current);
      slide.setAttribute("aria-hidden", String(i !== current));
    });
    dots.forEach((dot, i) => dot.setAttribute("aria-current", String(i === current)));
  }
  function schedule() {
    window.clearInterval(timer);
    toggle.textContent = paused ? "Reproduzir" : "Pausar";
    toggle.setAttribute("aria-label", paused ? "Iniciar troca de fotos" : "Pausar troca de fotos");
    if (!paused && !hovering && !focused && !document.hidden) {
      timer = window.setInterval(() => show(current + 1), 4500);
    }
  }
  dots.forEach((dot, index) => dot.addEventListener("click", () => { show(index); schedule(); }));
  toggle.addEventListener("click", () => { paused = !paused; schedule(); });
  carousel.addEventListener("mouseenter", () => { hovering = true; schedule(); });
  carousel.addEventListener("mouseleave", () => { hovering = false; schedule(); });
  carousel.addEventListener("focusin", () => { focused = true; schedule(); });
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) { focused = false; schedule(); }
  });
  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener("change", () => { paused = reducedMotion.matches; schedule(); });
  show(0);
  schedule();
}
setupHeroSlideshow();
