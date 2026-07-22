const version = '0.3.2';
const PLAYER_FILE = 'https://raw.githubusercontent.com/const-tester/youtube-test/refs/heads/main/player.js';

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
  #below ytd-watch-metadata #top-row #owner ytd-video-owner-renderer #sponsor-button,
  #page-header-container #page-header .yt-page-header-view-model__page-header-headline-info yt-flexible-actions-view-model .ytFlexibleActionsViewModelAction:not(:has(yt-subscribe-button-view-model)):not(:has(a[href*="community"])),
  ytd-two-column-browse-results-renderer #primary #contents ytd-item-section-renderer:has(#contents #action-button),
  #primary ytd-watch-metadata #description ytd-watch-info-text yt-formatted-string:has(a),
  ytd-rich-item-renderer:has(path[d^='M6 .5a5.5 5.5 0 100']),
  yt-lockup-view-model:has(path[d^='M6 .5a5.5 5.5 0 100']) {
    display: none !important;
  }
`;

const cssRemoveShorts = `
  #contentContainer #sections ytd-guide-section-renderer:nth-of-type(1) #items ytd-guide-entry-renderer:nth-of-type(2),
  ytd-rich-section-renderer:has(a[href*="/shorts"]),
  grid-shelf-view-model:has(a[href*="/shorts"]),
  ytd-video-renderer:has(a[href*="/shorts"]),
  ytd-reel-shelf-renderer:has(a[href*="/shorts"]),
  ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:has(a[href*="/shorts"]) {
    display: none !important;
  }
`;

const cssRemoveNews = `
  ytd-rich-section-renderer:not(:has(a[href*="/shorts"])):not(:has(ytd-rating-survey-renderer)) {
    display: none !important;
  }
`;

const cssRemoveRecommended = `
  lockup-attachments-view-model:has(yt-slimline-survey-view-model path[d^='M24.88,26.5c-0.19,0-0.38-0.11-0.46-0.3C23.3']),
  ytd-rich-item-renderer:has(ytd-feed-nudge-renderer),
  ytd-horizontal-card-list-renderer,
  ytd-rich-section-renderer:has(ytd-rich-shelf-renderer ytd-rich-item-renderer):not(:has(a[href*="/shorts"])),
  ytd-rich-section-renderer:has(ytd-chips-shelf-with-video-shelf-renderer ytd-rich-shelf-renderer #contents ytd-rich-item-renderer),
  ytd-rich-section-renderer:has(ytd-brand-video-shelf-renderer #visible-content-wrapper #visible-video-container ytd-rich-grid-media),
  ytd-rich-section-renderer:has(ytd-rating-survey-renderer):not(:has(a[href*="/shorts"])),
  ytd-feed-nudge-renderer.ytd-item-section-renderer:has(div#dismissible.ytd-feed-nudge-renderer) {
    display: none !important;
  }
`;

const cssRemoveSuperThanks = `
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
//  LOAD PLAYER.JS
// ============================================================
function loadPlayerScript() {
  if (window.bestTubePlayerLoaded) return;
  window.bestTubePlayerLoaded = true;

  fetch(PLAYER_FILE, { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error('[BestTube] Error cargando player.js remoto');
      return r.text();
    })
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.documentElement.appendChild(script);
      console.log('%c✔ BestTube: player.js cargado correctamente', 'background: #0a0; color: #fff; padding: 4px; border-radius: 8px;');
    })
    .catch(err => {
      console.error('[BestTube] No se pudo cargar player.js', err);
    });
}

// ============================================================
//  INIT
// ============================================================
insertStyles();
loadPlayerScript();

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

function initPlayerAdsToggle() {
  const id = "remove-player-ads";
  const cb = document.getElementById(id);
  if (!cb) return;
  
  let isChecked = false;
  const saved = localStorage.getItem("bestTube-" + id);
  if (saved !== null) {
    isChecked = saved === "true";
  }

  const apply = () => {
    localStorage.setItem("bestTube-" + id, isChecked);
    if (isChecked) {
      cb.setAttribute("checked", "");
      document.dispatchEvent(new CustomEvent('BestTube-EnableProxy'));
    } else {
      cb.removeAttribute("checked");
      document.dispatchEvent(new CustomEvent('BestTube-DisableProxy'));
    }
  };

  cb.addEventListener("click", () => {
    isChecked = !isChecked;
    apply();
  });
  
  setTimeout(apply, 800);
}

// ============================================================
//  WAIT FOR CONTAINER & OBSERVER & UI
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

function startObserver(buttonsBar) {
  const observer = new MutationObserver(() => {
    ensureButton(buttonsBar);
  });
  observer.observe(buttonsBar, { childList: true, subtree: false });
}

