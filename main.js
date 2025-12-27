const version = '0.1.0';

// ============================================================
//  OPTIONS CSS
// ============================================================
const cssRemoveAds = `
/*  .ytd-search ytd-shelf-renderer,
  ytd-reel-shelf-renderer,
  ytd-merch-shelf-renderer,
  ytd-action-companion-ad-renderer,
  ytd-display-ad-renderer,
  ytd-video-masthead-ad-advertiser-info-renderer,
  ytd-video-masthead-ad-primary-video-renderer,
  ytd-in-feed-ad-layout-renderer,
  ytd-ad-slot-renderer,
  ytd-statement-banner-renderer,
  ytd-banner-promo-renderer-background ytd-ad-slot-renderer,
  ytd-in-feed-ad-layout-renderer,
  ytd-engagement-panel-section-list-renderer:not(.ytd-popup-container):not([target-id='engagement-panel-clip-create']):not(.ytd-shorts),
  ytd-compact-video-renderer:has(.goodTube_hidden),
  ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer) .ytd-video-masthead-ad-v3-renderer,
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
  ytm-banner-promo-renderer-background ytm-ad-slot-renderer,
  ytm-in-feed-ad-layout-renderer,
  ytm-compact-video-renderer:has(.goodTube_hidden),
  ytm-rich-item-renderer:has(> #content > ytm-ad-slot-renderer) .ytm-video-masthead-ad-v3-renderer,
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
  #offer-module {
    display: none !important;
  }

  .style-scope[page-subtype='channels'] ytd-shelf-renderer,
  .style-scope[page-subtype='channels'] ytm-shelf-renderer {
    display: block !important;
  } */

  /*-----------*/

  /* Ads banner on video */
  #secondary #player-ads,
  #secondary #panels:has(panel-ad-header-image-lockup-view-model),
  #secondary #items ytd-ad-slot-renderer,

  /* Ads on search */
  ytd-item-section-renderer:has(ytd-ad-slot-renderer),
  
  /* Ads on feed */
  ytd-rich-item-renderer:has(ytd-ad-slot-renderer),
  ytd-rich-grid-renderer #primary #contents ytd-item-section-renderer:has(ytd-ad-slot-renderer),
  #masthead-ad:has(ytd-ad-slot-renderer),
  
  /* Popup on video */
  tp-yt-paper-dialog:has(yt-mealbar-promo-renderer) {
    display: none !important;
  }
`;

const cssRemoveMembers = `
  /* Join button on video */
  #below ytd-watch-metadata #top-row #owner ytd-video-owner-renderer #sponsor-button,
  
  /* Join button on channel */
  #page-header-container #page-header .yt-page-header-view-model__page-header-headline-info yt-flexible-actions-view-model .ytFlexibleActionsViewModelAction:not(:has(yt-subscribe-button-view-model)):not(:has(a[href*="community"])),
  
  /* Our members on channel */
  ytd-two-column-browse-results-renderer #primary #contents ytd-item-section-renderer:has(#contents #action-button),
  
  /* Videos on feed */
  ytd-rich-item-renderer:has(path[d^='M6 .5a5.5 5.5 0 100']),
  
  /* Videos on video */
  yt-lockup-view-model:has(path[d^='M6 .5a5.5 5.5 0 100']) {
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
  ytd-rich-section-renderer:not(:has(a[href*="/shorts"])) {
    display: none !important;
  }
`;

const cssRemoveRecommended = `
  /* Do you like this recommendation? on feed */
  lockup-attachments-view-model:has(yt-slimline-survey-view-model):has(path[d=^'M24.88,26.5c-0.19,0-0.38-0.11-0.46-0.3C23.3']),

  /* Are you searching something else? on feed */
  ytd-rich-item-renderer:has(ytd-feed-nudge-renderer),

  /* Other people also search on search */
  ytd-horizontal-card-list-renderer {
    display: none !important;
  }
`;

