import { API_KEY, BASE_URL } from './api.js'

export const getActorInfoFromMovie = (movieId) => {

    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => data.cast)
        .catch((error) => {
            console.error('Error al obtener los actores de la película:', error)
            return []
        })
}