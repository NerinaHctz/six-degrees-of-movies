import React, { useState } from 'react'
import Instructions from './Instructions'
import GameDescription from './GameDescription'
import Container from './common/Container'
import Button from './common/Button'
import '../styles/Home.scss'

const Home = ({ onStart }) => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleShowInstructions = () => {
        setShowInstructions(true)
    }

    const handleBackToDescription = () => {
        setShowInstructions(false)
    }

    return <Container className='home'>
        {!showInstructions ? (
            <GameDescription onShowInstructions={handleShowInstructions} />
        ) : (
            <>
                <Instructions />
                <Button onClick={handleBackToDescription}>Volver</Button>
            </>
        )}
        <Button onClick={onStart}>Empezar el juego</Button>
    </Container>
}

export default Home