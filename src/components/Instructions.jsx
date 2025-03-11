import React from 'react'
import Container from './common/Container'
import Title from './common/Title'
import Button from './common/Button'
import '../styles/Instructions.scss'

const Instructions = ({ onStart }) => {
    return <Container className='instructions'>
        <Title level={2}>Instrucciones</Title>
        <ul>
            <li>Haz clic en los dados para seleccionar dos actores al azar.</li>
            <li>Pulsa en el actor de la izquierda para ver las películas en las que aparece.</li>
            <li>Haz clic en una película de la lista para ver los actores que han actuado en ella.</li>
            <li>Haz clic en un actor de la lista para ver sus películas.</li>
            <li>Encuentra el camino más corto entre el actor de la izquierda y el de la derecha.</li>
        </ul>
        <Button className='instructions-button' onClick={onStart}>Jugar</Button>
    </Container>
}

export default Instructions