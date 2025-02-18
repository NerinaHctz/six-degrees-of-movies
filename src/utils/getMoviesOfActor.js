import { API_KEY, BASE_URL } from './api.js'


// Función para obtener las películas de un actor
export const getMoviesOfActor = (actorId) => {
    return fetch(`${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}`)
        .then((response) => response.json())  // Convierte la respuesta a JSON
        .then((data) => data.cast)  // Devuelve las películas en las que el actor ha trabajado
        .catch((error) => {
            console.error('Error al obtener las películas del actor:', error)
            return []  // Devuelve un array vacío en caso de error
        })
}