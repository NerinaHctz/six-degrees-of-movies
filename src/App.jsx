import React, { useState } from 'react'
import Home from './components/Home'
import GameBoard from './components/GameBoard'
import Container from './components/common/Container'

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true)
  };

  return <Container className='app'>
    {isGameStarted ? <GameBoard /> : <Home onStart={handleStartGame} />}
  </Container>
}

export default App