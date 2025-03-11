import React, { useState } from 'react'
import Instructions from './Instructions'
import GameDescription from './GameDescription'
import Container from './common/Container'
import '../styles/Home.scss'

const Home = ({ onStart }) => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleShowInstructions = () => {
        setShowInstructions(true)
    }

    return <Container className='home'>
        {!showInstructions ? (
            <GameDescription onShowInstructions={handleShowInstructions} showInstructions={showInstructions} onStart={onStart} />
        ) : (
            <>
                <Instructions onStart={onStart} />
            </>
        )}
    </Container>
}

export default Home