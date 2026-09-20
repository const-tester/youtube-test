const version = '0.3.3';

// ============================================================
//  OPTIONS CSS
// ============================================================
const cssRemoveAds = `
  .ytd-search ytd-shelf-renderer,
  ytd-reel-shelf-renderer,
  ytd-merch-shelf-renderer,
  ytd-action-companion-ad-renderer,
  ytd-display-ad-renderer,
  ytd-video-masthead-ad-advertiser-info-renderer,
  ytd-video-masthead-ad-primary-video-renderer,
  ytd-in-feed-ad-layout-renderer,
  ytd-ad-slot-renderer,
  ytd-statement-banner-renderer,
  ytd-banner-promo-renderer-background
  ytd-ad-slot-renderer,
  ytd-in-feed-ad-layout-renderer,
  ytd-engagement-panel-section-list-renderer:not(.ytd-popup-container):not([target-id='engagement-panel-clip-create']):not(.ytd-shorts):not([target-id="engagement-panel-macro-markers-description-chapters"]):not([target-id="engagement-panel-searchable-transcript"]),
  ytd-compact-video-renderer:has(.goodTube_hidden),
  ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)
  .ytd-video-masthead-ad-v3-renderer,
  div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,
  div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,
  div#main-container.style-scope.ytd-promoted-video-renderer,
  div#player-ads.style-scope.ytd-watch-flexy,
  #clarify-box,
  ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer),
  ytm-rich-shelf-renderer,
  ytm-search ytm-shelf-renderer,
  ytm-button-renderer.icon-avatar_logged_out,
  ytm-companion-slot,
  ytm-reel-shelf-renderer,
  ytm-merch-shelf-renderer,
  ytm-action-companion-ad-renderer,
  ytm-display-ad-renderer,
  ytm-rich-section-renderer,
  ytm-video-masthead-ad-advertiser-info-renderer,
  ytm-video-masthead-ad-primary-video-renderer,
  ytm-in-feed-ad-layout-renderer,
  ytm-ad-slot-renderer,
  ytm-statement-banner-renderer,
  ytm-banner-promo-renderer-background
  ytm-ad-slot-renderer,
  ytm-in-feed-ad-layout-renderer,
  ytm-compact-video-renderer:has(.goodTube_hidden),
  ytm-rich-item-renderer:has(> #content > ytm-ad-slot-renderer)
  .ytm-video-masthead-ad-v3-renderer,
  div#root.style-scope.ytm-display-ad-renderer.yt-simple-endpoint,
  div#sparkles-container.style-scope.ytm-promoted-sparkles-web-renderer,
  div#main-container.style-scope.ytm-promoted-video-renderer,
  div#player-ads.style-scope.ytm-watch-flexy,
  ytd-compact-movie-renderer,
  yt-about-this-ad-renderer,
  masthead-ad,
  ad-slot-renderer,
  yt-mealbar-promo-renderer,
  statement-banner-style-type-compact,
  ytm-promoted-sparkles-web-renderer,
  tp-yt-iron-overlay-backdrop,
  #masthead-ad,
  #offer-module,
  ytd-item-section-renderer:has(ytd-ad-slot-renderer),
  tp-yt-paper-dialog:has(yt-mealbar-promo-renderer) {
    display: none !important;
  }
`;

const cssResponsiveRows = `
  ytd-rich-item-renderer[rendered-from-rich-grid] {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  @media (min-width: 530px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(50% - ((var(--ytd-rich-grid-item-margin) / 2)) / 1 * 4) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 900px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(33.333333% - ((var(--ytd-rich-grid-item-margin) / 2)) / 2 * 6) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 1300px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(25% - ((var(--ytd-rich-grid-item-margin) / 2)) / 3 * 8) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 1650px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(20% - ((var(--ytd-rich-grid-item-margin) / 2)) / 4 * 10) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 2168px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(16.666667% - ((var(--ytd-rich-grid-item-margin) / 2)) / 5 * 12) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 2416px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(14.285714% - ((var(--ytd-rich-grid-item-margin) / 2)) / 6 * 14) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 2664px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(12.5% - ((var(--ytd-rich-grid-item-margin) / 2)) / 7 * 16) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 2912px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(11.111111% - ((var(--ytd-rich-grid-item-margin) / 2)) / 8 * 18) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
  
  @media (min-width: 3160px) {
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: calc(10% - ((var(--ytd-rich-grid-item-margin) / 2)) / 9 * 20) !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  }
`;

