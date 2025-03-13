import React from 'react'
import Container from './common/Container'
import Paragraph from './common/Paragraph'
import Title from './common/Title'
import MovieCard from './MovieCard'
import '../styles/GameResult.scss'

const GameResult = ({ success, score, selectedMovie, actorsInMovie }) => {
    return <Container className='game-result'>
        <Title level={2}>{success ? '¡Ganaste!' : 'Juego Terminado'}</Title>
        {success ? (
            <Container>
                <Paragraph>Puntuación: {score}</Paragraph>
                {score >= 94 && (
                    <Paragraph>¡Felicidades! Encontraste al actor en menos de seis pasos. ¡Eres un maestro del juego "Six Degrees of Movies"!</Paragraph>
                )}
                {selectedMovie && (
                    <Container className='selected-movie'>
                        <Title level={3}>Llegaste al nexo</Title>
                        <MovieCard
                            movie={selectedMovie}
                            actors={actorsInMovie}
                            onActorSelect={() => { }}
                        />
                    </Container>
                )}
            </Container>
        ) : (
            <Paragraph>Puntuación agotada.</Paragraph>
        )}
    </Container>
}

export default GameResult