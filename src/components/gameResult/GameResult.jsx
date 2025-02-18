import React from 'react'

const GameResult = ({ path, success }) => {

    return <div className="game-result">
        <h2>{success ? '¡Ganaste!' : 'Juego Terminado'}</h2>
        <ul>
            {path.map((step, index) => (
                <li key={index}>
                    {step.actor} → {step.movie} → {step.nextActor}
                </li>
            ))}
        </ul>
    </div>
}

export default GameResult