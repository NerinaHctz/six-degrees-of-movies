import { useState, useEffect } from 'react'
import { getMoviesOfActor } from '../utils/getMoviesOfActor.js'
import { getActorInfoFromMovie } from '../utils/getActorInfoFromMovie.js'
import { getRandomActors } from '../utils/getRandomActors.js'

const useGameBoard = () => {
    const [actor1, setActor1] = useState(null)
    const [actor2, setActor2] = useState(null)
    const [movies, setMovies] = useState([])
    const [selectedMovies, setSelectedMovies] = useState([])
    const [actorsInMovie, setActorsInMovie] = useState([])
    const [showActors, setShowActors] = useState(false)
    const [selectedActor, setSelectedActor] = useState(null)
    const [isRolling, setIsRolling] = useState(false)
    const [score, setScore] = useState(100)
    const [nexusFound, setNexusFound] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [diceRollCount, setDiceRollCount] = useState(0)
    const [selectedActors, setSelectedActors] = useState([])
    const [showInstructions, setShowInstructions] = useState(false)

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
                setMovies([])
                setSelectedMovies([])
                setActorsInMovie([])
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
                }).catch(error => {
                    console.error('Error fetching movies for actor2:', error)
                })
            }).catch(error => {
                console.error('Error fetching movies for actor1:', error)
            })
        }
    }, [actor1, actor2])

    const onMovieSelect = (movie) => {
        getActorInfoFromMovie(movie.id).then((actors) => {
            setActorsInMovie(actors)
            setSelectedMovies([movie])
            setScore(score - 1)

            const isActor2InCast = actors.some(actor => actor.id === actor2.id)
            if (isActor2InCast) {
                setNexusFound(true)
                setGameOver(true)
            }
        }).catch(error => {
            console.error('Error selecting movie:', error)
        })
    }

    const onActorSelect = (actor) => {
        if (actor.id === actor1.id) {
            setSelectedActor(actor)
            getMoviesOfActor(actor.id).then((movies) => {
                setMovies(movies)
                setSelectedMovies([])
                setScore(score - 1)
            }).catch(error => {
                console.error('Error fetching movies for actor:', error)
            })
        } else if (actor.id === actor2.id) {
            const isActorInSelectedMovies = selectedMovies.some(movie => movie.cast && movie.cast.some(castMember => castMember.id === actor2.id))
            if (isActorInSelectedMovies) {
                setNexusFound(true)
                setGameOver(true)
            } else {
            }
        } else {
            setSelectedActor(actor)
            getMoviesOfActor(actor.id).then((movies) => {
                setMovies(movies)
                setSelectedMovies([])
                setScore(score - 1)
            }).catch(error => {
                console.error('Error fetching movies for actor:', error)
            })
        }
    }

    const toggleInstructions = () => setShowInstructions(!showInstructions)

    return {
        actor1,
        actor2,
        movies,
        selectedMovies,
        actorsInMovie,
        showActors,
        selectedActor,
        isRolling,
        score,
        nexusFound,
        gameOver,
        diceRollCount,
        selectedActors,
        showInstructions,
        fetchRandomActors,
        resetGame,
        onMovieSelect,
        onActorSelect,
        toggleInstructions,
    }
}

export default useGameBoard