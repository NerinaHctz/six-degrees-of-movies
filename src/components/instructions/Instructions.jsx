import React from 'react'
import './Instructions.scss'

const Instructions = () => {
    return <div className='instructions'>
        <h2>Instrucciones</h2>
        <ul>
            <li>Haz clic en los dados para seleccionar dos actores al azar.</li>
            <li>Pulsa en el actor de la izquierda para ver las películas en las que aparece.</li>
            <li>Haz clic en una película de la lista para ver los actores que han actuado en ella.</li>
            <li>Haz clic en un actor de la lista para ver sus películas.</li>
            <li>Encuentra el camino más corto entre el actor de la izquierda y el de la derecha.</li>
        </ul>
    </div>
}

export default Instructions