import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return <>
  
  <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container p-2">
    <NavLink className="navbar-brand text-white fs-3 fw-bold" to={'/'}>START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold" aria-current="page" to={'about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-bold" aria-current="page" to={'portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-bold" aria-current="page" to={'contact'}>CONTACT</NavLink>
        </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>

  </>
}
