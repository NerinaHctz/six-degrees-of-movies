import { API_KEY, BASE_URL } from './api.js'

const getActorDetails = (actorId) => {

    return fetch(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}`)
        .then((response) => response.json())
}

export const getRandomActors = (excludedActors = []) => {

    return fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            const actors = data.results

            const actorsPromises = actors
                .map(actor => getActorDetails(actor.id))

            return Promise.all(actorsPromises)
        })
        .then((actorsDetails) => {
            const excludedCountries = [
                'China', 'Japan', 'India', 'South Korea', 'Indonesia', 'Pakistan', 'Bangladesh', 'Vietnam', 'Philippines', 'Thailand',
                'Malaysia', 'Singapore', 'Nepal', 'Sri Lanka', 'Myanmar', 'Cambodia', 'Laos', 'Mongolia', 'Bhutan', 'Maldives', 'Turkey'
            ]

            const filteredActors = actorsDetails.filter(actor => {
                return actor.place_of_birth && !excludedCountries.some(country => actor.place_of_birth.includes(country))
            })

            const finalActors = filteredActors.filter(actor => !excludedActors.some(excluded => excluded.id === actor.id))

            if (finalActors.length < 2) {
                throw new Error('No hay suficientes actores disponibles para seleccionar dos diferentes.')
            }

            let randomActor1, randomActor2
            do {
                randomActor1 = finalActors[Math.floor(Math.random() * finalActors.length)]
                randomActor2 = finalActors[Math.floor(Math.random() * finalActors.length)]
            } while (randomActor1.id === randomActor2.id)

            return [randomActor1, randomActor2]
        })
}