const cssRemoveSuperThanks = `
  /* Super Thanks button on video */
  #below ytd-watch-metadata #top-row #actions #flexible-item-buttons yt-button-view-model:has(path[d^='M16.25 2A6.7 6.7 0 0012']) {
    display: none !important;
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

  const saved = localStorage.getItem("bestTube-" + id);
  if (saved !== null) cb.checked = saved === "true";

  const apply = () => {
    const active = cb.checked;
    localStorage.setItem("bestTube-" + id, active);
    bestTubeStyleManager.set(styleId, active ? css : null);
  };

  cb.addEventListener("change", apply);
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
      right: 230px;
      outline: none;
      box-sizing: border-box;
      width: 341px;
      max-width: 480px;
      border-radius: 12px;
      overflow-x: hidden;
      overflow-y: auto;
      color: var(--yt-spec-text-primary);
      background-color: var(--yt-spec-menu-background);
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    }

    #bestTube-popup-title {
      border-bottom: 1px solid var(--yt-spec-outline);
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
      color: var(--yt-spec-text-primary);
      border-radius: 50%;
      transition: background-color .3s;
    }

    #bestTube-popup-title button:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    #bestTube-popup-options {
      margin: var(--ytd-margin-4x);
      color: var(--yt-spec-text-primary); width: max-content;
    }
      
    #bestTube-popup-options .option {
      font-weight: 400;
      font-size: 1.5em;
      margin-bottom: 16px;
      width: max-content;
    }
    
    #bestTube-popup-options .option:last-child {
      margin-bottom: 0;
    }

    #bestTube-popup-options .option label:not([for="videos-per-row"]),
    #bestTube-popup-options .option input[type="checkbox"] {
      cursor: pointer;
    }

    #bestTube-popup-options .option input[type="range"] {
      cursor: grab;
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
    "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--overlay yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--enable-backdrop-filter-experiment";

  const iconBtn = document.createElement("span");
  iconBtn.id = "bestTube-btn-icon";
  iconBtn.className = "yt-spec-button-shape-next__icon";
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
        <div class="option">
          <label for="videos-per-row">Videos per row</label>
          <input type="range" id="videos-per-row" min="0" max="10" value="0"/>
          <span id="videos-per-row-value">0</span>
        </div>

        <div class="option">
          <label>
            <input type="checkbox" id="remove-ads">
            Remove Ads
          </label>
        </div>

        <div class="option">
          <label>
            <input type="checkbox" id="remove-members">
            Remove Members
          </label>
        </div>

        <div class="option">
          <label>
            <input type="checkbox" id="remove-shorts">
            Remove Shorts
          </label>
        </div>

        <div class="option">
          <label>
            <input type="checkbox" id="remove-news">
            Remove News
          </label>
        </div>

        <div class="option">
          <label>
            <input type="checkbox" id="remove-recommended">
            Remove Recommended
          </label>
        </div>

        <div class="option">
          <label>
            <input type="checkbox" id="remove-super-thanks">
            Remove Super Thanks
          </label>
        </div>
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
    initCheckboxToggle("remove-ads", "bestTube-remove-ads", cssRemoveAds);
    initCheckboxToggle("remove-members", "bestTube-remove-members", cssRemoveMembers);
    initCheckboxToggle("remove-shorts", "bestTube-remove-shorts", cssRemoveShorts);
    initCheckboxToggle("remove-news", "bestTube-remove-news", cssRemoveNews);
    initCheckboxToggle("remove-recommended", "bestTube-remove-recommended", cssRemoveRecommended);
    initCheckboxToggle("remove-super-thanks", "bestTube-remove-super-thanks", cssRemoveSuperThanks);

    // ===========================
    // INIT VIDEOS PER ROW
    // ===========================
    initVideosPerRowControl(popup);
  }
}

// ============================================================
//  VIDEOS PER ROW
// ============================================================
function initVideosPerRowControl(popup) {
  const range = popup.querySelector("#videos-per-row");
  const label = popup.querySelector("#videos-per-row-value");

  const saved = localStorage.getItem("bestTube-videos-per-row");
  if (saved !== null) {
    range.value = saved;
  }

  const update = () => {
    const rangeValue = parseInt(range.value, 10);

    label.textContent = rangeValue === 0 ? "default" : rangeValue;

    localStorage.setItem("bestTube-videos-per-row", rangeValue);

    updateVideosPerRowStyles(rangeValue);
  };

  range.addEventListener("input", update);
  update();
}

function updateVideosPerRowStyles(rangeValue) {
  const styleId = "bestTube-videos-per-row";
  let styleTag = document.getElementById(styleId);

  if (rangeValue === 0) {
    if (styleTag) styleTag.remove();
    return;
  }

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleId;
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = generateVideosPerRowCSS(rangeValue);
}

function generateVideosPerRowCSS(rangeValue) {
  if (rangeValue === 1) {
    return `
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    `;
  }

  const percent = 100 / rangeValue;
  const divisor = rangeValue - 1;
  const multiplier = rangeValue * 2;

  const widthCalc = `calc(${percent}% - ((var(--ytd-rich-grid-item-margin) / 2)) / ${divisor} * ${multiplier})`;

  return `
    ytd-rich-item-renderer[rendered-from-rich-grid] {
      width: ${widthCalc} !important;
      margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }
  `;
}

console.log(`BestTube v${version}`);
