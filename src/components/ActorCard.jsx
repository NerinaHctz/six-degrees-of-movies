import React from 'react'
import '../styles/ActorCard.scss'

const ActorCard = ({ actor, onActorSelect }) => {
    const placeholderImage = '/public/icon/actor.png'

    return <div className='actor-card' onClick={() => onActorSelect(actor)}>
        <img className={`actor-image ${!actor.profile_path ? 'placeholder' : ''}`}
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : placeholderImage}
            alt={actor.name}
            onError={(e) => (e.target.src = placeholderImage)}
        />
        <h3>{actor.name}</h3>
    </div>
}

export default ActorCard