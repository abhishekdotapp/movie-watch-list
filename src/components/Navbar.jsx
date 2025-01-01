import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand" >
        <Link to="/" >Movie app</Link>
    </div>
    <div className="navbar-link">
       <Link to="/" className="nav-link">Home</Link>
       <Link to="/favorites" className="nav-link" >Favorites</Link>
    </div>
    </nav>
  )
}

export default Navbar