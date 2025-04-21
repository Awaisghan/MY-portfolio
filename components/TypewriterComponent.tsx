"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterComponentProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypewriterComponent({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypewriterComponentProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];
      
      if (!isDeleting) {
        // Typing text
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          setIsBlinking(false);
        } else {
          // Finished typing, wait before deleting
          setIsBlinking(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsBlinking(false);
          }, delayBetween);
        }
      } else {
        // Deleting text
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          setIsBlinking(false);
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsBlinking(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className="font-semibold text-2xl md:text-3xl lg:text-4xl inline-flex">
      <motion.span 
        className="text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {currentText}
      </motion.span>
      <span className={`w-1 h-8 md:h-10 bg-primary ml-1 ${isBlinking ? 'animate-blink' : ''}`} 
        style={{ display: 'inline-block' }} />
    </div>
  );
} 