const cssRemoveMembers = `
  /* Join button on video */
  #below ytd-watch-metadata #top-row #owner ytd-video-owner-renderer #sponsor-button,

  /* "0€ el primer mes" on channel */
  ytd-browse #header #page-header yt-attribution-view-model:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']),
  
  /* "Unirme" on channel */
  ytd-browse #header #page-header yt-flexible-actions-view-model [class*='ytFlexibleActionsViewModelAction']:has(path[d^='M12 23c6.075 0 11-4.925 11-11S18.075']),
  
  /* "Nuestros miembros" on channel */
  ytd-two-column-browse-results-renderer #primary #contents ytd-item-section-renderer:has(#contents #action-button),

  /* "Vídeos exclusivos para miembros" on channel */
  ytd-browse #primary #contents ytd-item-section-renderer:has(path[d^='M6 .5a5.5 5.5 0 100']),
  ytd-browse #primary #contents ytd-item-section-renderer:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']),
  
  /* Etiqueta "Miembros primero" on video description */
  #primary ytd-watch-metadata #description ytd-watch-info-text yt-formatted-string a[href='#'],
  #primary ytd-watch-metadata #description ytd-watch-info-text yt-formatted-string a[href='#']+span,
  
  /* Videos on feed */
  ytd-rich-item-renderer:has(path[d^='M6 .5a5.5 5.5 0 100']),
  ytd-rich-item-renderer:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']),
  
  /* Videos on video */
  yt-lockup-view-model:has(path[d^='M6 .5a5.5 5.5 0 100']),
  yt-lockup-view-model:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']) {
    display: none !important;
  }
`;

const cssRemoveShorts = `
  /* Shorts tab on expanded sidebar */
  #contentContainer #sections ytd-guide-section-renderer:nth-of-type(1) #items ytd-guide-entry-renderer:nth-of-type(2),
  
  /* Shorts section on feed */
  ytd-rich-section-renderer:has(a[href*="/shorts"]),
  
  /* Shorts section on search */
  grid-shelf-view-model:has(a[href*="/shorts"]),
  ytd-video-renderer:has(a[href*="/shorts"]),
  
  /* Shorts section on video */
  ytd-reel-shelf-renderer:has(a[href*="/shorts"]),
  
  /* Shorts tab on collapsed sidebar */
  ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:has(a[href*="/shorts"]) {
    display: none !important;
  }
`;

const cssRemoveNews = `
  /* News section on feed */
  ytd-rich-section-renderer:not(:has(a[href*="/shorts"])):not(:has(ytd-rating-survey-renderer)) {
    display: none !important;
  }
`;

const cssRemoveRecommended = `
  /* Destacado de YouTube en vídeo */
  ytd-rich-item-renderer:has(.ytBadgeShapeHost.ytBadgeShapePromoted.ytBadgeShapeTypography),
  
  /* ¿Te gusta esta recomendación? */
  lockup-attachments-view-model:has(yt-slimline-survey-view-model path[d^='M24.88,26.5c-0.19,0-0.38-0.11-0.46-0.3C23.3']),
  
  /* ¿Estás buscando otra cosa? */
  ytd-rich-item-renderer:has(ytd-feed-nudge-renderer),
  
  /* Other people also search on search */
  ytd-horizontal-card-list-renderer,
  
  /* Más relevante */
  ytd-rich-section-renderer:has(ytd-rich-shelf-renderer ytd-rich-item-renderer):not(:has(a[href*="/shorts"])),
  
  /* Descubre más temas */
  ytd-rich-section-renderer:has(ytd-chips-shelf-with-video-shelf-renderer ytd-rich-shelf-renderer #contents ytd-rich-item-renderer),
  
  /* Reproduce contenido en segundo plano con YouTube Premium */
  ytd-rich-section-renderer:has(ytd-brand-video-shelf-renderer #visible-content-wrapper #visible-video-container ytd-rich-grid-media),
  
  /* ¿Qué te ha parecido este vídeo? */
  ytd-rich-section-renderer:has(ytd-rating-survey-renderer):not(:has(a[href*="/shorts"])),
  
  /* ¿No está recibiendo las recomendaciones adecuadas? */
  ytd-feed-nudge-renderer.ytd-item-section-renderer:has(div#dismissible.ytd-feed-nudge-renderer) {
    display: none !important;
  }
`;