function ensureButton(buttonsBar) {
  const btnExists = document.querySelector('#bestTube-btn');
  if (!btnExists) {
    const popup = document.querySelector("#bestTube-popup");
    const icon = document.querySelector("#bestTube-btn-icon");
    if (popup) popup.style.display = "none";
    if (icon) icon.style.transform = "rotate(0deg)";
    insertButton(buttonsBar);
  }
}

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

function insertStyles() {
  const styles = document.createElement('style');
  styles.id = "bestTube-styles";
  styles.textContent = `
    #bestTube-btn, #bestTube-popup { user-select: none; }
    #bestTube-btn { transition: background-color .3s; margin-left: 8px; margin-right: 8px; }
    #bestTube-btn-icon { transition: transform .3s; }
    #bestTube-popup { position: fixed; display: none; z-index: 99999; top: 56px; right: 230px; outline: none; box-sizing: border-box; width: 341px; max-width: 480px; border-radius: 12px; overflow-x: hidden; overflow-y: auto; color: #f1f1f1; background-color: #282828; box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75); }
    #bestTube-popup-title { border-bottom: 1px solid rgba(255,255,255,0.2); min-height: 48px; display: flex; flex-direction: row; align-items: center; }
    #bestTube-popup-title h2 { margin-left: 16px; font-size: 1.6rem; font-weight: 400; flex: 1; }
    #bestTube-popup-title button { width: 40px; height: 40px; background-color: transparent; border: none; cursor: pointer; margin-right: 8px; color: #f1f1f1; border-radius: 50%; transition: background-color .3s; }
    #bestTube-popup-title button:hover { background: rgba(255, 255, 255, 0.2); }
    #bestTube-popup-options { margin: var(--ytd-margin-4x); color: #f1f1f1; width: auto; }
    #bestTube-popup-options .option { font-weight: 400; font-size: 1.5em; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; }
    #bestTube-popup-options .option:last-child { margin-bottom: 0; }
    #bestTube-popup-options .option label { pointer-events: none; }
    #bestTube-popup-options .toggle-container { position: relative; width: 36px; height: 14px; cursor: pointer; margin-left: 16px; }
    #bestTube-popup-options .toggle-bar { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 7px; background: #717171; transition: background 0.3s ease; }
    #bestTube-popup-options .toggle-button { position: absolute; top: -3px; left: 0; width: 20px; height: 20px; border-radius: 50%; background-color: #ffffff; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); transition: transform 0.3s ease; }
    #bestTube-popup-options .toggle-container[checked] .toggle-bar { background: linear-gradient(90deg,#f03 80%,#ff2791); }
    #bestTube-popup-options .toggle-container[checked] .toggle-button { transform: translateX(16px); }
  `;
  document.head.appendChild(styles);
}

function insertButton(buttonsBar) {
  const btn = document.createElement("button");
  btn.id = "bestTube-btn";
  btn.title = "BestTube Extension";
  btn.className = "ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextOverlay ytSpecButtonShapeNextSizeM ytSpecButtonShapeNextIconLeading ytSpecButtonShapeNextEnableBackdropFilterExperiment";
  const iconBtn = document.createElement("span");
  iconBtn.id = "bestTube-btn-icon";
  iconBtn.className = "ytSpecButtonShapeNextIcon";
  iconBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)"><path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z"></path></svg>`;
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

function insertPopup() {
  if (!document.querySelector('#bestTube-popup')) {
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
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.293 5.293 12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414Z"></path></svg></button>
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

    popup.querySelector("#bestTube-popup-title button").addEventListener("click", () => togglePopup(false));
    document.addEventListener("click", (e) => {
      const popup = document.querySelector("#bestTube-popup");
      const btn = document.querySelector("#bestTube-btn");
      if (!popup || !btn) return;
      if (btn.dataset.active !== "true") return;
      if (popup.contains(e.target) || btn.contains(e.target)) return;
      togglePopup(false);
    });

    initPlayerAdsToggle();
    initCheckboxToggle("remove-ads", "bestTube-remove-ads", cssRemoveAds);
    initCheckboxToggle("responsive-rows", "bestTube-responsive-rows", cssResponsiveRows);
    initCheckboxToggle("remove-members", "bestTube-remove-members", cssRemoveMembers);
    initCheckboxToggle("remove-shorts", "bestTube-remove-shorts", cssRemoveShorts);
    initCheckboxToggle("remove-news", "bestTube-remove-news", cssRemoveNews);
    initCheckboxToggle("remove-recommended", "bestTube-remove-recommended", cssRemoveRecommended);
    initCheckboxToggle("remove-super-thanks", "bestTube-remove-super-thanks", cssRemoveSuperThanks);
  }
}
console.log(`BestTube v${version}`);
