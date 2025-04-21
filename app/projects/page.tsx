"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order tracking.",
    image: "/images/projects/project1.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    liveDemo: "https://ecommerce-dashboard.demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-featured task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "/images/projects/project2.jpg",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/task-management-app",
    liveDemo: "https://task-management.demo.com",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description: "An application to track personal finances, create budgets, and visualize spending patterns with interactive charts.",
    image: "/images/projects/project3.jpg",
    technologies: ["Next.js", "Django", "PostgreSQL", "Chart.js"],
    github: "https://github.com/yourusername/finance-tracker",
    liveDemo: "https://finance-tracker.demo.com",
  },
];

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
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
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of work showcasing different skills and technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-card border border-[hsl(var(--border))] rounded-xl overflow-hidden group"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[hsl(var(--border))] rounded-md hover:bg-muted transition-colors"
                  >
                    <FiGithub size={16} />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                  >
                    <FiExternalLink size={16} />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 