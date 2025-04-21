"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Hi there! I&apos;m AWAIS GHANI</h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m a passionate web developer specializing in building beautiful, functional, and user-friendly websites. With over 5 years of experience in web development, I&apos;ve worked on a wide range of projects from simple landing pages to complex web applications.
            </p>
            <p className="text-muted-foreground mb-4">
              My expertise lies in frontend development with React and Next.js, but I&apos;m also proficient in backend technologies like Django and database management with SQL. I&apos;m always eager to learn new technologies and techniques to improve my craft.
            </p>
            <p className="text-muted-foreground mb-8">
              When I&apos;m not coding, you can find me exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">
                  Bachelor&apos;s in Computer Science<br />
                  University of Technology (2016-2020)
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold mb-1">Experience</h4>
                <p className="text-sm text-muted-foreground">
                  5+ Years<br />
                  Web Development
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-muted p-2">
              <Image
                src="/images/profile1.jpg"
                alt="Profile Picture"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 