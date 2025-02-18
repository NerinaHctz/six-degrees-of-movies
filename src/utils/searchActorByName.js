import { API_KEY, BASE_URL } from './api.js'


// Función para buscar actores por nombre
export const searchActorByName = (name) => {
    return fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${name}`)
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((error) => {
            console.error('Error al buscar el actor por nombre:', error)
            return []  // Devuelve un array vacío en caso de error
        })
}