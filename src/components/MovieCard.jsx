import React from 'react'
import Container from './common/Container'
import Title from './common/Title'
import Image from './common/Image'
import '../styles/MovieCard.scss'

const MovieCard = ({ movie, actors, onActorSelect }) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    const defaultPosterUrl = 'path/to/default-poster.jpg'
    const defaultActorUrl = 'path/to/default-actor.jpg'

    return <Container className='movie-card'>
        <Title level={3} className='movie-card__title'>{movie.title}</Title>
        <Image
            src={moviePosterUrl}
            alt={movie.title}
            className='movie-card__poster'
            onError={(e) => e.target.src = defaultPosterUrl}
        />
        <Container className='movie-card__actors'>
            <Title level={4}>Actores en la película:</Title>
            <ul>
                {actors.map((actor) => (
                    <li key={actor.id} onClick={() => onActorSelect(actor)}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                            className='actor-image'
                            onError={(e) => e.target.src = defaultActorUrl}
                        />
                        {actor.name}
                    </li>
                ))}
            </ul>
        </Container>
    </Container>
}

export default MovieCard