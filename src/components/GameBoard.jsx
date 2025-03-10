import React from 'react'
import ActorCard from './ActorCard'
import MovieCard from './MovieCard'
import GameResult from './GameResult'
import Instructions from './Instructions.jsx'
import useGameBoard from '../hooks/useGameBoard'
import { formatActorName } from '../utils/handlers/formatActorName.js'
import Button from './common/Button'
import Container from './common/Container'
import Title from './common/Title'
import Image from './common/Image'
import '../styles/GameBoard.scss'

const GameBoard = () => {
    const {
        actor1,
        actor2,
        movies,
        selectedMovies,
        actorsInMovie,
        gamePath,
        showActors,
        selectedActor,
        isRolling,
        score,
        nexusFound,
        gameOver,
        showInstructions,
        fetchRandomActors,
        onMovieSelect,
        onActorSelect,
        toggleInstructions,
        nexusMovie
    } = useGameBoard()

    if (gameOver || score <= 0) {
        return <GameResult path={gamePath} success={nexusFound} score={score} nexusMovie={nexusMovie} />
    }

    return <Container className='game-board'>
        <Container className='instruction-container'>
            <Title level={2}>Tira los dados para que aparezcan los actores</Title>
            <Container className='instruction-container'>
                <Button className='help-button' onClick={toggleInstructions}>Ayuda</Button>
                {showInstructions && <Instructions />}
            </Container>
        </Container>
        <Button className={`dice-button ${isRolling ? 'rolling' : ''}`} onClick={fetchRandomActors}>
            <img src='/icon/dados.png' alt='Obtener Actores Aleatorios' />
        </Button>
        <Container className='subtitle-container'>
            <Title level={2}>Actores seleccionados</Title>
            <Container className='score'>
                <Title level={3}>Puntuación: {score}</Title>
            </Container>
        </Container>
        <Container className='actors-container'>
            {showActors && actor1 && <ActorCard actor={actor1} onActorSelect={onActorSelect} />}
            {showActors && actor2 && <ActorCard actor={actor2} onActorSelect={onActorSelect} />}
        </Container>
        {selectedMovies.length === 0 && movies.length > 0 && (
            <Container className='movies-list'>
                <Title level={3}>Películas de {selectedActor ? selectedActor.name : ''}</Title>
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id} onClick={() => onMovieSelect(movie)}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                className='movie-poster'
                                defaultSrc='path/to/default-poster.jpg'
                            />
                            {movie.title}
                        </li>
                    ))}
                </ul>
            </Container>
        )}
        {selectedMovies.length > 0 && (
            <MovieCard
                movie={selectedMovies[0]}
                actors={actorsInMovie}
                onActorSelect={onActorSelect}
            />
        )}

    </Container>
}

export default GameBoard