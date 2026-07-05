import React, { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  const emailAddress = 'awaisghani442@gmail.com'

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" ref={sectionRef} className="footer-section">
      {/* Glow Ambient Blobs */}
      <div className="footer-glow-left" />
      <div className="footer-glow-right" />

      <div className="footer-container">

        {/* ── Heading ── */}
        <div className={`footer-heading-wrap ${visible ? 'footer-visible' : ''}`}>
          <h2 className="footer-heading">Contact Me</h2>
          <p className="footer-subtext">Tell me about your next project.</p>
        </div>

        {/* ── Copy Email Button ── */}
        <div className={`footer-btn-wrap ${visible ? 'footer-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <button className={`footer-copy-btn ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
            <span>{copied ? 'Copied!' : 'Copy email'}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {copied ? (
                <polyline points="20 6 9 17 4 12" />
              ) : (
                <>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ── Three Columns Info ── */}
        <div className={`footer-info-grid ${visible ? 'footer-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>

          {/* Column 1: Email & Location */}
          <div className="footer-col">
            <div className="footer-item">
              <h4 className="footer-col-title">Email</h4>
              <a href={`mailto:${emailAddress}`} className="footer-link-val">{emailAddress}</a>
            </div>
            <div className="footer-item">
              <h4 className="footer-col-title">Location</h4>
              <span className="footer-link-val">Pakistan</span>
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="footer-col">
            <h4 className="footer-col-title">Social Media</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://www.linkedin.com/in/muhammad-awais-ghani-8099b8277" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  LinkedIn
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/Awaisghan" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  GitHub
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              </li>

            </ul>
          </div>

          {/* Column 3: Write Me & We'll Talk */}
          <div className="footer-col">
            <h4 className="footer-col-title">Write Me &amp; We'll Talk</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://wa.me/923159352386" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  WhatsApp
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              </li>
              <li>
                <a href="https://m.me/xxxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  Messenger
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/xxxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  Telegram
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  Instagram
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Copyright ── */}
        <div className="footer-bottom">
          <p className="footer-copy-text">All Rights Reserved By Awais Ghani</p>
          <span className="footer-year">&copy; 2026</span>
        </div>

      </div>
    </footer>
  )
}
