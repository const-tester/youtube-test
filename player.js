console.log('4');

// ============================================================
// LÓGICA DENTRO DEL IFRAME PROXY (WIKIMEDIA)
// ============================================================
if (window.location.href.indexOf("goodTubeProxy=1") !== -1) {
    
    // Ocultamos todo lo de Wikipedia y dejamos que el iframe ocupe el 100%
    const style = document.createElement('style');
    style.textContent = `
        body *:not(#goodTube_youtube_iframe) { display: none !important; opacity: 0 !important; visibility: hidden !important; }
        body { background: transparent !important; overflow: hidden !important; margin: 0; padding: 0; }
        #goodTube_youtube_iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 999999; }
    `;
    document.documentElement.appendChild(style);

    // Extraemos el parámetro de vídeo que nos envíe la URL o un mensaje
    window.addEventListener("message", (event) => {
        if (typeof event.data === "string" && event.data.startsWith("goodTube_src_")) {
            const embedUrl = event.data.replace("goodTube_src_", "");
            let iframe = document.getElementById("goodTube_youtube_iframe");
            
            if (!iframe) {
                iframe = document.createElement("iframe");
                iframe.id = "goodTube_youtube_iframe";
                iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                iframe.setAttribute("allowfullscreen", "true");
                document.body.appendChild(iframe);
            }
            if (iframe.src !== embedUrl) {
                iframe.src = embedUrl;
            }
        }
    });

    // Notificamos que el proxy está listo
    window.addEventListener("DOMContentLoaded", () => {
        if (window.top !== window.self) {
            window.top.postMessage("goodTube_proxy_ready", "*");
        }
    });

} 
// ============================================================
// LÓGICA EN LA PÁGINA PRINCIPAL (YOUTUBE)
// ============================================================
else {

    let proxyWrapper = null;
    let proxyIframe = null;
    let isProxyEnabled = false;
    let currentVideoId = "";

    document.addEventListener('BestTube-EnableProxy', () => {
        isProxyEnabled = true;
        initProxyPlayer();
    });

    document.addEventListener('BestTube-DisableProxy', () => {
        isProxyEnabled = false;
        removeProxyPlayer();
    });

    window.addEventListener("message", (event) => {
        if (event.data === "goodTube_proxy_ready" && isProxyEnabled && currentVideoId && proxyIframe) {
            sendVideoToProxy();
        }
    });

    function getVideoId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('v');
    }

    function sendVideoToProxy() {
        if (!currentVideoId || !proxyIframe || !proxyIframe.contentWindow) return;
        const embedUrl = `https://www.youtube.com/embed/${currentVideoId}?goodTubeEmbed=1&autoplay=1`;
        proxyIframe.contentWindow.postMessage("goodTube_src_" + embedUrl, "*");
    }

    function initProxyPlayer() {
        currentVideoId = getVideoId();
        if (!isProxyEnabled || !currentVideoId || window.location.href.indexOf('/watch') === -1) return;

        const nativePlayerContainer = document.querySelector("#ytd-player") || document.querySelector("#player");
        const nativePlayer = document.getElementById("movie_player");
        const videoElement = document.querySelector("#movie_player video");

        if (nativePlayer && typeof nativePlayer.pauseVideo === "function") {
            nativePlayer.pauseVideo();
            nativePlayer.mute();
        }
        if (videoElement) {
            videoElement.muted = true;
            videoElement.volume = 0;
            videoElement.pause();
        }

        if (!proxyWrapper) {
            proxyWrapper = document.createElement("div");
            proxyWrapper.id = "bestTube_playerWrapper";
            Object.assign(proxyWrapper.style, {
                width: "100%",
                height: "100%",
                minHeight: "360px",
                aspectRatio: "16 / 9",
                backgroundColor: "#000000",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                zIndex: "999"
            });

            proxyIframe = document.createElement("iframe");
            proxyIframe.setAttribute("width", "100%");
            proxyIframe.setAttribute("height", "100%");
            proxyIframe.setAttribute("frameborder", "0");
            proxyIframe.setAttribute("sandbox", "allow-top-navigation allow-top-navigation-by-user-activation allow-scripts allow-same-origin allow-forms allow-popups");
            proxyIframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            proxyIframe.setAttribute("allowfullscreen", "true");
            
            // Pasamos la URL del proxy de Wikimedia apuntando limpiamente
            proxyIframe.src = "https://www.wikimedia.org/?goodTubeProxy=1"; 

            proxyWrapper.appendChild(proxyIframe);
            
            if (nativePlayerContainer && nativePlayerContainer.parentNode) {
                // Se crea justo antes de #player (siendo su hermano)
                nativePlayerContainer.parentNode.insertBefore(proxyWrapper, nativePlayerContainer);
            }
        } else {
            proxyWrapper.style.display = "block";
        }

        // Forzamos el display: none en el reproductor original de YouTube
        if (nativePlayerContainer) {
            nativePlayerContainer.style.setProperty("display", "none", "important");
        }

        // Intentamos enviar el vídeo de inmediato por si el iframe ya cargó
        setTimeout(sendVideoToProxy, 500);
    }

    function removeProxyPlayer() {
        if (proxyWrapper) {
            proxyWrapper.style.display = "none";
            if (proxyIframe) proxyIframe.src = "about:blank"; 
        }
        
        const nativePlayerContainer = document.querySelector("#ytd-player") || document.querySelector("#player");
        if (nativePlayerContainer) {
            nativePlayerContainer.style.removeProperty("display");
        }

        const nativePlayer = document.getElementById("movie_player");
        const videoElement = document.querySelector("#movie_player video");
        
        if (nativePlayer && typeof nativePlayer.unMute === "function") {
            nativePlayer.unMute();
        }
        if (videoElement) {
            videoElement.muted = false;
            videoElement.volume = 1;
        }
    }

    window.addEventListener('yt-navigate-finish', () => {
        if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
            currentVideoId = getVideoId();
            if (proxyWrapper) {
                proxyWrapper.style.display = "block";
                sendVideoToProxy();
            } else {
                initProxyPlayer();
            }
        } else {
            removeProxyPlayer();
        }
    });

    setInterval(() => {
        if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
            const nativePlayerContainer = document.querySelector("#ytd-player") || document.querySelector("#player");
            
            if (nativePlayerContainer && nativePlayerContainer.style.display !== "none") {
                nativePlayerContainer.style.setProperty("display", "none", "important");
            }

            const videoElement = document.querySelector("#movie_player video");
            if (videoElement && (!videoElement.muted || videoElement.volume > 0 || !videoElement.paused)) {
                videoElement.muted = true;
                videoElement.volume = 0;
                videoElement.pause();
            }
        }
    }, 100);

}
