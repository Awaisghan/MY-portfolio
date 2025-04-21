"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SocialLink href="https://github.com/Awaisghan" icon={<FiGithub size={20} />} label="GitHub" />
            <SocialLink href="www.linkedin.com/in/muhammad-awais-ghani-8099b8277" icon={<FiLinkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/yourusername" icon={<FiTwitter size={20} />} label="Twitter" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
} 