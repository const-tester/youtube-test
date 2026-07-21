let proxyWrapper = null;
let proxyIframe = null;
let isProxyEnabled = false;
let currentVideoId = "";

// Escuchamos los eventos enviados desde main.js
document.addEventListener('BestTube-EnableProxy', () => {
    isProxyEnabled = true;
    initProxyPlayer();
});

document.addEventListener('BestTube-DisableProxy', () => {
    isProxyEnabled = false;
    removeProxyPlayer();
});

// Función para extraer la ID del video de la URL
function getVideoId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('v');
}

// Inicializa el reproductor falso (Proxy)
function initProxyPlayer() {
    currentVideoId = getVideoId();
    if (!isProxyEnabled || !currentVideoId || window.location.href.indexOf('/watch') === -1) return;

    const nativePlayer = document.getElementById("movie_player");
    const videoElement = document.querySelector("#movie_player video");

    // Silenciamos y pausamos el reproductor original para no escuchar el anuncio de fondo
    if (nativePlayer && typeof nativePlayer.pauseVideo === "function") {
        nativePlayer.pauseVideo();
        nativePlayer.mute();
    }
    if (videoElement) {
        videoElement.muted = true;
        videoElement.volume = 0;
    }

    if (!proxyWrapper) {
        // Creamos el contenedor que tapará al reproductor original
        proxyWrapper = document.createElement("div");
        proxyWrapper.id = "bestTube_playerWrapper";
        Object.assign(proxyWrapper.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "999",
            backgroundColor: "#000000",
            borderRadius: "12px",
            overflow: "hidden"
        });

        // Creamos el iframe utilizando el proxy para evadir la detección
        proxyIframe = document.createElement("iframe");
        proxyIframe.setAttribute("width", "100%");
        proxyIframe.setAttribute("height", "100%");
        proxyIframe.setAttribute("frameborder", "0");
        proxyIframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        proxyIframe.setAttribute("allowfullscreen", "true");
        // Cargamos la URL de wikimedia utilizada como puente
        proxyIframe.src = "https://wikimedia.org?goodTubeProxy=1"; 

        proxyWrapper.appendChild(proxyIframe);

        // Insertamos el nuevo reproductor sobre el contenedor de YouTube
        const playerContainer = document.querySelector("#player-full-bleed-container") || document.querySelector("#ytd-player");
        if (playerContainer) {
            playerContainer.appendChild(proxyWrapper);
        }
    } else {
        proxyWrapper.style.display = "block";
    }

    // Le enviamos la ID del video real al Iframe a través de postMessage
    setTimeout(() => {
        if (currentVideoId && proxyIframe && proxyIframe.contentWindow) {
            const embedUrl = `https://www.youtube.com/embed/${currentVideoId}?goodTubeEmbed=1&autoplay=1`;
            proxyIframe.contentWindow.postMessage("goodTube_src_" + embedUrl, "*");
        }
    }, 1000); 
}

// Elimina y restaura el estado natural del reproductor de YouTube
function removeProxyPlayer() {
    if (proxyWrapper) {
        proxyWrapper.style.display = "none";
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

// YouTube es una SPA (Single Page Application), necesitamos detectar cuándo cambia el video
window.addEventListener('yt-navigate-finish', () => {
    if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
        // Reiniciamos el iframe con la ID del nuevo video
        if (proxyWrapper) {
            removeProxyPlayer();
            setTimeout(initProxyPlayer, 500); 
        } else {
            initProxyPlayer();
        }
    } else {
        removeProxyPlayer();
    }
});

// Comprobación periódica para asegurar que el reproductor original siga silenciado (si el proxy está activo)
setInterval(() => {
    if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
        const videoElement = document.querySelector("#movie_player video");
        if (videoElement && (!videoElement.muted || videoElement.volume > 0)) {
            videoElement.muted = true;
            videoElement.volume = 0;
            videoElement.pause();
        }
    }
}, 500);
