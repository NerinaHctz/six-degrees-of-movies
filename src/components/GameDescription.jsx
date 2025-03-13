import React from 'react'
import Container from './common/Container'
import Title from './common/Title'
import Button from './common/Button'
import Paragraph from './common/Paragraph'
import '../styles/GameDescription.scss'

const GameDescription = ({ onShowInstructions }) => {
    return <Container className='game-description'>
        <Title level={1} className='game-title'>Six Degrees of Movies</Title>
        <Paragraph>
            <strong>¿Qué es "Six Degrees of Movies"?</strong><br />
            ¿Alguna vez te has preguntado cuán conectado está el mundo del cine? "Six Degrees of Movies" se basa en la teoría de que cualquier actor puede estar conectado a cualquier otro actor a través de una cadena de películas en las que han actuado juntos, ¡con no más de seis pasos!
            <br /><br />
            Imagina que estás en una fiesta de Hollywood y quieres saber cómo Tom Hanks está conectado con Emma Stone. ¡Este juego te ayudará a descubrirlo! El objetivo es encontrar la conexión más corta entre dos actores seleccionados al azar.
        </Paragraph>
        <Paragraph>¿En qué consiste el juego?</Paragraph>
        <Paragraph>El juego consiste en conectar a los dos actores/actrices que aparecen en la pantalla a través de las películas que han hecho en el mínimo de pasos posibles.</Paragraph>
        <Button onClick={onShowInstructions}>Ver instrucciones</Button>
    </Container>
}

export default GameDescription