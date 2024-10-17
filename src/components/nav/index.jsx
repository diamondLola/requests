import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div>
       <div className="nav">
      <div className="container">
        <div className="logo">
          <Link to={'/'}><img src="./logo1.png" alt="" /></Link>
        </div>
        <label htmlFor="nav">  <FontAwesomeIcon icon={faBars} /></label>
        <input type="checkbox" id="nav" />
        <ul>
          <li><Link to={'/'}>ART & DESIGN</Link></li>
          <li><Link to={'/'}>NOUVELLES</Link></li>
          <li><Link to={'/'}>À PROPOS</Link></li>
          <li><Link to={'/'}>CONTACT</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
