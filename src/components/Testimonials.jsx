import React, { useEffect, useRef, useState } from 'react'

import t1 from '../assets/testimonial-1.png'
import t2 from '../assets/testimonial-2.png'
import t3 from '../assets/testimonial-3.png'
import t4 from '../assets/testimonial-4.png'

const row1 = [
  {
    name: 'Jems Guiller',
    rating: 5.0,
    text: 'Highly professional full-stack development. Delivered our custom agritech e-commerce marketplace ahead of schedule with robust JWT authentication.',
    img: t1,
  },
  {
    name: 'Abex Wrooks',
    rating: 5.0,
    text: 'Built an incredible AI-powered 3D product customization tool. Excellent expertise in React, Three.js, and custom API backends.',
    img: t2,
  },
  {
    name: 'Willer Morth',
    rating: 5.0,
    text: 'The Django appointment booking system was built flawlessly with perfect multi-role access control. Will work together again!',
    img: t3,
  },
  {
    name: 'Jemi Llorens',
    rating: 5.0,
    text: 'Outstanding technical skills in Python and TensorFlow. Our fruit classification desktop application is fast, accurate, and secure.',
    img: t4,
  },
]

const row2 = [
  {
    name: 'Sarah Connor',
    rating: 5.0,
    text: 'Managed our entire project lifecycle independently. From UI/UX system design to deployment on secure Linux servers.',
    img: t2,
  },
  {
    name: 'Michael Scott',
    rating: 5.0,
    text: 'Exceptional communication and execution. Deployed responsive WebApps using modern MERN and Django stacks.',
    img: t1,
  },
  {
    name: 'Bruce Wayne',
    rating: 5.0,
    text: 'Highly secure code structure with solid database indexing and optimized SQL connects. An absolute engineering talent.',
    img: t3,
  },
  {
    name: 'Diana Prince',
    rating: 5.0,
    text: 'Incredibly creative frontend design. The micro-animations and scroll transitions are extremely premium.',
    img: t4,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Duplicate items for infinite marquee scrolling effect
  const row1List = [...row1, ...row1, ...row1, ...row1]
  const row2List = [...row2, ...row2, ...row2, ...row2]

  return (
    <section id="testimonials" ref={sectionRef} className="test-section">

      {/* ── Heading ── */}
      <div className={`test-heading-wrap ${visible ? 'test-visible' : ''}`}>
        <span className="test-heading-accent">What They Say</span>
        <h2 className="test-heading">About Me</h2>
      </div>

      {/* ── Infinite Marquee Wrapper ── */}
      <div className="test-marquee-container">

        {/* Left Fade Edge */}
        <div className="test-edge test-edge-left" />
        {/* Right Fade Edge */}
        <div className="test-edge test-edge-right" />

        {/* Row 1: Right to Left Scroll */}
        <div className="test-marquee-row test-marquee-left">
          <div className="test-track">
            {row1List.map((item, idx) => (
              <div className="test-card" key={`r1-${idx}`}>
                <div className="test-avatar-wrap">
                  <img src={item.img} alt={item.name} className="test-avatar" />
                </div>
                <h3 className="test-name">{item.name}</h3>
                
                {/* 5 Stars */}
                <div className="test-rating">
                  <span className="test-stars">★★★★★</span>
                  <span className="test-rating-num">{item.rating.toFixed(1)}</span>
                </div>

                <p className="test-text">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right Scroll */}
        <div className="test-marquee-row test-marquee-right">
          <div className="test-track">
            {row2List.map((item, idx) => (
              <div className="test-card" key={`r2-${idx}`}>
                <div className="test-avatar-wrap">
                  <img src={item.img} alt={item.name} className="test-avatar" />
                </div>
                <h3 className="test-name">{item.name}</h3>

                {/* 5 Stars */}
                <div className="test-rating">
                  <span className="test-stars">★★★★★</span>
                  <span className="test-rating-num">{item.rating.toFixed(1)}</span>
                </div>

                <p className="test-text">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
