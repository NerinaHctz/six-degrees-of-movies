
import { API_KEY, BASE_URL } from './api.js'


export const getRandomActors = (level) => {
    return fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            // Ajustar el umbral de popularidad en función del nivel
            let popularityThreshold;
            if (level <= 5) {
                popularityThreshold = 20; // Actores muy conocidos
            } else if (level <= 10) {
                popularityThreshold = 10; // Actores conocidos
            } else {
                popularityThreshold = 5; // Actores menos conocidos
            }

            const isKnownForActing = actor => actor.known_for_department === 'Acting';
            const isPopularEnough = actor => actor.popularity > popularityThreshold;

            let actors = data.results.filter(actor =>
                isKnownForActing(actor) &&
                isPopularEnough(actor)
            );

            if (actors.length < 2) {
                console.warn('No se encontraron suficientes actores que cumplan con los criterios iniciales. Relajando criterios...');
                actors = data.results.filter(actor =>
                    isKnownForActing(actor) &&
                    isPopularEnough(actor)
                );
            }

            if (actors.length < 2) {
                console.warn('No se encontraron suficientes actores que cumplan con los criterios relajados.');
                return [];  // Devuelve un array vacío en caso de no encontrar suficientes actores
            }

            const randomActors = [];
            while (randomActors.length < 2) {
                const randomIndex = Math.floor(Math.random() * actors.length);
                const randomActor = actors[randomIndex];
                if (!randomActors.includes(randomActor)) {
                    randomActors.push(randomActor);
                }
            }
            return randomActors;
        })
        .catch((error) => {
            console.error('Error al obtener actores aleatorios:', error);
            return [];  // Devuelve un array vacío en caso de error
        });
}