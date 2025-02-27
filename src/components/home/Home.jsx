import React from 'react'
import './Home.scss'

const Home = ({ onStart }) => {
    return (
        <div className="home">
            <h1>Bienvenido a Six Degrees of Movies</h1>
            <p>
                <strong>¿Qué es "Six Degrees of Movies"?</strong><br />
                ¿Alguna vez te has preguntado cuán conectado está el mundo del cine? "Six Degrees of Movies" se basa en la fascinante teoría de que cualquier actor puede estar conectado a cualquier otro actor a través de una cadena de películas en las que han actuado juntos, ¡con no más de seis pasos!
                <br /><br />
                Imagina que estás en una fiesta de Hollywood y quieres saber cómo Tom Hanks está conectado con Emma Stone. ¡Este juego te ayudará a descubrirlo! El objetivo es encontrar la conexión más corta entre dos actores seleccionados al azar.
            </p>
            <p>Instrucciones del juego:</p>
            <ul>
                <li>Haz clic en el botón para seleccionar dos actores al azar.</li>
                <li>Explora las películas en las que han actuado para encontrar una conexión.</li>
                <li>Haz clic en un actor para ver sus películas.</li>
                <li>Haz clic en una película para ver los actores que han actuado en ella.</li>
                <li>Encuentra el camino más corto entre los dos actores seleccionados.</li>
            </ul>
            <button onClick={onStart}>Empezar el juego</button>
        </div>
    )
}

export default Home