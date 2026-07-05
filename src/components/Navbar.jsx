import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        Awais Ghani
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