const cssRemoveSuperThanks = `
  /* Super Thanks button on video */
  #below ytd-watch-metadata #top-row #actions #flexible-item-buttons yt-button-view-model:has(path[d^='M16.25 2A6.7 6.7 0 0012']) {
    display: none !important;
  }
`;

const cssHideOriginalPlayer = `
  /* Hide the main YouTube player when custom player is enabled */
  body.bestTube-custom-player #player:not(.ytd-shorts):not(.ytd-channel-video-player-renderer),
  body.bestTube-custom-player #player-full-bleed-container {
    visibility: hidden !important;
  }
`;

// ============================================================
//  STYLES MANAGER
// ============================================================
const bestTubeStyleManager = {
  styles: {},

  set(id, css) {
    if (!css) {
      if (this.styles[id]) this.styles[id].remove();
      delete this.styles[id];
      return;
    }

    if (!this.styles[id]) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = css;
      document.head.appendChild(tag);
      this.styles[id] = tag;
    } else {
      this.styles[id].textContent = css;
    }
  }
};

// ============================================================
//  INIT
// ============================================================
insertStyles();

waitForBody(() => {
  insertPopup();

  waitForButtonsBar((buttonsBar) => {
    startObserver(buttonsBar);
    ensureButton(buttonsBar);
  });
});

// ============================================================
//  CHECKBOXES
// ============================================================
function initCheckboxToggle(id, styleId, css) {
  const cb = document.getElementById(id);
  if (!cb) return;

  let isChecked = false;
  const saved = localStorage.getItem("bestTube-" + id);
  if (saved !== null) {
    isChecked = saved === "true";
  }

  const apply = () => {
    localStorage.setItem("bestTube-" + id, isChecked);
    bestTubeStyleManager.set(styleId, isChecked ? css : null);
    
    // Toggle state visually via attribute for the custom element
    if (isChecked) {
      cb.setAttribute("checked", "");
    } else {
      cb.removeAttribute("checked");
    }
  };

  cb.addEventListener("click", () => {
    isChecked = !isChecked;
    apply();
  });
  
  apply();
}

// ============================================================
//  WAIT FOR CONTAINER
// ============================================================
function waitForBody(callback) {
  if (document.body) return callback();
  requestAnimationFrame(() => waitForBody(callback));
}

function waitForButtonsBar(callback) {
  const buttonsBar = document.querySelector('ytd-masthead #container #end #buttons');
  if (buttonsBar) return callback(buttonsBar);
  requestAnimationFrame(() => waitForButtonsBar(callback));
}

// ============================================================
//  OBSERVER
// ============================================================
function startObserver(buttonsBar) {
  const observer = new MutationObserver(() => {
    ensureButton(buttonsBar);
  });

  observer.observe(buttonsBar, {
    childList: true,
    subtree: false
  });
}

function ensureButton(buttonsBar) {
  const btnExists = document.querySelector('#bestTube-btn');

  // Cuando YouTube reconstruye la barra, el botón desaparece => cerramos popup
  if (!btnExists) {
    const popup = document.querySelector("#bestTube-popup");
    const icon = document.querySelector("#bestTube-btn-icon");

    if (popup) popup.style.display = "none";
    if (icon) icon.style.transform = "rotate(0deg)";

    // El nuevo botón siempre debe aparecer “cerrado”
    // igual que pasaba antes
    insertButton(buttonsBar);
  }
}

// ============================================================
//  BUTTON HANDLER
// ============================================================
function togglePopup(forceState = null) {
  const btn = document.querySelector("#bestTube-btn");
  const icon = document.querySelector("#bestTube-btn-icon");
  const popup = document.querySelector("#bestTube-popup");

  if (!btn || !icon || !popup) return;

  const active = btn.dataset.active === "true";
  const newState = forceState !== null ? forceState : !active;

  btn.dataset.active = newState;

  icon.style.transform = newState ? "rotate(180deg)" : "rotate(0deg)";
  btn.style.backgroundColor = newState ? "rgba(255, 255, 255, 0.2)" : "";
  popup.style.display = newState ? "block" : "none";
}

