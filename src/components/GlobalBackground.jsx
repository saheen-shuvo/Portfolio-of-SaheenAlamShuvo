"use client";

import { motion } from "framer-motion";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Moving Light Beams */}
      <motion.div
        className="sm:hidden lg:flex absolute w-px h-[200vh] bg-linear-to-b from-transparent via-primary/20 to-transparent"
        style={{ left: "20%" }}
        animate={{
          y: ["-100%", "100%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="sm:hidden lg:flex  absolute w-px h-[200vh] bg-linear-to-b from-transparent via-accent/15 to-transparent"
        style={{ left: "70%" }}
        animate={{
          y: ["100%", "-100%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
      />

      <motion.div
        className="sm:hidden lg:flex absolute w-px h-[200vh] bg-linear-to-b from-transparent via-primary/10 to-transparent"
        style={{ left: "45%" }}
        animate={{
          y: ["-100%", "100%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 8 }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="absolute top-8 left-8 w-32 h-px bg-linear-to-r from-primary/50 to-transparent" />
        <div className="absolute top-8 left-8 w-px h-32 bg-linear-to-b from-primary/50 to-transparent" />
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
        <div className="absolute top-8 right-8 w-32 h-px bg-linear-to-l from-accent/50 to-transparent" />
        <div className="absolute top-8 right-8 w-px h-32 bg-linear-to-b from-accent/50 to-transparent" />
      </div>
    </div>
  );
};

export default GlobalBackground;