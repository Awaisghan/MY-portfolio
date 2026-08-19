import React, { useEffect, useRef, useState } from 'react'

import p1 from '../assets/projects-1.png'
import p2 from '../assets/projects-2.png'
import p3 from '../assets/projects-3.png'
import p4 from '../assets/projects-4.png'
import p5 from '../assets/projects-5.png'

const projects = [
  {
    num: '01',
    category: 'AI / Web',
    title: 'AuraLeathers — AI Jacket Builder',
    tech: 'React · Three.js · MediaPipe · Laravel · Docker · Android WebView',
    desc: 'AI-powered 3D product customizer with real-time AR fitting and a native Android companion app.',
    img: p1,
  },
  {
    num: '02',
    category: 'Full-Stack',
    title: 'Healthify — Doctor Appointments',
    tech: 'Python · Django · PostgreSQL · RBAC',
    desc: 'Multi-role appointment system (Patient / Doctor / Admin) with symptom checker and payment flow.',
    img: p5,
    
  },
  {
    num: '03',
    category: 'Full-Stack',
    title: 'AgroShield Store',
    tech: 'React · Node.js · Express · MongoDB · TypeScript',
    desc: 'AgriTech e-commerce marketplace with role-based views and secure JWT authentication.',
    img: p4,
    
  },
  {
    num: '04',
    category: 'AI / Web',
    title: 'Sales Prediction System',
    tech: 'Python · Django · scikit-learn · Random Forest · Data Viz',
    desc: 'Django web app that forecasts product sales from uploaded datasets with interactive dashboards.',
    img: p3,
  },
  {
    num: '05',
    category: 'AI / Desktop',
    title: 'FruitVision AI',
    tech: 'Python · TensorFlow · VGG16 · Tkinter · SQLite',
    desc: 'Desktop app using VGG16 transfer learning to classify Fresh vs. Rotten fruit with multi-user auth.',
    img: p2,
    
  },
  
  
]

export default function Projects() {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const [visible, setVisible] = useState(false)
  // track which cards are in view inside the horizontal scroll track
  const [visibleCards, setVisibleCards] = useState([])

  // ── Section enter observer (heading reveal) ──────────────
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // ── Per-card IntersectionObserver inside horizontal track ─
  useEffect(() => {
    const cards = scrollRef.current?.querySelectorAll('.proj-card')
    if (!cards) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx)
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            )
          }
        })
      },
      {
        root: scrollRef.current,   // observe inside the scroll container
        threshold: 0.25,
      }
    )
    cards.forEach((card) => obs.observe(card))
    return () => obs.disconnect()
  }, [visible]) // re-run after section becomes visible

  // ── Arrow button scroll helpers ───────────────────────────
  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section id="projects" ref={sectionRef} className="projects-section">

      {/* ── Heading ── */}
      <div className={`projects-heading-wrap ${visible ? 'proj-head-visible' : ''}`}>
        <h2 className="projects-heading">I Make Incredible</h2>
        <span className="projects-heading-accent">Projects</span>
      </div>

      {/* ── Scroll hint + arrow buttons ── */}
      <div className={`proj-scroll-controls ${visible ? 'proj-head-visible' : ''}`}>
        <span className="proj-scroll-hint">Swipe or scroll →</span>
        <div className="proj-arrows">
          <button className="proj-arrow" onClick={() => scrollBy(-1)} aria-label="Scroll left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="proj-arrow" onClick={() => scrollBy(1)} aria-label="Scroll right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>

      {/* ── Horizontal scroll track ── */}
      <div className="proj-track-wrap">
        {/* left fade edge */}
        <div className="proj-edge proj-edge-left" />
        {/* right fade edge */}
        <div className="proj-edge proj-edge-right" />

        <div className="proj-track" ref={scrollRef}>
          {projects.map((proj, i) => (
            <div
              key={proj.num}
              data-idx={i}
              className={`proj-card ${visibleCards.includes(i) ? 'proj-card-visible' : ''}`}
              style={{ transitionDelay: visibleCards.includes(i) ? `${i * 0.08}s` : '0s' }}
            >
              {/* top row */}
              <div className="proj-card-top">
                <span className="proj-num">{proj.num}</span>
                <span className="proj-category">{proj.category}</span>
              </div>

              <h3 className="proj-title">{proj.title}</h3>

              <p className="proj-tech-label">Technologies used</p>
              <p className="proj-tech">{proj.tech}</p>

              <p className="proj-desc">{proj.desc}</p>

              {/* image */}
              <div className="proj-img-wrap">
                <img src={proj.img} alt={proj.title} className="proj-img" />
                <div className="proj-img-overlay" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GitHub CTA ── */}
      <div className={`proj-cta ${visible ? 'proj-cta-visible' : ''}`}>
        <p className="proj-cta-text">
          10+ additional client &amp; FYP projects available on GitHub
        </p>
        <a
          href="https://github.com/Awaisghan"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-cta-btn"
        >
          <span>View All on GitHub</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
