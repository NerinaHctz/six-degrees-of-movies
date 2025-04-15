import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import Container from './common/Container'
import Paragraph from './common/Paragraph'
import Title from './common/Title'
import MovieCard from './MovieCard'
import '../styles/GameResult.scss'

const GameResult = ({ success, score, selectedMovie, actorsInMovie, actor2 }) => {
    console.log('actor2 en GameResult:', actor2)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        if (success) {
            const firework = () => {
                const duration = 2 * 1000
                const animationEnd = Date.now() + duration
                const colors = ['#9900cc', '#56d0d6', '#ff7300', '#F4478D', '#683d8e', '#D4D4D4']

                const frame = () => {
                    confetti({
                        particleCount: 50,
                        angle: Math.random() * 360,
                        spread: 55,
                        origin: {
                            x: Math.random(),
                            y: Math.random() * 0.5,
                        },
                        colors: colors,
                    })

                    if (Date.now() < animationEnd) {
                        requestAnimationFrame(frame)
                    }
                }

                frame()
            }

            firework()
        }
    }, [success])

    return <Container className='game-result'>
        <Container className='game-board'>
            <Title level={1} className='game-title'>Six Degrees of Movies</Title>
            <Title level={2}>{success ? '¡Encontraste el nexo!' : 'Juego Terminado'}</Title>
            {success ? (
                <Container>
                    <Paragraph className='final-score'>Puntuación: {score}</Paragraph>
                    {score >= 94 && (
                        <Paragraph>¡Felicidades! Encontraste al actor en menos de seis pasos. ¡Eres un maestro del juego "Six Degrees of Movies"!</Paragraph>
                    )}
                    {selectedMovie && (
                        <Container className='selected-movie'>
                            <MovieCard
                                movie={selectedMovie}
                                actors={actorsInMovie}
                                onActorSelect={() => { }}
                            />
                        </Container>
                    )}
                    {actorsInMovie && actorsInMovie.length > 0 && (
                        <Container className="actors-list">
                            <Title level={3}>Actores en la película:</Title>
                            <ul>
                                {actorsInMovie.map((actor) => (
                                    <li
                                        key={actor.id}
                                        className={`actor-item ${actor.id === actor2?.id ? 'highlight' : ''}`}
                                    >
                                        <img
                                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : '/icon/actor.png'}
                                            alt={actor.name}
                                            className="actor-image"
                                        />
                                        <Paragraph>{actor.name}</Paragraph>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    )}
                </Container>
            ) : (
                <Paragraph>Puntuación agotada.</Paragraph>
            )}
        </Container>
    </Container>
}

export default GameResult