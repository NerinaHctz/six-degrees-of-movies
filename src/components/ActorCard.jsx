import React from 'react'
import '../styles/ActorCard.scss'

const ActorCard = ({ actor, onActorSelect }) => {

    return <div className='actor-card' onClick={() => onActorSelect(actor)}>
        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
        <h3>{actor.name}</h3>
    </div>
}

export default ActorCard