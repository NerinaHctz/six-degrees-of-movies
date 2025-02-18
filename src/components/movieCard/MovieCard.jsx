import React from 'react'

const MovieCard = ({ movie, actors, onActorSelect }) => {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <ul>
                {actors.map((actor) => (
                    <li key={actor.id} onClick={() => onActorSelect(actor)}>
                        {actor.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieCard