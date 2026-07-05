import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import ResumeBtn from './components/ResumeBtn'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Background ambient lighting */}
      <div className="bg-glow-top-left"></div>

      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Technical Skills Section */}
      <Skills />

      {/* Experience & Education Section */}
      <Experience />

      {/* Services — What I Offer */}
      <Services />

      {/* Testimonials — What They Say */}
      <Testimonials />

      {/* Contact & Footer Section */}
      <Footer />

      {/* Bottom Sidebar: Social Links */}
      <SocialSidebar />

      {/* Resume Download Side Link */}
      <ResumeBtn />
    </div>
  )
}

export default App


