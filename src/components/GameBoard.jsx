import React from 'react'
import ActorCard from './ActorCard'
import MovieCard from './MovieCard'
import GameResult from './GameResult'
import useGameBoard from '../hooks/useGameBoard'
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
        showActors,
        selectedActor,
        isRolling,
        score,
        nexusFound,
        gameOver,
        fetchRandomActors,
        onMovieSelect,
        onActorSelect,
    } = useGameBoard()

    const placeholderImage = '/public/icon/film.png'

    if (gameOver || score <= 0) return <GameResult success={nexusFound} score={score} selectedMovie={selectedMovies[0]} actorsInMovie={actorsInMovie} actor2={actor2} />

    return <Container className='game-page'>
        <Container className='game-board'>
            <Title level={1} className='game-title'>Six Degrees of Movies</Title>
            <Container className='instruction-container'>
                <Title level={2} className='game-instructions'>Tira los dados para que aparezcan los actores</Title>
            </Container>
            <Button className={`dice-button ${isRolling ? 'rolling' : ''}`} onClick={fetchRandomActors}>
                <img src='/icon/dices_white.png' alt='Obtener Actores Aleatorios' />
            </Button>
            <Container className='subtitle-container'>
                <Title className='subtitle-title' level={2}>Actores seleccionados</Title>
                <Container className='score'>
                    <Title level={3}>Puntuación: <span className='score'>{score}</span></Title>
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
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : placeholderImage} alt={movie.title}
                                    className={`movie-card__poster ${!movie.poster_path ? 'placeholder' : ''}`}
                                    onError={(e) => (e.target.src = placeholderImage)}
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
    </Container>
}

export default GameBoard