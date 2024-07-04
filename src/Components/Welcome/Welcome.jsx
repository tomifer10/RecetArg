import React from 'react'
import './welcome.css' 
import { Link } from 'react-router-dom'


function Welcome() {
  return (
 <div class="container-fluid welcome-container">
        <div class="row align-items-center">
            <div class="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                <img src="src/assets/welcomate.webp" alt="Welcome Image" class="img-fluid welcome-image" />
            </div>
            <div class="col-md-6 d-flex justify-content-center">
                <div class="text-center welcome-text">
                    <h2>¡Bienvenid@!</h2>
                    <p>Porque tod@s nos antojamos entre cebada y cebada...</p>
                    <p>Todas las recetas de los mejores acompañantes del mejor acompañante</p>
                    <Link to='/recipes'>A ver las recetas !</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome