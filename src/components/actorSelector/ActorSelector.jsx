import React, { useState } from 'react'
import { searchActorByName } from '../../utils/api'

const ActorSelector = ({ onSelect }) => {
    const [actorName, setActorName] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = () => {
        searchActorByName(actorName)
            .then((results) => {
                setSearchResults(results)
            })
            .catch((error) => {
                console.error('Error al buscar el actor:', error)
            })
    }

    const handleSelect = (actor) => {
        onSelect(actor)
        setSearchResults([])
        setActorName('')
    }

    return <div className="actor-selector">
        <input
            type="text"
            value={actorName}
            onChange={(e) => setActorName(e.target.value)}
            placeholder="Nombre del actor"
        />
        <button onClick={handleSearch}>Buscar Actor</button>
        {searchResults.length > 0 && (
            <ul className="search-results">
                {searchResults.map((actor) => (
                    <li key={actor.id} onClick={() => handleSelect(actor)}>
                        {actor.name}
                    </li>
                ))}
            </ul>
        )}
    </div>
}

export default ActorSelector