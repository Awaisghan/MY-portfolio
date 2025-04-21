"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove # from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-[hsl(var(--background))]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-10 py-2 xs:py-3 sm:py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold hover:text-primary transition-colors"
          onClick={(e) => handleScrollToSection(e, "#home")}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 text-sm lg:text-base xl:text-lg hover:text-primary transition-colors group ${
                activeSection === link.href.substring(1) ? "text-primary font-medium" : ""
              }`}
              onClick={(e) => handleScrollToSection(e, link.href)}
            >
              {link.label}
              <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                activeSection === link.href.substring(1) ? "w-full" : ""
              }`}></span>
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden gap-1 xs:gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 xs:p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX className="w-5 h-5 xs:w-6 xs:h-6" /> : <FiMenu className="w-5 h-5 xs:w-6 xs:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[hsl(var(--background))]/95 backdrop-blur-md shadow-lg max-h-[80vh] overflow-y-auto"
        >
          <nav className="flex flex-col py-2 xs:py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-2 xs:py-3 px-4 xs:px-6 text-sm xs:text-base hover:bg-muted/50 transition-colors group ${
                  activeSection === link.href.substring(1) ? "text-primary font-medium" : ""
                }`}
                onClick={(e) => handleScrollToSection(e, link.href)}
              >
                {link.label}
                <span className={`absolute left-4 xs:left-6 bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-32px)] xs:group-hover:w-[calc(100%-48px)] ${
                  activeSection === link.href.substring(1) ? "w-[calc(100%-32px)] xs:w-[calc(100%-48px)]" : ""
                }`}></span>
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
} 