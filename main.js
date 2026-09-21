(function () {
  const version = '0.4.2';

  // ============================================================
  //  1. MODO YOUTUBE EMBED
  // ============================================================
  if (window.location.pathname.startsWith('/embed/')) {
    const injectEmbedCSS = () => {
      if (!document.head) {
        requestAnimationFrame(injectEmbedCSS);
        return;
      }

      const style = document.createElement('style');
      style.id = 'bestTube-embed-styles';
      style.textContent = `
        /* Ocultar el título/detalles originales y menús flotantes */
        [id*='player'] embedded-player-video-details,
        [id*='player'] .fullscreen-action-menu {
          display: none !important;
        }

        /* Ocultar las cajas de YouTube para colocar los botones libremente */
        ytm-custom-control .player-controls-top,
        ytm-custom-control .player-controls-middle,
        ytm-custom-control .player-controls-bottom,
        .player-controls-top-right,
        .player-controls-bottom-left,
        .player-controls-bottom-right {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          transform: none !important;
          pointer-events: none !important;
          display: block !important;
        }

        /* BOTONES /*
        /*---------*/

        /* 1. Botón Play/Pause (Anclado a la izquierda) */
        ytm-custom-control .player-controls-middle-core-buttons {
          position: absolute !important;
          left: 0 !important;
          bottom: 0 !important;
          width: 48px !important;
          height: 48px !important;
          margin: 0 !important;
          z-index: 50 !important;
          pointer-events: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .player-control-play-pause-icon {
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
          width: 48px !important;
          height: 48px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .player-control-play-pause-icon c3-icon {
          width: 24px !important;
          height: 24px !important;
          padding: 0 !important;
        }

        .ytwPlayerMiddleControlsA11ySeekButton {
          display: none !important;
        }

        /* 2. Volumen (Anclado a la izquierda, después del Play) */
        volume-controls.ytdVolumeControlsHost {
          position: absolute !important;
          left: 48px !important;
          bottom: 0 !important;
          height: 48px !important;
          width: auto !important;
          margin: 0 !important;
          z-index: 50 !important;
          pointer-events: auto !important;
        }

        .ytdVolumeControlsVolumeControlsContainerVertical {
          flex-direction: row !important;
          height: 48px !important;
          width: auto !important;
          max-width: none !important;
          gap: 0 !important;
          background: transparent !important;
        }

        .ytdVolumeControlsSliderContainerVertical {
          transform: none !important; 
          height: 48px !important;
          min-height: 48px !important;
          width: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          background: transparent !important;
          transition: width 0.3s ease, padding 0.3s, opacity 0.3s !important;
          display: flex !important;
          align-items: center !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }

        volume-controls:hover .ytdVolumeControlsSliderContainerVertical,
        .ytdVolumeControlsSliderContainerVerticalExpanded {
          width: 75px !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .ytdVolumeControlsNativeSlider {
          width: 100% !important;
          height: 4px !important;
        }

        /* 3. Tiempo y Capítulos (Anclado a la izquierda, desplazable) */
        player-time-display.ytwPlayerTimeDisplayHost {
          position: absolute !important;
          left: 96px !important;
          bottom: 0 !important;
          height: 48px !important;
          display: flex !important;
          align-items: center !important;
          transition: left 0.3s ease !important;
          z-index: 50 !important;
          pointer-events: auto !important;
        }

        /* Mover a la derecha al hacer hover en el volumen */
        body:has(volume-controls:hover) player-time-display.ytwPlayerTimeDisplayHost,
        body:has(.ytdVolumeControlsSliderContainerVerticalExpanded) player-time-display.ytwPlayerTimeDisplayHost {
          left: 176px !important;
        }

        .ytwPlayerTimeDisplayPill {
          background: transparent !important;
          text-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        /* 4. Fullscreen (Anclado a la derecha) */
        .ytwPlayerBottomControlsFullscreenButtonWrapper {
          position: absolute !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 48px !important;
          height: 48px !important;
          margin: 0 !important;
          z-index: 60 !important;
          pointer-events: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .ytwPlayerBottomControlsFullscreenButtonWrapper button {
          padding: 0 !important;
          margin: 0 !important;
          width: 48px !important;
          height: 48px !important;
          background: transparent !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .player-bottom-controls-fullscreen-icon-visible-area {
          background: transparent !important;
          padding: 0 !important;
          width: 24px !important;
          height: 24px !important;
          border-radius: 0 !important;
        }

        .player-bottom-controls-fullscreen-icon-visible-area svg {
          width: 24px !important;
          height: 24px !important;
        }

        /* 5. Ajustes (Anclado a la derecha, al lado del Fullscreen) */
        .player-settings-icon {
          position: absolute !important;
          right: 48px !important;
          bottom: 0 !important;
          width: 48px !important;
          height: 48px !important;
          margin: 0 !important;
          padding: 12px !important;
          z-index: 50 !important;
          pointer-events: auto !important;
          box-sizing: border-box !important;
        }

        /* 6. Subtítulos (Anclado a la derecha, al lado de los Ajustes) */
        yt-closed-captions-toggle-button {
          position: absolute !important;
          right: 96px !important;
          bottom: 0 !important;
          width: 48px !important;
          height: 48px !important;
          margin: 0 !important;
          z-index: 50 !important;
          pointer-events: auto !important;
        }

        /* 7. Barra de Progreso (Sobre los controles) */
        body[faux-fullscreen=true] .watch-page-progress-bar,
        .fullscreen-controls-always-on .watch-page-progress-bar,
        .watch-page-progress-bar,
        yt-progress-bar.ytPlayerProgressBarHost {
          position: absolute !important;
          bottom: 48px !important;
          height: 5px !important;
          left: 12px !important;
          right: 12px !important;
          padding: 0 !important;
          z-index: 60 !important;
          pointer-events: auto !important;
        }

        .ytChapteredProgressBarChapteredPlayerBarChapter,
        .ytChapteredProgressBarChapteredPlayerBarLoaded,
        .ytChapteredProgressBarChapteredPlayerBarFill { 
          height: 3px !important; 
        }

        /* 8. Degradado oscuro del fondo */
        #player-control-overlay .player-controls-background {
          position: absolute !important;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.4) 50px, rgba(0,0,0,0) 100px) !important;
          bottom: 0 !important;
          height: 100px !important;
          top: auto !important;
          pointer-events: none !important;
          z-index: 0 !important;
        }

        /* 9. Previsualización al hacer hover (Sobre la barra de progreso, más bajo) */
        .ytPlayerStoryboardHost {
          bottom: 50px !important;
        }

        /* 10. Mejorar popup de opciones */
        #bottom-sheet-wrapper .ytWebScrimHostBottomSheet {
          background-color: transparent !important;
        }

        #bottom-sheet-wrapper .ytSpecBottomSheetLayoutHost {
          margin: unset !important;
          left: unset !important;
          bottom: 69px !important;
          right: 12px !important;
          right: 12px !important;
          background-color:  rgba(0, 0, 0, .6) !important;
        }

        #bottom-sheet-wrapper .ytSpecBottomSheetLayoutHost .ytListItemViewModelMainContainer > :nth-child(1) *,
        #bottom-sheet-wrapper .ytSpecBottomSheetLayoutHost .ytListItemViewModelMainContainer > :nth-child(2) * {
          color: #eee !important;
        }

        #bottom-sheet-wrapper .ytSpecBottomSheetLayoutHost .ytListItemViewModelMainContainer > :nth-child(3),
        #bottom-sheet-wrapper .ytSpecBottomSheetLayoutHost .ytListItemViewModelMainContainer > :nth-child(4) * {
          color: rgba(255,255,255,.7) !important;
        }

        #bottom-sheet-header {
          border-bottom: unset !important;
        }

        #bottom-sheet-header .ytSpecBottomSheetLayoutDragLine {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: unset !important;
        }
        
        /* Scrollbar menu opciones Firefox */
        .ytSpecBottomSheetLayoutContentWrapper {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
        }
        
        /* 2. Scrollbar menu opciones Chromium */
        .ytSpecBottomSheetLayoutContentWrapper::-webkit-scrollbar {
          width: 6px; /* Ancho del scrollbar vertical */
          height: 6px; /* Alto del scrollbar horizontal (por si aplica) */
        }
        
        .ytSpecBottomSheetLayoutContentWrapper::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .ytSpecBottomSheetLayoutContentWrapper::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 10px;
        }
      `;
      document.head.appendChild(style);
    };
    injectEmbedCSS();

    return;
  }

  // ============================================================
  //  2. MODO PROXY WIKIMEDIA
  // ============================================================
  if (window.location.hostname.includes('wikimedia.org')) {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('bestTubeEmbed');
    const startTime = urlParams.get('t') || '0';

    if (videoId) {
      document.documentElement.innerHTML = `<body style="margin:0;padding:0;overflow:hidden;background:#000;width:100vw;height:100vh;"></body>`;
      const ytIframe = document.createElement('iframe');
      ytIframe.id = 'bestTube-youtube-iframe';
      ytIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&start=${startTime}`;
      ytIframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;background:#000;';
      ytIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      ytIframe.allowFullscreen = true;
      document.body.appendChild(ytIframe);

      // Puente para los controles de pausa, volumen, etc.
      window.addEventListener('message', (event) => {
        if (event.source === window.parent && ytIframe.contentWindow) {
          ytIframe.contentWindow.postMessage(event.data, '*');
        }
        if (event.source === ytIframe.contentWindow) {
          window.parent.postMessage(event.data, '*');
        }
      });
    }

    return;
  }

  // ============================================================
  //  3. MODO YOUTUBE PRINCIPAL
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
    /*TODO: CORREGIR LA SIGUIENTE LINEA*/
    /*ytd-item-section-renderer:has(ytd-ad-slot-renderer),*/
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
        width: calc(
          50% - ((var(--ytd-rich-grid-item-margin) / 2)) / 1 * 4
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 900px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          33.333333% - ((var(--ytd-rich-grid-item-margin) / 2)) / 2 * 6
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 1300px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          25% - ((var(--ytd-rich-grid-item-margin) / 2)) / 3 * 8
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 1650px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          20% - ((var(--ytd-rich-grid-item-margin) / 2)) / 4 * 10
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 2168px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          16.666667% - ((var(--ytd-rich-grid-item-margin) / 2)) / 5 * 12
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 2416px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          14.285714% - ((var(--ytd-rich-grid-item-margin) / 2)) / 6 * 14
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 2664px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          12.5% - ((var(--ytd-rich-grid-item-margin) / 2)) / 7 * 16
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 2912px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          11.111111% - ((var(--ytd-rich-grid-item-margin) / 2)) / 8 * 18
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }

    @media (min-width: 3160px) {
      ytd-rich-item-renderer[rendered-from-rich-grid] {
        width: calc(
          10% - ((var(--ytd-rich-grid-item-margin) / 2)) / 9 * 20
        ) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
      }
    }
  `;

  const cssRemoveMembers = `
    #below ytd-watch-metadata #top-row #owner ytd-video-owner-renderer #sponsor-button,
    ytd-browse #header #page-header yt-attribution-view-model:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']),
    ytd-browse #header #page-header yt-flexible-actions-view-model [class*='ytFlexibleActionsViewModelAction']:has(path[d^='M12 23c6.075 0 11-4.925 11-11S18.075']),
    ytd-two-column-browse-results-renderer #primary #contents ytd-item-section-renderer:has(#contents #action-button),
    ytd-browse #primary #contents ytd-item-section-renderer:has(path[d^='M6 .5a5.5 5.5 0 100']),
    ytd-browse #primary #contents ytd-item-section-renderer:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']),
    #primary ytd-watch-metadata #description ytd-watch-info-text yt-formatted-string a[href='#'],
    #primary ytd-watch-metadata #description ytd-watch-info-text yt-formatted-string a[href='#']+span,
    ytd-rich-item-renderer:has(path[d^='M6 .5a5.5 5.5 0 100']),
    ytd-rich-item-renderer:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']),
    yt-lockup-view-model:has(path[d^='M6 .5a5.5 5.5 0 100']),
    yt-lockup-view-model:has(path[d^='M11.326 2H3.5A1.5 1.5 0 002']) {
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
    ytd-rich-item-renderer:has(.ytBadgeShapeHost.ytBadgeShapePromoted.ytBadgeShapeTypography),
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

  const cssHideOriginalPlayer = `
    body.bestTube-custom-player #player:not(.ytd-shorts):not(.ytd-channel-video-player-renderer),
    body.bestTube-custom-player #player-full-bleed-container {
      visibility: hidden !important;
    }
  `;

  const bestTubeStyleManager = {
    styles: {},
    set(id, css) {
      if (!css) {
        if (this.styles[id]) this.styles[id].remove();
        delete this.styles[id];
        return;
      }
      if (!this.styles[id]) {
        const tag = document.createElement('style');
        tag.id = id;
        tag.textContent = css;
        document.head.appendChild(tag);
        this.styles[id] = tag;
      } else {
        this.styles[id].textContent = css;
      }
    },
  };

  insertStyles();
  waitForBody(() => {
    insertPopup();
    waitForButtonsBar((buttonsBar) => {
      startObserver(buttonsBar);
      ensureButton(buttonsBar);
    });
  });

  function initCheckboxToggle(id, styleId, css) {
    const cb = document.getElementById(id);
    if (!cb) return;
    let isChecked = localStorage.getItem('bestTube-' + id) === 'true';

    const apply = () => {
      localStorage.setItem('bestTube-' + id, isChecked);
      bestTubeStyleManager.set(styleId, isChecked ? css : null);
      if (isChecked) cb.setAttribute('checked', '');
      else cb.removeAttribute('checked');
    };

    cb.addEventListener('click', () => {
      isChecked = !isChecked;
      apply();
    });
    apply();
  }

  function waitForBody(callback) {
    if (document.body) return callback();
    requestAnimationFrame(() => waitForBody(callback));
  }

  function waitForButtonsBar(callback) {
    const buttonsBar = document.querySelector(
      'ytd-masthead #container #end #buttons',
    );
    if (buttonsBar) return callback(buttonsBar);
    requestAnimationFrame(() => waitForButtonsBar(callback));
  }

  function startObserver(buttonsBar) {
    new MutationObserver(() => ensureButton(buttonsBar)).observe(buttonsBar, {
      childList: true,
      subtree: false,
    });
  }

  function ensureButton(buttonsBar) {
    if (!document.querySelector('#bestTube-btn')) {
      const popup = document.querySelector('#bestTube-popup');
      const icon = document.querySelector('#bestTube-btn-icon');
      if (popup) popup.style.display = 'none';
      if (icon) icon.style.transform = 'rotate(0deg)';
      insertButton(buttonsBar);
    }
  }

  function togglePopup(forceState = null) {
    const btn = document.querySelector('#bestTube-btn');
    const icon = document.querySelector('#bestTube-btn-icon');
    const popup = document.querySelector('#bestTube-popup');
    if (!btn || !icon || !popup) return;

    const active = btn.dataset.active === 'true';
    const newState = forceState !== null ? forceState : !active;

    btn.dataset.active = newState;
    icon.style.transform = newState ? 'rotate(180deg)' : 'rotate(0deg)';
    btn.style.backgroundColor = newState ? 'rgba(255, 255, 255, 0.2)' : '';
    popup.style.display = newState ? 'block' : 'none';
  }

  function insertStyles() {
    const styles = document.createElement('style');
    styles.id = 'bestTube-styles';
    styles.textContent = `
      #bestTube-btn, #bestTube-popup { user-select: none; }
      #bestTube-btn { transition: background-color .3s; margin-left: 8px; margin-right: 8px; }
      #bestTube-btn-icon { transition: transform .3s; }
      #bestTube-popup { position: fixed; display: none; z-index: 99999; top: 56px; right: 224px; outline: none; box-sizing: border-box; width: 341px; max-width: 480px; border-radius: 12px; overflow-x: hidden; overflow-y: auto; color: #f1f1f1; background-color: #282828; box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75); }
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
      @media (max-width: 765px) { #bestTube-btn { width: 36px; padding: 0; } #bestTube-btn-text { display: none; } #bestTube-btn-icon { margin: 0; } }
      @media (max-width: 656px) { #bestTube-btn { background: transparent; } #bestTube-btn:hover { background: rgba(255, 255, 255, 0.2); } }
    `;
    document.head.appendChild(styles);
  }

  function insertButton(buttonsBar) {
    const btn = document.createElement('button');
    btn.id = 'bestTube-btn';
    btn.title = 'BestTube Extension';
    btn.className =
      'ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextOverlay ytSpecButtonShapeNextSizeM ytSpecButtonShapeNextIconLeading ytSpecButtonShapeNextEnableBackdropFilterExperiment';
    const iconBtn = document.createElement('span');
    iconBtn.id = 'bestTube-btn-icon';
    iconBtn.className = 'ytSpecButtonShapeNextIcon';
    iconBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)"><path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z"></path></svg>`;
    const textBtn = document.createElement('div');
    textBtn.id = 'bestTube-btn-text';
    textBtn.className = 'yt-spec-button-shape-next__button-text-content';
    textBtn.innerHTML = `<span>BestTube</span>`;
    btn.appendChild(iconBtn);
    btn.appendChild(textBtn);
    btn.dataset.active = 'false';
    btn.addEventListener('click', () => togglePopup());
    buttonsBar.prepend(btn);
  }

  function insertPopup() {
    if (!document.querySelector('#bestTube-popup')) {
      const createToggleHtml = (id, label) => `
        <div class="option">
          <label>${label}</label>
          <div id="${id}" class="toggle-container"><div class="toggle-bar"></div><div class="toggle-button"></div></div>
        </div>`;

      const popup = document.createElement('div');
      popup.id = 'bestTube-popup';
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

      popup
        .querySelector('#bestTube-popup-title button')
        .addEventListener('click', () => togglePopup(false));
      document.addEventListener('click', (e) => {
        const p = document.querySelector('#bestTube-popup');
        const b = document.querySelector('#bestTube-btn');
        if (
          p &&
          b &&
          b.dataset.active === 'true' &&
          !p.contains(e.target) &&
          !b.contains(e.target)
        )
          togglePopup(false);
      });

      initCheckboxToggle(
        'remove-player-ads',
        'bestTube-remove-player-ads',
        cssHideOriginalPlayer,
      );
      initCheckboxToggle('remove-ads', 'bestTube-remove-ads', cssRemoveAds);
      initCheckboxToggle(
        'responsive-rows',
        'bestTube-responsive-rows',
        cssResponsiveRows,
      );
      initCheckboxToggle(
        'remove-members',
        'bestTube-remove-members',
        cssRemoveMembers,
      );
      initCheckboxToggle(
        'remove-shorts',
        'bestTube-remove-shorts',
        cssRemoveShorts,
      );
      initCheckboxToggle('remove-news', 'bestTube-remove-news', cssRemoveNews);
      initCheckboxToggle(
        'remove-recommended',
        'bestTube-remove-recommended',
        cssRemoveRecommended,
      );
      initCheckboxToggle(
        'remove-super-thanks',
        'bestTube-remove-super-thanks',
        cssRemoveSuperThanks,
      );

      initCustomPlayer();
    }
  }

  // ============================================================
  //  INYECTAR IFRAME DE WIKIMEDIA CON EL REPRODUCTOR DE YOUTUBE
  // ============================================================

  // Helper para silenciar el video original
  function setOriginalVideoMute(mute) {
    const video = document.querySelector('#movie_player video');
    const player = document.querySelector('#movie_player');

    // Muteamos a nivel HTML5
    if (video) video.muted = mute;

    // Muteamos a nivel de la API del reproductor de YouTube
    if (
      player &&
      typeof player.mute === 'function' &&
      typeof player.unMute === 'function'
    ) {
      if (mute) player.mute();
      else player.unMute();
    }
  }

  function initCustomPlayer() {
    const isEnabled =
      localStorage.getItem('bestTube-remove-player-ads') === 'true';
    if (isEnabled) setupCustomPlayer();

    const toggleContainer = document.getElementById('remove-player-ads');
    if (toggleContainer) {
      toggleContainer.addEventListener('click', function () {
        setTimeout(() => {
          if (localStorage.getItem('bestTube-remove-player-ads') === 'true') {
            setupCustomPlayer();
          } else {
            removeCustomPlayer();
          }
        }, 50);
      });
    }

    let lastUrl = window.location.href;
    const urlObserver = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        if (localStorage.getItem('bestTube-remove-player-ads') === 'true') {
          setTimeout(() => {
            removeCustomPlayer();
            setupCustomPlayer();
          }, 500);
        } else {
          removeCustomPlayer();
        }
      }
    });

    if (document.body)
      urlObserver.observe(document.body, { childList: true, subtree: true });
  }

  function setupCustomPlayer() {
    if (!window.location.href.includes('/watch')) return;

    const checkForPlayer = setInterval(() => {
      if (document.querySelector('#movie_player')) {
        clearInterval(checkForPlayer);
        createCustomPlayer();
      }
    }, 100);
    setTimeout(() => clearInterval(checkForPlayer), 5000);
  }

  function createCustomPlayer() {
    if (document.getElementById('bestTube-custom-player')) return;

    const videoId = getVideoIdFromUrl();
    if (!videoId) return;

    const playerContainer = document.createElement('div');
    playerContainer.id = 'bestTube-custom-player';
    playerContainer.style.cssText = `position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; background: #000 !important; z-index: 10000 !important;`;

    const urlParams = new URLSearchParams(window.location.search);
    const startTime = urlParams.get('t') || '0';

    const wikimediaUrl = `https://www.wikimedia.org/?bestTubeEmbed=${videoId}&t=${startTime}`;
    const wikimediaIframe = document.createElement('iframe');
    wikimediaIframe.id = 'bestTube-wikimedia-iframe';
    wikimediaIframe.src = wikimediaUrl;
    wikimediaIframe.style.cssText = `position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; border: none !important; background: #000 !important; z-index: 1 !important;`;
    wikimediaIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    wikimediaIframe.allowFullscreen = true;

    playerContainer.appendChild(wikimediaIframe);

    const moviePlayer = document.querySelector('#movie_player');
    if (moviePlayer) {
      moviePlayer.style.position = 'relative';
      moviePlayer.appendChild(playerContainer);
      if (startTime !== '0')
        setTimeout(() => setYoutubePlayerTime(startTime), 2000);
    }

    injectPlayerStyles();
    setupPlayerEventListeners();

    setOriginalVideoMute(true);
  }

  function togglePlayPause() {
    const iframe = document.getElementById('bestTube-wikimedia-iframe');
    if (iframe && iframe.contentWindow)
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*',
      );
  }

  function toggleControls() {
    const overlay = document.getElementById('bestTube-play-pause-overlay');
    if (overlay)
      overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
  }

  function toggleFullscreen() {
    const playerContainer = document.getElementById('bestTube-custom-player');
    if (playerContainer) {
      if (!document.fullscreenElement)
        playerContainer.requestFullscreen().catch(() => {});
      else document.exitFullscreen();
    }
  }

  function setYoutubePlayerTime(time) {
    const iframe = document.getElementById('bestTube-wikimedia-iframe');
    if (iframe && iframe.contentWindow)
      iframe.contentWindow.postMessage(
        `{"event":"command","func":"seekTo","args":[${parseInt(time)},true]}`,
        '*',
      );
  }

  function setupPlayerEventListeners() {
    document.addEventListener('keydown', function (e) {
      if (!document.getElementById('bestTube-custom-player')) return;
      switch (e.key.toLowerCase()) {
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
      }
    });
  }

  function toggleMute() {
    const iframe = document.getElementById('bestTube-wikimedia-iframe');
    if (iframe && iframe.contentWindow)
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"mute","args":""}',
        '*',
      );
  }

  function seekRelative(seconds) {
    const iframe = document.getElementById('bestTube-wikimedia-iframe');
    if (iframe && iframe.contentWindow)
      iframe.contentWindow.postMessage(
        `{"event":"command","func":"seekBy","args":[${seconds}]}`,
        '*',
      );
  }

  function removeCustomPlayer() {
    const player = document.getElementById('bestTube-custom-player');
    if (player) player.remove();

    setOriginalVideoMute(false);
  }

  function getVideoIdFromUrl() {
    return new URLSearchParams(window.location.search).get('v');
  }

  function injectPlayerStyles() {
    if (document.getElementById('bestTube-player-styles')) return;
    const style = document.createElement('style');
    style.id = 'bestTube-player-styles';
    style.textContent = `
      body.bestTube-custom-player-active .ytp-chrome-top, body.bestTube-custom-player-active .ytp-chrome-bottom,
      body.bestTube-custom-player-active .ytp-ce-element, body.bestTube-custom-player-active .ytp-gradient-top,
      body.bestTube-custom-player-active .ytp-gradient-bottom, body.bestTube-custom-player-active .ytp-progress-bar-container,
      body.bestTube-custom-player-active .ytp-chrome-controls { display: none !important; opacity: 0 !important; visibility: hidden !important; }
      #bestTube-custom-player { position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; background: #000 !important; z-index: 10000 !important; }
      #bestTube-custom-player + * video { opacity: 0 !important; visibility: hidden !important; }
      #bestTube-play-pause-overlay:hover { opacity: 1 !important; }
    `;
    document.head.appendChild(style);
  }

  console.log(`BestTube v${version}`);
})();
