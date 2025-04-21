"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (pathname) {
      setIsAnimating(true);
      // Update children after animation out is complete
      const timer = setTimeout(() => {
        setDisplayChildren(children);
      }, 300); // Half the time of our page animation
      return () => clearTimeout(timer);
    }
  }, [pathname, children]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {isAnimating ? displayChildren : children}
      </motion.div>
    </AnimatePresence>
  );
} 