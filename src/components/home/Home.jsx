import React from 'react'
import './Home.scss'

const Home = ({ onStart }) => {

    return <div className="home">
        <h1>Bienvenido a Six Degrees of Movies</h1>
        <p>
            <strong>¿Qué es "Six Degrees of Movies"?</strong><br />
            ¿Alguna vez te has preguntado cuán conectado está el mundo del cine? "Six Degrees of Movies" se basa en la teoría de que cualquier actor puede estar conectado a cualquier otro actor a través de una cadena de películas en las que han actuado juntos, ¡con no más de seis pasos!
            <br /><br />
            Imagina que estás en una fiesta de Hollywood y quieres saber cómo Tom Hanks está conectado con Emma Stone. ¡Este juego te ayudará a descubrirlo! El objetivo es encontrar la conexión más corta entre dos actores seleccionados al azar.
        </p>

        <p>¿En qué consiste el juego?</p>
        <p>El juego consiste en conectar a los dos actores/actrices que aparecen en la pantalla a través de las películas que han hecho en el mínimo de pasos posibles.</p>
        <p>Instrucciones:</p>
        <ul>
            <li>Haz clic en los dados para seleccionar dos actores al azar.</li>
            <li>Pulsa en el actor de la izquierda para ver las películas en las que aparece.</li>
            <li>Haz clic en una película de la lista para ver los actores que han actuado en ella.</li>
            <li>Haz clic en un actor de la lista para ver sus películas.</li>
            <li>Encuentra el camino más corto entre el actor de la izquierda y el de la derecha.</li>
        </ul>
        <button onClick={onStart}>Empezar el juego</button>
    </div>
}

export default Home