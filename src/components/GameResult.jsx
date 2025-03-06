import React from 'react'
import Container from './common/Container'
import Title from './common/Title'
import '../styles/GameResult.scss'

const GameResult = ({ path, success, score }) => {

    return <Container className='game-result'>
        <Title level={2}>{success ? '¡Ganaste!' : 'Juego Terminado'}</Title>
        {success ? (
            <Container>
                <p>Puntuación: {score}</p>
                {path && path.length > 0 && (
                    <ul>
                        {path.map((step, index) => (
                            <li key={index}>
                                {step.actor} → {step.movie} → {step.nextActor}
                            </li>
                        ))}
                    </ul>
                )}
                {score >= 94 && (
                    <p>¡Felicidades! Encontraste al actor en menos de seis pasos. ¡Eres un maestro del juego "Six Degrees of Movies"!</p>
                )}
            </Container>
        ) : (
            <p>Puntuación agotada.</p>
        )}
    </Container>
}

export default GameResult