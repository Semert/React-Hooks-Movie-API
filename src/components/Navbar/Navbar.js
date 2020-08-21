import React, { useEffect, useState } from 'react'
import './Navbar.css'


function Navbar() {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      }
      else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
    <h2 className="nav__name">Semih EFE </h2>
    </div>
  );
}
export default Navbar
