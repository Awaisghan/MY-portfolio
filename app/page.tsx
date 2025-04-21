"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import TypewriterComponent from "@/components/TypewriterComponent";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16">
        {/* Background Blob */}
        <div className="absolute -z-10 opacity-30 dark:opacity-20">
          <div className="blob absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] 2xl:h-[800px] 2xl:w-[800px] bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500" />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.h2>
          
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Awais Ghani
          </motion.h1>
          
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 mb-4 sm:mb-6 md:mb-8">
            <TypewriterComponent 
              phrases={[
                "Frontend Developer", 
                "React Specialist", 
                "UI/UX Enthusiast", 
                "Next.js Developer",
                "Django Developer",
                "SQL Expert"
              ]} 
            />
          </div>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-8 md:mb-10 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building modern, responsive, and accessible web applications with the latest technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link 
              href="/resume.pdf" 
              className="flex items-center justify-center gap-1 xs:gap-2 px-4 xs:px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-primary text-primary-foreground text-sm xs:text-base sm:text-lg font-medium hover:opacity-90 transition-all"
              download
            >
              <FiDownload className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" /> Download Resume
            </Link>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-1 xs:gap-2 px-4 xs:px-5 sm:px-6 py-2 sm:py-3 rounded-full border border-input bg-[hsl(var(--background))] hover:bg-muted transition-colors text-sm xs:text-base sm:text-lg font-medium"
            >
              <FiMail className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" /> Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#about" className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Scroll Down</span>
            <div className="scroll-down-arrow h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"></div>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        ref={aboutRef}
        className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <AboutSection />
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        ref={skillsRef}
        className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SkillsSection />
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        ref={projectsRef}
        className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsSection />
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        ref={contactRef}
        className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ContactSection />
      </motion.section>
    </>
  );
}