// ============================================================
//  BASE STYLES
// ============================================================
function insertStyles() {
  const styles = document.createElement('style');
  styles.id = "bestTube-styles";
  styles.textContent = `
    #bestTube-btn,
    #bestTube-popup {
      user-select: none;
    }

    #bestTube-btn {
      transition: background-color .3s;
      margin-left: 8px;
      margin-right: 8px;
    }

    #bestTube-btn-icon {
      transition: transform .3s;
    }

    #bestTube-popup {
      position: fixed;
      display: none;
      z-index: 99999;
      top: 56px;
      right: 224px;
      outline: none;
      box-sizing: border-box;
      width: 341px;
      max-width: 480px;
      border-radius: 12px;
      overflow-x: hidden;
      overflow-y: auto;
      color: #f1f1f1;
      background-color: #282828;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    }

    #bestTube-popup-title {
      border-bottom: 1px solid rgba(255,255,255,0.2);
      min-height: 48px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    #bestTube-popup-title h2 {
      margin-left: 16px;
      font-size: 1.6rem;
      font-weight: 400;
      flex: 1;
    }

    #bestTube-popup-title button {
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-right: 8px;
      color: #f1f1f1;
      border-radius: 50%;
      transition: background-color .3s;
    }

    #bestTube-popup-title button:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    #bestTube-popup-options {
      margin: var(--ytd-margin-4x);
      color: #f1f1f1;
      width: auto;
    }
      
    #bestTube-popup-options .option {
      font-weight: 400;
      font-size: 1.5em;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    #bestTube-popup-options .option:last-child {
      margin-bottom: 0;
    }

    #bestTube-popup-options .option label {
      pointer-events: none;
    }

    #bestTube-popup-options .option input[type="range"] {
      cursor: grab;
      margin: 0 10px;
    }

    /* ============================================================ */
    /* TOGGLE SWITCH STYLES (ANIMATIONS & COLORS)                   */
    /* ============================================================ */
    #bestTube-popup-options .toggle-container {
      position: relative;
      width: 36px;
      height: 14px;
      cursor: pointer;
      margin-left: 16px;
    }

    #bestTube-popup-options .toggle-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 7px;
      background: #717171;
      transition: background 0.3s ease;
    }

    #bestTube-popup-options .toggle-button {
      position: absolute;
      top: -3px;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffffff; /* Color de la bola */
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease;
    }

    /* Estado Activo (Checked) */
    #bestTube-popup-options .toggle-container[checked] .toggle-bar {
      background: linear-gradient(90deg,#f03 80%,#ff2791); /* Fondo animado a rojo */
    }

    #bestTube-popup-options .toggle-container[checked] .toggle-button {
      transform: translateX(16px); /* Mueve la bola a la derecha */
    }

    @media (max-width: 765px) {
      #bestTube-btn {
        width: 36px;
        padding: 0;
      }
      
      #bestTube-btn-text {
        display: none;
      }

      #bestTube-btn-icon {
        margin: 0;
      }
    }

    @media (max-width: 656px) {
      #bestTube-btn {
        background: transparent;
      }

      #bestTube-btn:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  `;
  document.head.appendChild(styles);
}

