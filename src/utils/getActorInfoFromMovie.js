import { API_KEY, BASE_URL } from './api.js'


// Función para obtener los actores de una película
export const getActorInfoFromMovie = (movieId) => {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then((response) => response.json())  // Convierte la respuesta a JSON
        .then((data) => data.cast)  // Devuelve los actores de la película
        .catch((error) => {
            console.error('Error al obtener los actores de la película:', error)
            return []  // Devuelve un array vacío en caso de error
        })
}