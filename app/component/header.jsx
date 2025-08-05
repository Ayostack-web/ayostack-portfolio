// app/components/Header.jsx
"use client"

import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.getElementById("nav").classList.toggle("show")
    document.querySelector(".hamburger").classList.toggle("rotate")
  }

  const toggleTheme = () => {
    document.body.classList.toggle("dark")
  }

  return (
    <header>
      <div id="shiny-text" className="logo">AyoStack</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav id="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="toggle-btn" onClick={toggleTheme}><big>🌓</big></button>
    </header>
  )
}
