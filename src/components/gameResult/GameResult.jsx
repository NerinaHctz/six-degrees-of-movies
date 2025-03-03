import React from 'react'

const GameResult = ({ path, success, score }) => {

    return <div className='game-result'>
        <h2>{success ? '¡Ganaste!' : 'Juego Terminado'}</h2>
        {success ? (
            <div>
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
            </div>
        ) : (
            <p>Puntuación agotada.</p>
        )}
    </div>
}

export default GameResult