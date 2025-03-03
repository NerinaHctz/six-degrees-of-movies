import { API_KEY, BASE_URL } from './api.js'

export const getMoviesOfActor = (actorId) => {

    return fetch(`${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => data.cast)
        .catch((error) => {
            console.error('Error al obtener las películas del actor:', error)
            return []
        })
}