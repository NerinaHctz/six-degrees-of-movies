export const buildMoviesGraph = (movies1, movies2) => {
    const graph = {}

    movies1.forEach((movie) => {
        if (!graph[movie.id]) {
            graph[movie.id] = { ...movie, actors: [] }
        }
        if (movie.cast) {
            movie.cast.forEach((actor) => {
                if (!graph[movie.id].actors.includes(actor.id)) {
                    graph[movie.id].actors.push(actor.id)
                }
            })
        }
    })

    movies2.forEach((movie) => {
        if (!graph[movie.id]) {
            graph[movie.id] = { ...movie, actors: [] }
        }
        if (movie.cast) {
            movie.cast.forEach((actor) => {
                if (!graph[movie.id].actors.includes(actor.id)) {
                    graph[movie.id].actors.push(actor.id)
                }
            })
        }
    })

    return graph
}