// ============================================================
//  BUTTON
// ============================================================
function insertButton(buttonsBar) {
  const btn = document.createElement("button");
  btn.id = "bestTube-btn";
  btn.title = "BestTube Extension";
  btn.className =
    "ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextOverlay ytSpecButtonShapeNextSizeM ytSpecButtonShapeNextIconLeading ytSpecButtonShapeNextEnableBackdropFilterExperiment";

  const iconBtn = document.createElement("span");
  iconBtn.id = "bestTube-btn-icon";
  iconBtn.className = "ytSpecButtonShapeNextIcon";
  iconBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)">
      <path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z"></path>
    </svg>
  `;

  const textBtn = document.createElement("div");
  textBtn.id = "bestTube-btn-text";
  textBtn.className = "yt-spec-button-shape-next__button-text-content";
  textBtn.innerHTML = `<span>BestTube</span>`;

  btn.appendChild(iconBtn);
  btn.appendChild(textBtn);

  btn.dataset.active = "false";
  btn.addEventListener("click", () => togglePopup());

  buttonsBar.prepend(btn);
}

// ============================================================
//  POPUP
// ============================================================
function insertPopup() {
  if (!document.querySelector('#bestTube-popup')) {

    // Función auxiliar para generar el HTML de cada toggle personalizado (sin etiquetas de YouTube)
    const createToggleHtml = (id, label) => `
      <div class="option">
        <label>${label}</label>
        <div id="${id}" class="toggle-container">
          <div class="toggle-bar"></div>
          <div class="toggle-button"></div>
        </div>
      </div>
    `;

    const popup = document.createElement("div");
    popup.id = "bestTube-popup";
    popup.innerHTML = `
      <div id="bestTube-popup-title">
        <h2>BestTube</h2>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.293 5.293 12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414Z"></path>
          </svg>
        </button>
      </div>

      <div id="bestTube-popup-options">
        ${createToggleHtml('remove-player-ads', 'Remove Player Ads')}
        ${createToggleHtml('remove-ads', 'Remove Ads')}
        ${createToggleHtml('responsive-rows', 'Responsive Rows')}
        ${createToggleHtml('remove-members', 'Remove Members')}
        ${createToggleHtml('remove-shorts', 'Remove Shorts')}
        ${createToggleHtml('remove-news', 'Remove News')}
        ${createToggleHtml('remove-recommended', 'Remove Recommended')}
        ${createToggleHtml('remove-super-thanks', 'Remove Super Thanks')}
      </div>`;

    document.body.appendChild(popup);

    const closeBtn = popup.querySelector("#bestTube-popup-title button");
    closeBtn.addEventListener("click", () => togglePopup(false));

    document.addEventListener("click", (e) => {
      const popup = document.querySelector("#bestTube-popup");
      const btn = document.querySelector("#bestTube-btn");

      if (!popup || !btn) return;

      const abierto = btn.dataset.active === "true";

      // Si está cerrado, no hacemos nada
      if (!abierto) return;

      // Si haces clic dentro del popup o en el botón, no cerrar
      if (popup.contains(e.target) || btn.contains(e.target)) return;

      // Clic fuera → cerrar
      togglePopup(false);
    });

    // ===========================
    // INIT CHECKBOXES
    // ===========================
    initCheckboxToggle("remove-player-ads", "bestTube-remove-player-ads", cssHideOriginalPlayer);
    initCheckboxToggle("remove-ads", "bestTube-remove-ads", cssRemoveAds);
    initCheckboxToggle("responsive-rows", "bestTube-responsive-rows", cssResponsiveRows);
    initCheckboxToggle("remove-members", "bestTube-remove-members", cssRemoveMembers);
    initCheckboxToggle("remove-shorts", "bestTube-remove-shorts", cssRemoveShorts);
    initCheckboxToggle("remove-news", "bestTube-remove-news", cssRemoveNews);
    initCheckboxToggle("remove-recommended", "bestTube-remove-recommended", cssRemoveRecommended);
    initCheckboxToggle("remove-super-thanks", "bestTube-remove-super-thanks", cssRemoveSuperThanks);

    // Initialize custom player functionality
    initCustomPlayer();
  }
}

// ============================================================
//  CUSTOM PLAYER FUNCTIONALITY
// ============================================================

function initCustomPlayer() {
  // Check if player should be enabled
  const saved = localStorage.getItem("bestTube-remove-player-ads");
  const isEnabled = saved === "true";
  
  if (isEnabled) {
    setupCustomPlayer();
  }

  // Listen for changes to the toggle
  const toggleContainer = document.getElementById("remove-player-ads");
  if (toggleContainer) {
    toggleContainer.addEventListener("click", function() {
      setTimeout(() => {
        const saved = localStorage.getItem("bestTube-remove-player-ads");
        const isEnabled = saved === "true";
        
        if (isEnabled) {
          setupCustomPlayer();
        } else {
          removeCustomPlayer();
        }
      }, 50);
    });
  }

  // Watch for URL changes (YouTube is a SPA)
  let lastUrl = window.location.href;
  const urlObserver = new MutationObserver(() => {
    const currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      
      const saved = localStorage.getItem("bestTube-remove-player-ads");
      const isEnabled = saved === "true";
      
      if (isEnabled) {
        setTimeout(() => {
          removeCustomPlayer();
          setupCustomPlayer();
        }, 500);
      } else {
        removeCustomPlayer();
      }
    }
  });
  
  if (document.body) {
    urlObserver.observe(document.body, { childList: true, subtree: true });
  }
}

function setupCustomPlayer() {
  // Only on video pages
  if (!window.location.href.includes("/watch")) return;
  
  // Wait for YouTube player to load
  const checkForPlayer = setInterval(() => {
    const moviePlayer = document.querySelector("#movie_player");
    if (moviePlayer) {
      clearInterval(checkForPlayer);
      createCustomPlayer();
    }
  }, 100);

  // Clear after 5 seconds to avoid infinite loop
  setTimeout(() => clearInterval(checkForPlayer), 5000);
}

function createCustomPlayer() {
  // Check if player already exists
  if (document.getElementById("bestTube-custom-player")) return;
  
  // Get video information
  const videoId = getVideoIdFromUrl();
  if (!videoId) return;

  // Create the player container
  const playerContainer = document.createElement("div");
  playerContainer.id = "bestTube-custom-player";
  playerContainer.style.cssText = `
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: #000 !important;
    z-index: 10000 !important;
  `;
  
  // Create the video element
  const videoElement = document.createElement("video");
  videoElement.id = "bestTube-video-element";
  videoElement.style.cssText = `
    width: 100% !important;
    height: 100% !important;
    background: #000 !important;
  `;
  videoElement.autoplay = true;
  videoElement.playsInline = true;
  
  // Get time from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const startTime = urlParams.get("t") || "0";
  
  // Construct YouTube embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&origin=${window.location.origin}&widgetid=1&rel=0&showinfo=0&controls=0&modestbranding=1`;
  
  // Create iframe for YouTube embed (the actual video)
  const youtubeIframe = document.createElement("iframe");
  youtubeIframe.id = "bestTube-youtube-iframe";
  youtubeIframe.src = embedUrl;
  youtubeIframe.style.cssText = `
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    background: #000 !important;
    z-index: 1 !important;
  `;
  youtubeIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  youtubeIframe.allowFullscreen = true;
  
  // Add overlay controls
  const controlsOverlay = createPlayerControls();
  
  playerContainer.appendChild(youtubeIframe);
  playerContainer.appendChild(controlsOverlay);
  
  // Find the YouTube player container and insert our player
  const moviePlayer = document.querySelector("#movie_player");
  if (moviePlayer) {
    moviePlayer.style.position = "relative";
    moviePlayer.appendChild(playerContainer);
    
    // Set initial time if specified
    if (startTime !== "0") {
      setTimeout(() => {
        setYoutubePlayerTime(startTime);
      }, 2000);
    }
  }
  
  // Inject player styles
  injectPlayerStyles();
  
  // Start listening to YouTube player events
  setupPlayerEventListeners();
}

