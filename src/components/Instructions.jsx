import React from 'react'
import Container from './common/Container'
import Title from './common/Title'
import Button from './common/Button'
import '../styles/Instructions.scss'

const Instructions = ({ onStart }) => {
    return <Container className='instructions'>
        <Title className='instructions-title' level={2}>Instrucciones</Title>
        <ul>
            <li><img src='/icon/dices_white.png' alt='Dados' />Haz clic en los dados para seleccionar dos actores al azar.</li>
            <li><img src='/icon/actress.png' alt='Actriz' />Pulsa en el actor de la izquierda para ver las películas en las que aparece.</li>
            <li><img src='/icon/film.png' alt='Película' />Haz clic en una película de la lista para ver los actores que han actuado en ella.</li>
            <li><img src='/icon/actor.png' alt='Actor' />Haz clic en un actor de la lista para ver sus películas.</li>
            <li><img src='/icon/nexus.png' alt='Nexo' />Encuentra el camino más corto entre el actor de la izquierda y el de la derecha.</li>
            <br />
            <ul>Sistema de puntos:
                <li>* Cada vez que tires los dados la puntuacuión bajará 10 puntos, así que solo podrás tirar los dados un número limitado de veces.</li>
                <li>* Cada vez que pulses en una tarjeta de actor o de película la puntuación bajará 1 punto.</li>
            </ul>
        </ul>
        <Button className='instructions-button' onClick={onStart}>Jugar</Button>
    </Container>
}

export default Instructions