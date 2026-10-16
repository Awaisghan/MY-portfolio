import React, { useEffect, useRef, useState } from 'react'

import p1 from '../assets/projects-1.png'
import p2 from '../assets/projects-2.png'
import p3 from '../assets/projects-3.png'
import p4 from '../assets/projects-4.png'
import p5 from '../assets/projects-5.png'
import p6 from '../assets/projects-6.png'
import p7 from '../assets/projects-7.png'

const projects = [
  {
    num: '01',
    category: 'Full-Stack',
    title: 'Pycode Data Science Company',
    desc: 'A sleek corporate website for a UK-based data science firm, built to convert visitors into clients. Features project showcases, service breakdowns, and a modern UI that communicates expertise in machine learning, AI, and data analytics.',
    img: p1,
    link: 'https://www.pycode.co.uk/',
  },
  {
    num: '02',
    category: 'SaaS / AI',
    title: 'RankPartner — SEO Tool',
    desc: 'A full-featured SaaS platform for marketing agencies and freelancers. Delivers AI-powered keyword tracking, competitor analysis, and automated content optimization — all within a multi-client dashboard designed for scalable SEO management.',
    img: p2,
    link: 'https://rankpartner.io/',
  },
  {
    num: '03',
    category: 'E-Commerce',
    title: 'Shopping Store',
    desc: 'A responsive e-commerce storefront with a smooth product browsing experience, cart management, and secure checkout flow. Designed with performance and conversion in mind, delivering a polished shopping experience across all devices.',
    img: p4,
    link: 'https://e-commerce-website-orpin-zeta-30.vercel.app/',
  },
  {
    num: '04',
    category: 'E-Commerce',
    title: 'Shoes Mart — Footwear Store',
    desc: 'A dedicated online footwear store featuring category filtering, product detail pages, and a streamlined purchasing flow. Built with a clean, brand-forward UI that keeps the focus on the products and drives user engagement.',
    img: p3,
    link: 'https://shoes-store-beryl.vercel.app/',
  },
  {
    num: '05',
    category: 'Full-Stack',
    title: 'Juice Land — Fruit Store',
    desc: 'A vibrant e-commerce platform for a fresh juice and fruit brand. Includes product listings, an intuitive cart system, and a visually rich storefront designed to reflect the freshness and energy of the brand identity.',
    img: p5,
    link: 'https://juicesisland.pk/',
  },
  {
    num: '06',
    category: 'Full-Stack',
    title: 'Northbound Digital — Real Estate',
    desc: 'A professional real estate web platform for a UK-based digital agency. Showcases property listings and agency services with a clean, trust-building design focused on generating leads and establishing authority in the market.',
    img: p6,
    link: 'https://northbounddigital.dev/',
  },
  {
    num: '07',
    category: 'Full-Stack',
    title: 'Aurora Sports Therapy',
    desc: 'A professional service website for a UK sports therapy clinic. Presents treatments, therapist profiles, and booking information in a calming, credible layout — helping clients easily find the care they need.',
    img: p7,
    link: 'https://aurorasportstherapy.co.uk/',
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
            <a
              key={proj.num}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
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

              <p className="proj-desc">{proj.desc}</p>

              {/* image */}
              <div className="proj-img-wrap">
                <img src={proj.img} alt={proj.title} className="proj-img" />
                <div className="proj-img-overlay" />
                {/* link icon overlay */}
                <div className="proj-link-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
            </a>
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