function createPlayerControls() {
  const controls = document.createElement("div");
  controls.id = "bestTube-player-controls";
  controls.style.cssText = `
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 2 !important;
    pointer-events: none !important;
  `;
  
  // Add play/pause overlay
  const playPauseOverlay = document.createElement("div");
  playPauseOverlay.style.cssText = `
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    pointer-events: none !important;
    opacity: 0 !important;
    transition: opacity 0.3s !important;
  `;
  playPauseOverlay.id = "bestTube-play-pause-overlay";
  
  // Add play/pause button
  const playPauseBtn = document.createElement("div");
  playPauseBtn.style.cssText = `
    width: 80px !important;
    height: 80px !important;
    background: rgba(0, 0, 0, 0.6) !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    pointer-events: auto !important;
    cursor: pointer !important;
  `;
  playPauseBtn.innerHTML = `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff">
      <path d="M8 5v14l11-7z"/>
    </svg>
  `;
  
  playPauseBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    togglePlayPause();
  });
  
  playPauseOverlay.appendChild(playPauseBtn);
  controls.appendChild(playPauseOverlay);
  
  // Add click handler to show/hide controls
  controls.addEventListener("click", function(e) {
    if (e.target === controls) {
      toggleControls();
    }
  });
  
  // Double click to fullscreen
  controls.addEventListener("dblclick", function(e) {
    e.preventDefault();
    toggleFullscreen();
  });
  
  return controls;
}

function togglePlayPause() {
  const iframe = document.getElementById("bestTube-youtube-iframe");
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } catch (e) {
      console.log("Error toggling play/pause:", e);
    }
  }
}

