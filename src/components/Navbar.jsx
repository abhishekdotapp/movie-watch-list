import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand" >
        <Link to="/" >Cinema app</Link>
    </div>
    <div className="navbar-link">
       <Link to="/" className="nav-link">Home</Link>
       <Link to="/watch-list" className="nav-link" >Watch List✅</Link>
       <Link to="/seen" className="nav-link" >Seen Movies📺</Link>
    </div>
    </nav>
  )
}

export default Navbar
