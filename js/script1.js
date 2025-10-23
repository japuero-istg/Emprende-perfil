(function() {
    // --- CONFIGURACIÓN ---
    const PACKAGE_NAME = 'istg.edu.ec.appEmprendeISTGDev';
    const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=' + PACKAGE_NAME;
    const APP_SCHEME = 'app';
    // -------------------

    // Extrae los parámetros de la URL (ej: ?perfil=USER_ID)
    const params = new URLSearchParams(window.location.search);
    const profileId = params.get('perfil');

    // CONDICIONAL: Si no hay un ID de perfil en la URL, redirige a la Play Store y termina.
    if (!profileId) {
        window.location.replace(PLAY_STORE_URL);
        return;
    }

    // *** LÓGICA DE SOLUCIÓN DEFINITIVA ***
    // Construye un enlace especial de tipo "intent" de Android.
    // Este enlace es el que resuelve el problema de que no se abra la app en todos los casos.
    const intentUrl = 
        'intent://profile/' + profileId +
        '#Intent;scheme=' + APP_SCHEME + ';package=' + PACKAGE_NAME +
        ';S.browser_fallback_url=' + encodeURIComponent(PLAY_STORE_URL) + ';end';

    // Intenta abrir la app usando el nuevo método.
    // El propio sistema Android se encarga de:
    // 1. Abrir la app si está instalada.
    // 2. Ir a la Play Store si no está instalada (gracias al S.browser_fallback_url).
    window.location.assign(intentUrl);

})();