function toggleControls() {
  const overlay = document.getElementById("bestTube-play-pause-overlay");
  if (overlay) {
    const currentOpacity = parseFloat(overlay.style.opacity || "0");
    overlay.style.opacity = currentOpacity === 0 ? "1" : "0";
  }
}

function toggleFullscreen() {
  const playerContainer = document.getElementById("bestTube-custom-player");
  if (playerContainer) {
    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }
}

function setYoutubePlayerTime(timeInSeconds) {
  const iframe = document.getElementById("bestTube-youtube-iframe");
  if (iframe && iframe.contentWindow) {
    try {
      const time = parseInt(timeInSeconds);
      iframe.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${time},true]}`, '*');
    } catch (e) {
      console.log("Error setting time:", e);
    }
  }
}

function setupPlayerEventListeners() {
  // Listen for YouTube player events
  window.addEventListener('message', function(event) {
    if (typeof event.data !== 'string') return;
    
    try {
      const data = JSON.parse(event.data);
      if (data.event === 'infoDelivery' && data.info) {
        // Handle player state updates
        if (data.info.playerState !== undefined) {
          // Player state changed (playing, paused, etc.)
        }
        if (data.info.currentTime !== undefined) {
          // Time update
        }
        if (data.info.duration !== undefined) {
          // Duration update
        }
      }
    } catch (e) {
      // Not a JSON message, ignore
    }
  });
  
  // Handle keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    const player = document.getElementById("bestTube-custom-player");
    if (!player) return;
    
    switch(e.key.toLowerCase()) {
      case 'k':
      case ' ':
        e.preventDefault();
        togglePlayPause();
        break;
      case 'f':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'm':
        e.preventDefault();
        toggleMute();
        break;
      case 'arrowleft':
        e.preventDefault();
        seekRelative(-5);
        break;
      case 'arrowright':
        e.preventDefault();
        seekRelative(5);
        break;
      case 'arrowup':
        e.preventDefault();
        changeVolume(10);
        break;
      case 'arrowdown':
        e.preventDefault();
        changeVolume(-10);
        break;
    }
  });
}

function toggleMute() {
  const iframe = document.getElementById("bestTube-youtube-iframe");
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
    } catch (e) {
      console.log("Error toggling mute:", e);
    }
  }
}

function seekRelative(seconds) {
  const iframe = document.getElementById("bestTube-youtube-iframe");
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage(`{"event":"command","func":"seekBy","args":[${seconds}]}`, '*');
    } catch (e) {
      console.log("Error seeking:", e);
    }
  }
}

function changeVolume(delta) {
  const iframe = document.getElementById("bestTube-youtube-iframe");
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage(`{"event":"command","func":"setVolume","args":[Math.min(100, Math.max(0, (iframe.contentWindow.YT || {}).getVolume() + delta))]}`, '*');
    } catch (e) {
      console.log("Error changing volume:", e);
    }
  }
}

function removeCustomPlayer() {
  const player = document.getElementById("bestTube-custom-player");
  if (player) {
    player.remove();
  }
}

function getVideoIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("v");
}

function injectPlayerStyles() {
  const styleId = "bestTube-player-styles";
  if (document.getElementById(styleId)) return;
  
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    /* Hide YouTube player controls when custom player is active */
    body.bestTube-custom-player-active .ytp-chrome-top,
    body.bestTube-custom-player-active .ytp-chrome-bottom,
    body.bestTube-custom-player-active .ytp-ce-element,
    body.bestTube-custom-player-active .ytp-gradient-top,
    body.bestTube-custom-player-active .ytp-gradient-bottom,
    body.bestTube-custom-player-active .ytp-progress-bar-container,
    body.bestTube-custom-player-active .ytp-chrome-controls {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
    
    /* Make sure our player stays on top */
    #bestTube-custom-player {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      background: #000 !important;
      z-index: 10000 !important;
    }
    
    /* Hide YouTube video but keep the container */
    #bestTube-custom-player + * video {
      opacity: 0 !important;
      visibility: hidden !important;
    }
    
    /* Style for the play/pause overlay */
    #bestTube-play-pause-overlay:hover {
      opacity: 1 !important;
    }
  `;
  
  document.head.appendChild(style);
}

console.log(`BestTube v${version}`);
