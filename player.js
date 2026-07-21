console.log('2');

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

    // Silenciamos y pausamos el reproductor original
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
        // Creamos el contenedor que flotará sobre el reproductor original
        proxyWrapper = document.createElement("div");
        proxyWrapper.id = "bestTube_playerWrapper";
        Object.assign(proxyWrapper.style, {
            position: "absolute",
            zIndex: "999999", // Z-index absurdamente alto para que nada de YouTube lo tape
            backgroundColor: "#000000",
            borderRadius: "12px",
            overflow: "hidden"
        });

        // Creamos el iframe utilizando el proxy
        proxyIframe = document.createElement("iframe");
        proxyIframe.setAttribute("width", "100%");
        proxyIframe.setAttribute("height", "100%");
        proxyIframe.setAttribute("frameborder", "0");
        proxyIframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        proxyIframe.setAttribute("allowfullscreen", "true");
        proxyIframe.src = "https://wikimedia.org?goodTubeProxy=1"; 

        proxyWrapper.appendChild(proxyIframe);
        
        // ¡LA CLAVE ESTÁ AQUÍ! Lo inyectamos en el body, no en el reproductor de YouTube
        document.body.appendChild(proxyWrapper);
    } else {
        proxyWrapper.style.display = "block";
    }

    // Calculamos la posición inicial
    updateProxyPosition();

    // Le enviamos la ID del video real al Iframe
    setTimeout(() => {
        if (currentVideoId && proxyIframe && proxyIframe.contentWindow) {
            const embedUrl = `https://www.youtube.com/embed/${currentVideoId}?goodTubeEmbed=1&autoplay=1`;
            proxyIframe.contentWindow.postMessage("goodTube_src_" + embedUrl, "*");
        }
    }, 1000); 
}

// Función para calcar el tamaño y posición del reproductor original
function updateProxyPosition() {
    if (!isProxyEnabled || !proxyWrapper) return;
    
    // Buscamos el contenedor nativo
    let targetElement = document.querySelector("#ytd-player") || document.querySelector("#player");
    
    if (targetElement && targetElement.offsetHeight > 0) {
        let rect = targetElement.getBoundingClientRect();
        
        // Asignamos las medidas para que encaje perfectamente encima
        proxyWrapper.style.top = (rect.top + window.scrollY) + "px";
        proxyWrapper.style.left = (rect.left + window.scrollX) + "px";
        proxyWrapper.style.width = rect.width + "px";
        proxyWrapper.style.height = rect.height + "px";
    }
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

// YouTube cambia de video sin recargar la página (SPA)
window.addEventListener('yt-navigate-finish', () => {
    if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
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

// Bucle crítico: Mantiene la posición actualizada (si haces scroll o redimensionas) 
// y se asegura de que el video original siga mudo y pausado.
setInterval(() => {
    if (isProxyEnabled && window.location.href.indexOf('/watch') !== -1) {
        updateProxyPosition();
        
        const videoElement = document.querySelector("#movie_player video");
        if (videoElement && (!videoElement.muted || videoElement.volume > 0 || !videoElement.paused)) {
            videoElement.muted = true;
            videoElement.volume = 0;
            videoElement.pause();
        }
    }
}, 100); // Reducido a 100ms para que la adaptación visual al redimensionar sea fluida
