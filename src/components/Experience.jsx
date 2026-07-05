import React, { useEffect, useRef, useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────
const experience = [
  {
    title: 'Full-Stack & AI/ML Developer',
    company: 'Freelance — Direct Clients (Remote)',
    year: '2024',
    period: 'Present',
    desc: 'Delivered 10+ production-grade web and AI-integrated applications for 15+ direct clients across e-commerce, healthcare, agritech, and retail domains. Owned the full project lifecycle independently — requirements gathering, system design, development, deployment, and client communication.',
  },
  {
    title: 'Final Year Project Developer',
    company: 'University Clients — FYP Systems',
    year: '2024',
    period: '2025',
    desc: 'Designed and developed complete FYP systems for university clients covering full-stack architecture, database design, and AI/ML integration including computer vision and predictive analytics modules.',
  },
  {
    title: 'AI/ML Research Developer',
    company: 'Published Researcher',
    year: '2023',
    period: '2024',
    desc: 'Applied machine learning for computer vision and predictive analytics use cases. Built solutions spanning React/Three.js, Django, Laravel, and the MERN stack with published research outcomes.',
  },
]

const education = [
  {
    title: 'BS Computer Science',
    company: 'University of Peshawar',
    year: '2022',
    period: 'Present',
    desc: 'Currently in 7th Semester. Studying core CS fundamentals, data structures, algorithms, databases, software engineering, and applied machine learning. Active in research and project work.',
  },
  {
    title: 'FSc Pre-Engineering',
    company: 'Board of Intermediate & Secondary Education',
    year: '2020',
    period: '2022',
    desc: 'Completed FSc Pre-Engineering with distinction. Built a strong foundation in mathematics, physics, and analytical problem solving that drives my approach to software architecture.',
  },
  {
    title: 'Matriculation (Science)',
    company: 'Board of Secondary Education',
    year: '2018',
    period: '2020',
    desc: 'Completed Secondary School Certificate in Science. Developed early interest in computing and technology during this period.',
  },
]

// ── Component ─────────────────────────────────────────────────────────
export default function Experience() {
  const sectionRef = useRef(null)
  const [visible,  setVisible]  = useState(false)
  const [activeTab, setActiveTab] = useState('experience') // 'experience' | 'education'
  const [animating, setAnimating] = useState(false)

  // section scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // tab switch with quick fade-out/in
  const switchTab = (tab) => {
    if (tab === activeTab) return
    setAnimating(true)
    setTimeout(() => {
      setActiveTab(tab)
      setAnimating(false)
    }, 260)
  }

  const data = activeTab === 'experience' ? experience : education

  return (
    <section id="experience" ref={sectionRef} className="exp-section">

      {/* ── Heading ── */}
      <div className={`exp-heading-wrap ${visible ? 'exp-visible' : ''}`}>
        <span className="exp-heading-accent">My Work</span>
        <h2 className="exp-heading">Experience</h2>
      </div>

      {/* ── Tab switcher ── */}
      <div className={`exp-tabs ${visible ? 'exp-visible' : ''}`}
           style={{ transitionDelay: '0.15s' }}>
        <button
          id="tab-experience"
          className={`exp-tab ${activeTab === 'experience' ? 'exp-tab-active' : ''}`}
          onClick={() => switchTab('experience')}
        >
          {/* briefcase icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          </svg>
          Experience
        </button>
        <button
          id="tab-education"
          className={`exp-tab ${activeTab === 'education' ? 'exp-tab-active' : ''}`}
          onClick={() => switchTab('education')}
        >
          {/* graduation cap icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          Education
        </button>
      </div>

      {/* ── Timeline ── */}
      <div className={`exp-timeline ${animating ? 'exp-timeline-hidden' : ''}`}>

        {/* vertical center line */}
        <div className={`exp-center-line ${visible ? 'exp-line-grow' : ''}`} />

        {data.map((item, i) => (
          <div
            key={`${activeTab}-${i}`}
            className={`exp-row ${visible ? 'exp-row-visible' : ''}`}
            style={{ transitionDelay: visible ? `${0.3 + i * 0.15}s` : '0s' }}
          >
            {/* left: title + company */}
            <div className="exp-left">
              <h3 className="exp-role">{item.title}</h3>
              <span className="exp-company">{item.company}</span>
            </div>

            {/* center: year dot + year text */}
            <div className="exp-center">
              <div className="exp-dot" />
              <div className="exp-year-wrap">
                <span className="exp-year">{item.year}</span>
                {item.period && <span className="exp-period">— {item.period}</span>}
              </div>
            </div>

            {/* right: description */}
            <div className="exp-right">
              <p className="exp-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
