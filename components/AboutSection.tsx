"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-10 xs:py-12 sm:py-16 md:py-20 px-2 xs:px-4 min-h-screen flex items-center" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto">
        <motion.div 
          className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
          <div className="w-12 xs:w-16 sm:w-20 h-0.5 xs:h-1 bg-primary mx-auto mt-2 xs:mt-3 sm:mt-4 mb-4 xs:mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1"
            style={{ y: leftColumnY }}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.h3 className="text-xl xs:text-2xl lg:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4" variants={item}>
              Hi there! I&apos;m AWAIS GHANI
            </motion.h3>
            
            <motion.p className="text-sm xs:text-base lg:text-lg text-muted-foreground mb-2 xs:mb-3 sm:mb-4" variants={item}>
              I&apos;m a passionate web developer specializing in building beautiful, functional, and user-friendly websites. With over 5 years of experience in web development, I&apos;ve worked on a wide range of projects from simple landing pages to complex web applications.
            </motion.p>
            
            <motion.p className="text-sm xs:text-base lg:text-lg text-muted-foreground mb-2 xs:mb-3 sm:mb-4" variants={item}>
              My expertise lies in frontend development with React and Next.js, but I&apos;m also proficient in backend technologies like Django and database management with SQL. I&apos;m always eager to learn new technologies and techniques to improve my craft.
            </motion.p>
            
            <motion.p className="text-sm xs:text-base lg:text-lg text-muted-foreground mb-4 xs:mb-6 sm:mb-8" variants={item}>
              When I&apos;m not coding, you can find me exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              <motion.div 
                variants={item}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.2 },
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="p-3 xs:p-4 rounded-lg bg-card border border-[hsl(var(--border))]"
              >
                <h4 className="text-sm xs:text-base lg:text-lg font-bold mb-0.5 xs:mb-1">Education</h4>
                <p className="text-xs xs:text-sm lg:text-base text-muted-foreground">
                  Bachelor&apos;s in Computer Science<br />
                  University of Technology (2016-2020)
                </p>
              </motion.div>
              
              <motion.div 
                variants={item}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.2 },
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="p-3 xs:p-4 rounded-lg bg-card border border-[hsl(var(--border))]"
              >
                <h4 className="text-sm xs:text-base lg:text-lg font-bold mb-0.5 xs:mb-1">Experience</h4>
                <p className="text-xs xs:text-sm lg:text-base text-muted-foreground">
                  5+ Years<br />
                  Web Development
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            style={{ y: rightColumnY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[200px] w-[200px] xs:h-[250px] xs:w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] overflow-hidden rounded-full border-2 xs:border-4 border-muted p-1 xs:p-2">
              <Image
                src="/images/profile1.jpg"
                alt="Profile Picture"
                fill
                className="object-cover rounded-full hover:scale-105 transition-all duration-500"
                priority
              />
              <motion.div
                className="absolute inset-0 border-2 xs:border-4 border-primary rounded-full"
                animate={{
                  boxShadow: ["0 0 20px rgba(0, 0, 0, 0.3)", "0 0 0px rgba(0, 0, 0, 0.0)"]
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 