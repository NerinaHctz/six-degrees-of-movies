import React, { useState, useEffect } from 'react'
import ActorCard from '../actorCard/ActorCard'
import MovieCard from '../movieCard/MovieCard'
import { getMoviesOfActor } from '../../utils/getMoviesOfActor.js'
import { getActorInfoFromMovie } from '../../utils/getActorInfoFromMovie.js'
import { getRandomActors } from '../../utils/getRandomActors.js'
import { createPath } from '../../utils/helpers/createPath.js'
import { buildMoviesGraph } from '../../utils/helpers/buildMoviesGraph.js'
import { formatActorName } from '../../utils/helpers/formatActorName.js'

const GameBoard = () => {
    const [actor1, setActor1] = useState(null)
    const [actor2, setActor2] = useState(null)
    const [movies, setMovies] = useState([])
    const [selectedMovies, setSelectedMovies] = useState([])
    const [actorsInMovie, setActorsInMovie] = useState([])
    const [gamePath, setGamePath] = useState(null)
    const [showActors, setShowActors] = useState(false)
    const [level, setLevel] = useState(1) // Nivel inicial

    const fetchRandomActors = () => {
        getRandomActors(level).then(([randomActor1, randomActor2]) => {
            setActor1(randomActor1)
            setActor2(randomActor2)
            setShowActors(true)
        })
    }

    useEffect(() => {
        if (actor1 && actor2) {
            getMoviesOfActor(actor1.id).then((movies1) => {
                getMoviesOfActor(actor2.id).then((movies2) => {
                    const graph = buildMoviesGraph(movies1 || [], movies2 || [])
                    const path = createPath(actor1, actor2, graph)
                    setGamePath(path)
                })
            })
        }
    }, [actor1, actor2])

    const onMovieSelect = (movie) => {
        getActorInfoFromMovie(movie.id).then((actors) => {
            setActorsInMovie(actors)
            setSelectedMovies([...selectedMovies, movie])
        })
    }

    const onActorSelect = (actor) => {
        getMoviesOfActor(actor.id).then((movies) => {
            setMovies(movies || [])
        })
    }

    return (
        <div className="game-board">
            <h2>Actores seleccionados</h2>
            <button onClick={fetchRandomActors}>Obtener Actores Aleatorios</button>
            {showActors && actor1 && <ActorCard actor={actor1} onActorSelect={onActorSelect} />}
            {showActors && actor2 && <ActorCard actor={actor2} onActorSelect={onActorSelect} />}
            {movies.length > 0 && (
                <div className="movies-list">
                    <h3>Películas</h3>
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id} onClick={() => onMovieSelect(movie)}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {actorsInMovie.length > 0 && (
                <MovieCard
                    movie={selectedMovies[selectedMovies.length - 1]}
                    actors={actorsInMovie}
                    onActorSelect={onActorSelect}
                />
            )}
            {gamePath && (
                <div className="game-path">
                    <h2>Camino encontrado:</h2>
                    <ul>
                        {gamePath.map((actor, index) => (
                            <li key={index}>{formatActorName(actor)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default GameBoard