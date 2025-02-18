export const createPath = (startActor, endActor, moviesGraph) => {
    let path = []
    let visited = new Set()
    let queue = [[startActor]]
    visited.add(startActor.id)

    while (queue.length > 0) {
        let currentPath = queue.shift()
        let currentActor = currentPath[currentPath.length - 1]

        // Si encontramos el actor final, retornamos el camino
        if (currentActor.id === endActor.id) {
            return currentPath
        }

        // Si no, agregamos los actores conectados por las películas
        if (moviesGraph[currentActor.id]) {
            for (let movie of moviesGraph[currentActor.id]) {
                for (let nextActor of movie.cast) {
                    if (!visited.has(nextActor.id)) {
                        visited.add(nextActor.id)
                        let newPath = [...currentPath, nextActor]
                        queue.push(newPath)
                    }
                }
            }
        }
    }

    return null // Si no se encuentra camino
}