import React, { useState } from 'react'
import Home from './components/home/Home'
import GameBoard from './components/gameBoard/GameBoard'

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true)
  };

  return (
    <div className="app">
      {isGameStarted ? <GameBoard /> : <Home onStart={handleStartGame} />}
    </div>
  )
}

export default App