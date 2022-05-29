import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Beer Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" exact className='nav-link'>Accueil</NavLink>
              <NavLink to="/bieres" exact className='nav-link'>Les Bieres</NavLink>
              <NavLink to="/ShoppingCart" exact className='nav-link'>Panier</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
