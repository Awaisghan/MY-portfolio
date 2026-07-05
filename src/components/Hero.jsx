import React, { useState, useEffect, useRef } from 'react'
import profileImg from '../assets/home-perfil.png'
import cv from '../assets/Main_CV.pdf'

const words = [
  "Full Stack",
  "Django & DRF",
  "Node js & Express js",
  "SQL Database",
  "PHP Laravel"
]

// Typewriter speeds (ms)
const TYPE_SPEED = 90      // delay per letter while typing
const ERASE_SPEED = 55     // delay per letter while erasing
const PAUSE_AFTER_TYPE = 1400  // pause after fully typed
const PAUSE_AFTER_ERASE = 300  // pause before next word

function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isErasing, setIsErasing] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (!isErasing) {
      // --- TYPING phase ---
      if (displayedText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, TYPE_SPEED)
      } else {
        // Fully typed → pause, then start erasing
        timeoutRef.current = setTimeout(() => {
          setIsErasing(true)
        }, PAUSE_AFTER_TYPE)
      }
    } else {
      // --- ERASING phase ---
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, ERASE_SPEED)
      } else {
        // Fully erased → pause, then move to next word
        timeoutRef.current = setTimeout(() => {
          setIsErasing(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }, PAUSE_AFTER_ERASE)
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayedText, isErasing, wordIndex])

  return (
    <main id="home" className="hero-content">
      {/* Left column: Welcome statement */}
      <div className="text-block-left">
        <span className="sub-title">Hello, I'm</span>
        <h1 className="main-title">
          Awais
          <br />
          Ghani
        </h1>
        <a
          href={cv}
          download="Awais_Ghani_CV.pdf"
          className="hero-resume-btn"
          aria-label="Download Resume"
        >
          <span>Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      {/* Center column: Profile Avatar with glow effect */}
      <div className="avatar-container">
        <div className="avatar-glow"></div>
        <img
          src={profileImg}
          className="avatar-image"
          alt="Awais Ghani Portrait"
        />
      </div>

      {/* Right column: Profession & skills with letter-by-letter typewriter */}
      <div className="text-block-right">
        <span className="sub-title">Creative</span>
        <h1 className="main-title">
          <span className="gradient-text dynamic-word">
            {displayedText}
            <span className="typewriter-cursor">|</span>
          </span>
          Developer
        </h1>
      </div>
    </main>
  )
}

export default Hero

