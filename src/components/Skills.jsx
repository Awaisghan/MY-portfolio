import React, { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    id: 'languages',
    icon: '⌨️',
    label: 'Languages',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.25)',
    skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    id: 'frontend',
    icon: '🖥️',
    label: 'Frontend',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.25)',
    skills: ['React.js', 'Three.js / WebGL', 'HTML5', 'CSS3', 'MediaPipe'],
  },
  {
    id: 'backend',
    icon: '⚙️',
    label: 'Backend',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.25)',
    skills: ['Django', 'Laravel', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'databases',
    icon: '🗄️',
    label: 'Databases',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.25)',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
  },
  {
    id: 'ai',
    icon: '🤖',
    label: 'AI / Machine Learning',
    color: '#c026d3',
    glow: 'rgba(192,38,211,0.25)',
    skills: ['TensorFlow', 'Transfer Learning', 'VGG16', 'DenseNet-201', 'scikit-learn', 'Random Forest', 'Computer Vision'],
  },
  {
    id: 'tools',
    icon: '🛠️',
    label: 'Tools & Platforms',
    color: '#9333ea',
    glow: 'rgba(147,51,234,0.25)',
    skills: ['Git / GitHub', 'Docker', 'Android WebView', 'Vercel'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Heading */}
      <div className={`skills-heading ${visible ? 'sk-visible' : ''}`}>
        <p className="skills-sub">What I Know</p>
        <h2 className="skills-title">
          Technical{' '}
          <span className="skills-title-accent">Skills</span>
        </h2>
        <div className="skills-divider" />
      </div>

      {/* Grid of categories */}
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.id}
            className={`sk-card ${visible ? 'sk-card-visible' : ''}`}
            style={{
              transitionDelay: visible ? `${i * 0.08}s` : '0s',
              '--sk-color': cat.color,
              '--sk-glow': cat.glow,
            }}
          >
            {/* Top-right glow blob */}
            <div className="sk-blob" />

            {/* Category header */}
            <div className="sk-header">
              <span className="sk-icon">{cat.icon}</span>
              <span className="sk-label">{cat.label}</span>
            </div>

            {/* Skill pills */}
            <div className="sk-pills">
              {cat.skills.map((skill, j) => (
                <span
                  key={skill}
                  className="sk-pill"
                  style={{ animationDelay: visible ? `${i * 0.08 + j * 0.05}s` : '0s' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
