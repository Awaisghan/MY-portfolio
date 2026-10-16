import React, { useEffect, useRef, useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────
const experience = [
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Self-Employed — Remote Clients',
    year: '2024',
    period: 'Present',
    desc: 'Working independently as a freelance developer with 2+ years of experience, building and delivering live production websites for clients across e-commerce, real estate, data science, healthcare, and service industries. Handle the complete project lifecycle — from client meetings and system design through to development, deployment, and handover.',
  },
  {
    title: 'FYP Developer — Student Projects',
    company: 'Freelance — University Students (Remote)',
    year: '2024',
    period: '2025',
    desc: 'Developed complete Final Year Project systems for university students across Pakistan. Built full-stack applications with AI/ML modules including computer vision (VGG16 fruit classifier) and predictive analytics (Random Forest sales prediction) — handling architecture, database design, and deployment end-to-end.',
  },
]

const education = [
  {
    title: 'BS Computer Science',
    company: 'University of Peshawar',
    year: '2021',
    period: '2025',
    desc: 'Completed a 4-year Bachelor\'s degree in Computer Science. Covered core CS fundamentals including data structures, algorithms, databases, software engineering, and applied machine learning. Graduated with hands-on research and real-world project experience.',
  },
  {
    title: 'FSc Pre-Engineering',
    company: 'Board of Intermediate & Secondary Education, Peshawar',
    year: '2019',
    period: '2021',
    desc: 'Completed FSc Pre-Engineering with strong performance in mathematics and physics. Built an analytical foundation that directly supports my approach to software architecture, problem solving, and system design.',
  },
  {
    title: 'Matriculation (Science)',
    company: 'Board of Secondary Education, Peshawar',
    year: '2017',
    period: '2019',
    desc: 'Completed SSC in Science with distinction. Developed an early passion for computing and technology, which set the foundation for pursuing a career in software development.',
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
