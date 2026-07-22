console.log('7');

// ============================================================
// LÓGICA DENTRO DEL IFRAME PROXY (WIKIMEDIA)
// ============================================================
if (window.location.href.indexOf("goodTubeProxy=1") !== -1) {
    
    const style = document.createElement('style');
    style.textContent = `
        body *:not(#goodTube_youtube_iframe) { display: none !important; opacity: 0 !important; visibility: hidden !important; }
        body { background: transparent !important; overflow: hidden !important; margin: 0; padding: 0; }
        #goodTube_youtube_iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 999999; }
    `;
    document.documentElement.appendChild(style);

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

    // Avisamos a YouTube de que el proxy ya ha cargado (al inyectar y al cargar el DOM por seguridad)
    window.top.postMessage("goodTube_proxy_ready", "*");
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

    // Inyectamos una regla CSS para ocultar los hijos nativos del reproductor limpiamente
    if (!document.getElementById("bestTube-proxy-css")) {
        const style = document.createElement("style");
        style.id = "bestTube-proxy-css";
        style.textContent = `
            body.bestTube-proxy-active ytd-player#ytd-player > *:not(#bestTube_playerWrapper),
            body.bestTube-proxy-active ytd-player > *:not(#bestTube_playerWrapper) {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

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

        // Buscamos el contenedor, si aún no existe abortamos y el setInterval lo volverá a intentar luego
        const ytdPlayer = document.querySelector("ytd-player#ytd-player") || document.querySelector("ytd-player");
        if (!ytdPlayer) return; 

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

        document.body.classList.add("bestTube-proxy-active");

        if (!proxyWrapper) {
            proxyWrapper = document.createElement("div");
            proxyWrapper.id = "bestTube_playerWrapper";
            Object.assign(proxyWrapper.style, {
                width: "100%",
                height: "100%",
                backgroundColor: "#000000",
                borderRadius: "12px",
                overflow: "hidden",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "999"
            });

            proxyIframe = document.createElement("iframe");
            proxyIframe.setAttribute("width", "100%");
            proxyIframe.setAttribute("height", "100%");
            proxyIframe.setAttribute("frameborder", "0");
            proxyIframe.setAttribute("sandbox", "allow-top-navigation allow-top-navigation-by-user-activation allow-scripts allow-same-origin allow-forms allow-popups");
            proxyIframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            proxyIframe.setAttribute("allowfullscreen", "true");
            proxyIframe.src = "https://www.wikimedia.org/?goodTubeProxy=1"; 

            proxyWrapper.appendChild(proxyIframe);
            
            ytdPlayer.style.position = "relative"; 
            ytdPlayer.appendChild(proxyWrapper);
            
            setTimeout(sendVideoToProxy, 500);
        } else {
            proxyWrapper.style.display = "block";
            // Aseguramos que siga estando incrustado correctamente
            if (!ytdPlayer.contains(proxyWrapper)) {
                ytdPlayer.style.position = "relative";
                ytdPlayer.appendChild(proxyWrapper);
                setTimeout(sendVideoToProxy, 500);
            }
        }
    }

    function removeProxyPlayer() {
        document.body.classList.remove("bestTube-proxy-active");

        if (proxyWrapper) {
            proxyWrapper.style.display = "none";
            if (proxyIframe) proxyIframe.src = "about:blank"; 
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
            const newVideoId = getVideoId();
            if (currentVideoId !== newVideoId) {
                currentVideoId = newVideoId;
                if (proxyWrapper && document.getElementById("bestTube_playerWrapper")) {
                    sendVideoToProxy(); // Si cambiamos de vídeo, enviamos el nuevo enlace
                }
            }
            initProxyPlayer();
        } else {
            removeProxyPlayer();
        }
    });

    setInterval(() => {
        if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
            document.body.classList.add("bestTube-proxy-active");
            
            // Comprobación de seguridad: Si no está en la página, intentamos ponerlo
            if (!document.getElementById("bestTube_playerWrapper")) {
                initProxyPlayer();
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
