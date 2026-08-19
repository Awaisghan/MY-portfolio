import React, { useEffect, useRef, useState } from 'react'
import aboutImg from '../assets/home-perfil.png'
import cv from '../assets/Main_CV.pdf'

// ── Animated counter hook ──────────────────────────────────────────────
function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

// ── Stats data ─────────────────────────────────────────────────────────
const stats = [

  { label: 'Happy Clients', value: 20, suffix: '+' },
  { label: 'Projects Done', value: 25, suffix: '+' },
  { label: 'Years Experience', value: 2, suffix: '+' },
]

export default function About() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // IntersectionObserver — threshold 0.15 so it fires earlier
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Individual counters — start when visible
  const c0 = useCounter(stats[0].value, 1800, visible)
  const c1 = useCounter(stats[1].value, 1800, visible)
  const c2 = useCounter(stats[2].value, 1800, visible)
  const counts = [c0, c1, c2]

  return (
    <section id="about" ref={sectionRef} className="about-section">

      {/* ── Left: Photo — slides in from LEFT ── */}
      <div className={`about-image-wrap ${visible ? 'about-img-visible' : ''}`}>
        <div className="about-img-glow" />
        <img
          src={aboutImg}
          alt="Awais Ghani — About"
          className="about-img"
        />
      </div>

      {/* ── Right: Content — slides in from RIGHT ── */}
      <div className={`about-content ${visible ? 'about-content-visible' : ''}`}>

        <span className="about-label">Creativity</span>
        <h2 className="about-heading">
          Is My <span className="about-heading-white">Passion</span>
        </h2>

      <p className="about-desc">
  I'm a{' '}
  <span className="about-highlight">Full-Stack Developer</span> with a
  background in Computer Science from the{' '}
  <span className="about-highlight">University of Peshawar</span>. Since
  2024, I've delivered{' '}
  <span className="about-highlight">25+ production-ready web</span> and{' '}
  <span className="about-highlight">AI-integrated applications</span> for{' '}
  <span className="about-highlight">20+ clients</span>.

  I specialize in building scalable, reliable, and user-focused solutions,
  taking projects from initial requirements to successful deployment. My
  technical expertise includes the{' '}
  <span className="about-highlight">MERN stack, Django &amp; Laravel</span>,
  along with applied machine learning experience in{' '}
  <span className="about-highlight">
    computer vision &amp; predictive analytics
  </span>
  . With a strong focus on understanding business requirements and delivering
  real-world results, I help clients turn their ideas into functional,
  high-quality software.
</p>

        {/* ── Stats counters ── */}
        <div className="about-stats">
          {stats.map((stat, i) => (
            <div className="about-stat-item" key={stat.label}>
              <span className="about-stat-number">
                {counts[i]}
                <span className="about-stat-suffix">{stat.suffix}</span>
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Resume Button ── */}
        <a
          href={cv}
          download="Awais_Ghani_CV.pdf"
          className="about-resume-btn"
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
    </section>
  )
}
