import React from 'react'
import './MovieCard.scss'

const MovieCard = ({ movie, actors, onActorSelect }) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    const defaultPosterUrl = 'path/to/default-poster.jpg'
    const defaultActorUrl = 'path/to/default-actor.jpg'

    return <div className="movie-card">
        <h3 className="movie-card__title">{movie.title}</h3>
        <img
            src={moviePosterUrl}
            alt={movie.title}
            className="movie-card__poster"
            onError={(e) => e.target.src = defaultPosterUrl}
        />
        <div className="movie-card__actors">
            <h4>Actores en la película:</h4>
            <ul>
                {actors.map((actor) => (
                    <li key={actor.id} onClick={() => onActorSelect(actor)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                            className="actor-image"
                            onError={(e) => e.target.src = defaultActorUrl}
                        />
                        {actor.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default MovieCard