/**
 * Función para redirigir a la URL especificada
 * @param {string} url - La URL a la que redirigir
 */
function redirectTo(url) {
    // Abre la URL en una nueva pestaña
    window.open(url, '_blank');
}

/**
 * Función para hacer una solicitud GET al endpoint de Heroku
 * @param {string} url - La URL del endpoint de Heroku
 */
function fetchHerokuEndpoint(url) {
    // Mostrar algún indicador de carga si es necesario
    console.log('Haciendo solicitud a:', url);
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue ok');
            }
            return response.json();
        })
        .then(data => {
            // Procesar los datos recibidos
            console.log('Datos recibidos:', data);
            alert('Respuesta recibida de Heroku: ' + JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error al hacer la solicitud:', error);
            alert('Error al comunicarse con el servidor de Heroku');
        });
}