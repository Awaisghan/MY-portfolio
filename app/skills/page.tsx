"use client";

import { motion } from "framer-motion";
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiDjango,
  SiPostgresql
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E44D26]" />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt className="text-[#2965F1]" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, category: "Frontend" },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs className="text-[#539E43]" />, category: "Backend" },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" />, category: "Backend" },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" />, category: "Backend" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, category: "Database" },
  { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" />, category: "Database" },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, category: "Tools" }
];

export default function SkillsPage() {
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are the technologies I&apos;ve worked with and am proficient in. I&apos;m always expanding my skillset and learning new tools.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-card border border-[hsl(var(--border))] rounded-lg p-6 transition-all h-full flex flex-col items-center justify-center group-hover:shadow-lg">
                <motion.div
                  className="text-4xl sm:text-5xl mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 