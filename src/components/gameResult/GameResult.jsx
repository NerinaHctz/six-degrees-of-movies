import React from 'react'

const GameResult = ({ path, success, score }) => {
    return (
        <div className="game-result">
            <h2>{success ? '¡Ganaste!' : 'Juego Terminado'}</h2>
            {score > 0 ? (
                path && path.length > 0 ? (
                    <ul>
                        {path.map((step, index) => (
                            <li key={index}>
                                {step.actor} → {step.movie} → {step.nextActor}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No se encontró un camino.</p>
                )
            ) : (
                <p>Puntuación agotada. No se encontró un camino.</p>
            )}
        </div>
    )
}

export default GameResult