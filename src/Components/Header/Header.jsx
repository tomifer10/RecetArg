import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary navi">
    <div class="container-fluid navi">
      <img src="src\assets\mate.svg" alt="Bootstrap" width="30" height="30" />
      <Link className="navbar-brand" to="/" id='nav-title'>RecetArg</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/recipes">Recetas </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/tradition">Costumbres</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Header