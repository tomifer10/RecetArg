import React from 'react'
import './allrecipes.css'
import { Link } from 'react-router-dom'

function AllRecipes() {
  return (
    <div className='container-custom cont'>
      <h1 className='text-center fw-medium rec-title'>Recetas</h1><br />
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card ">
      <Link className="nav-link" to="/Pastafrola">
        <img src="src\assets\pastafrolawebp.webp" className="card-img-top i-size" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Pastafrola</h5>
          <p className="fa-regular fa-clock card-text rec-icons"> 45 </p>
        </div>
        </Link>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <Link class="nav-link" to="/Chipa">
        <img src="src\assets\chipacitos.webp" className="card-img-top i-size" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Chipá</h5>
          <p className="fa-regular fa-clock card-text rec-icons"> 30 </p>
        </div>
        </Link>
      </div>
    </div>
    <div class="col">
      <div className="card">
      <Link class="nav-link" to="/TortaFrita">
        <img src="src\assets\tortasfritas.webp" className="card-img-top i-size" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Tortas fritas</h5>
          <p className="fa-regular fa-clock card-text rec-icons"> 30 </p>
        </div>
        </Link>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="src\assets\pastelitos.webp" clasName="card-img-top i-size" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Pastelitos</h5>
          <p className="fa-regular fa-clock card-text rec-icons"> 60 </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default AllRecipes