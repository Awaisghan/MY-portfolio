import React, { useEffect, useRef, useState } from 'react'

// ── Services data ─────────────────────────────────────────────────────
const services = [
  {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    desc: 'End-to-end web applications built with modern stacks. From REST APIs and databases to responsive, pixel-perfect frontends — I own the full lifecycle independently.',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript', 'REST API', 'JWT Auth'],
  },
  {
    id: 'django',
    title: 'Django & Laravel',
    desc: 'Production-grade backend systems using Python Django/DRF and PHP Laravel. Role-based access, custom admin panels, payment flows, and robust REST APIs.',
    skills: ['Django', 'DRF', 'Laravel', 'PHP', 'Python', 'PostgreSQL', 'SQLite', 'Docker', 'Linux Server'],
  },
  {
    id: 'aiml',
    title: 'AI / ML Engineering',
    desc: 'Applied machine learning for real-world use cases — computer vision, predictive analytics, and AI-powered product features integrated directly into web and desktop apps.',
    skills: ['Python', 'TensorFlow', 'scikit-learn', 'VGG16', 'MediaPipe', 'OpenCV', 'Random Forest', 'Data Viz'],
  },
  {
    id: 'threed',
    title: '3D & Interactive Web',
    desc: 'Immersive 3D product configurators and AR fitting experiences using Three.js and MediaPipe — turning ordinary web pages into engaging, interactive showcases.',
    skills: ['Three.js', 'React', 'MediaPipe', 'WebGL', 'GSAP', 'AR/VR Web', 'Blender (basic)'],
  },
  {
    id: 'mobile',
    title: 'Android & Mobile',
    desc: 'Native Android WebView applications that wrap web experiences into performant mobile apps — combined with backend APIs built specifically for mobile consumption.',
    skills: ['Android WebView', 'Java', 'REST API', 'Laravel Backend', 'React Native (basic)', 'Firebase'],
  },
  {
    id: 'fyp',
    title: 'FYP & Research Projects',
    desc: 'Full-stack architecture and implementation for Final Year Projects — system design, database modelling, UI, AI modules, and documentation for university clients.',
    skills: ['System Design', 'Full-Stack', 'ML Integration', 'Database Design', 'Research', 'Documentation'],
  },
]

// ── Component ─────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef(null)
  const [visible,  setVisible]  = useState(false)
  // which card is currently expanded (null = none)
  const [expanded, setExpanded] = useState('fullstack')

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const toggle = (id) => setExpanded(prev => prev === id ? null : id)

  return (
    <section id="services" ref={sectionRef} className="srv-section">

      {/* ── Heading ── */}
      <div className={`srv-heading-wrap ${visible ? 'srv-visible' : ''}`}>
        <h2 className="srv-heading">
          What I <span className="srv-heading-accent">Offer</span>
        </h2>
      </div>

      {/* ── Cards Grid ── */}
      <div className="srv-grid">
        {services.map((svc, i) => {
          const isOpen = expanded === svc.id
          return (
            <div
              key={svc.id}
              className={`srv-card ${isOpen ? 'srv-card-open' : 'srv-card-closed'} ${visible ? 'srv-card-visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 0.1}s` : '0s' }}
              onClick={() => toggle(svc.id)}
            >
              {/* glow blob */}
              <div className="srv-glow" />

              {/* card content */}
              <div className="srv-card-inner">
                <h3 className="srv-title">{svc.title}</h3>

                {/* description — visible only when open */}
                <div className={`srv-body ${isOpen ? 'srv-body-open' : ''}`}>
                  <p className="srv-desc">{svc.desc}</p>

                  <span className="srv-skills-label">Skills &amp; Tools</span>
                  <div className="srv-tags">
                    {svc.skills.map(tag => (
                      <span className="srv-tag" key={tag} onClick={(e) => e.stopPropagation()}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* expand / collapse arrow icon (now just visual, click triggers card toggle) */}
              <div className="srv-toggle-icon">
                <svg
                  width="18" height="18"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.35s ease' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
