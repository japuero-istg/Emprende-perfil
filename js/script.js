(function() {
    // --- CONFIGURACIÓN ---
    const PACKAGE_NAME = 'istg.edu.ec.appEmprendeISTGDev';
    const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=' + PACKAGE_NAME;
    const APP_SCHEME = 'app';
    // -------------------



    //---PUNTO 2.1:MODIFICACION---
    // Leemos ambos parametros de la URL del navegador.
    const params = new URLSearchParams(window.location.search);
    //const profileId = params.get('perfil');
    const userId = params.get('userId');
    const publicacionId = params.get('publicacionId');

    
    // --- PUNTO 2.2: MODIFICACIÓN ---
    // Si falta CUALQUIERA de los dos IDs, activamos el fallback a la Play Store.
    if (!userId || !publicacionId) {
        window.location.replace(PLAY_STORE_URL);
        return; // Detiene la ejecución del script.
    }

    // --- PUNTO 2.3: MODIFICACIÓN ---
    // Construimos el nuevo formato de "intent".
    // HOST: "publication"
    // PATH: el userId
    // QUERY PARAMETER: el publicacionId
    // Ejemplo: app://publication/USER_ID?publicacionId=PUB_ID
    const intentUrl =
        'intent://publication/' + userId + '?publicacionId=' + publicacionId +
        '#Intent;scheme=' + APP_SCHEME + ';package=' + PACKAGE_NAME +
        ';S.browser_fallback_url=' + encodeURIComponent(PLAY_STORE_URL) + ';end';

    // Se intenta abrir la app con el nuevo enlace. El sistema operativo se encarga del resto.
    window.location.assign(intentUrl);
})();


