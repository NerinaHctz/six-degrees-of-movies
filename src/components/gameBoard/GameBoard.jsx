import React, { useState, useEffect } from 'react'
import ActorCard from '../actorCard/ActorCard'
import MovieCard from '../movieCard/MovieCard'
import GameResult from '../gameResult/GameResult'
import { getMoviesOfActor } from '../../utils/getMoviesOfActor.js'
import { getActorInfoFromMovie } from '../../utils/getActorInfoFromMovie.js'
import { getRandomActors } from '../../utils/getRandomActors.js'
import { createPath } from '../../utils/helpers/createPath.js'
import { buildMoviesGraph } from '../../utils/helpers/buildMoviesGraph.js'
import { formatActorName } from '../../utils/helpers/formatActorName.js'
import './GameBoard.scss'

const GameBoard = () => {
    const [actor1, setActor1] = useState(null)
    const [actor2, setActor2] = useState(null)
    const [movies, setMovies] = useState([])
    const [selectedMovies, setSelectedMovies] = useState([])
    const [actorsInMovie, setActorsInMovie] = useState([])
    const [gamePath, setGamePath] = useState(null)
    const [showActors, setShowActors] = useState(false)
    const [selectedActor, setSelectedActor] = useState(null)
    const [isRolling, setIsRolling] = useState(false)
    const [score, setScore] = useState(100)
    const [nexusFound, setNexusFound] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [diceRollCount, setDiceRollCount] = useState(0)
    const [selectedActors, setSelectedActors] = useState([])

    const fetchRandomActors = () => {
        if (diceRollCount > 0 && !nexusFound) {
            setScore(score - 10)
        }
        setDiceRollCount(diceRollCount + 1)
        setIsRolling(true)
        setTimeout(() => {
            getRandomActors(selectedActors).then(([randomActor1, randomActor2]) => {
                setActor1(randomActor1)
                setActor2(randomActor2)
                setSelectedActors([...selectedActors, randomActor1, randomActor2])
                setShowActors(true)
                setIsRolling(false)
                setNexusFound(false)
                setGamePath(null)
            }).catch(error => {
                if (error.message === 'No hay suficientes actores disponibles para seleccionar dos diferentes.') {
                    if (window.confirm('No hay suficientes actores disponibles. ¿Quieres reiniciar el juego?')) {
                        resetGame()
                    }
                } else {
                    console.error(error.message)
                }
                setIsRolling(false)
            })
        }, 1000)
    }

    const resetGame = () => {
        setActor1(null)
        setActor2(null)
        setMovies([])
        setSelectedMovies([])
        setActorsInMovie([])
        setGamePath(null)
        setShowActors(false)
        setSelectedActor(null)
        setIsRolling(false)
        setScore(100)
        setNexusFound(false)
        setGameOver(false)
        setDiceRollCount(0)
        setSelectedActors([])
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
            setSelectedMovies([movie])
            setScore(score - 1)
        })
    }

    const onActorSelect = (actor) => {
        setSelectedActor(actor)
        if (actor.id === actor2.id) {
            setNexusFound(true)
            setGameOver(true)
        } else {
            getMoviesOfActor(actor.id).then((movies) => {
                const randomMovies = getRandomMovies(movies, 20)
                setMovies(randomMovies)
                setSelectedMovies([])
                setScore(score - 1)
            })
        }
    }

    const getRandomMovies = (movies, count) => {
        const shuffled = movies.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    }

    if (gameOver || score <= 0) {
        return <GameResult path={gamePath} success={nexusFound} score={score} />
    }

    return (
        <div className='game-board'>
            <h2>Tira los dados para que aparezcan los actores</h2>
            <button className={`dice-button ${isRolling ? 'rolling' : ''}`} onClick={fetchRandomActors}>
                <img src='/icon/dados.png' alt='Obtener Actores Aleatorios' />
            </button>
            <div className='subtitle-container'>
                <h2>Actores seleccionados</h2>
                <div className='score'>
                    <h3>Puntuación: {score}</h3>
                </div>
            </div>
            <div className='actors-container'>
                {showActors && actor1 && <ActorCard actor={actor1} onActorSelect={onActorSelect} />}
                {showActors && actor2 && <ActorCard actor={actor2} onActorSelect={onActorSelect} />}
            </div>
            {selectedMovies.length === 0 && movies.length > 0 && (
                <div className='movies-list'>
                    <h3>Películas de {selectedActor ? selectedActor.name : ''}</h3>
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id} onClick={() => onMovieSelect(movie)}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title}
                                    className='movie-poster'
                                    onError={(e) => e.target.src = 'path/to/default-poster.jpg'}
                                />
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {selectedMovies.length > 0 && (
                <MovieCard
                    movie={selectedMovies[0]}
                    actors={actorsInMovie}
                    onActorSelect={onActorSelect}
                />
            )}
            {gamePath && (
                <div className='game-path'>
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