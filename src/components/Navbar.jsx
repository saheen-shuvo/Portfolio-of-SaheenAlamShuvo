"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/useIsMobile";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);

    // update URL hash
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }

    // wait for mobile menu collapse + layout reflow
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element = document.querySelector(href);
        if (!element) return;

        const offset = 10;
        const top =
          element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="md:text-xl font-bold gradient-text"
          whileHover={isMobile ? {} : { scale: 1.05 }}
          whileTap={isMobile ? {} : { scale: 0.95 }}
        >
          <span className="flex items-center">
            {"<"}
            <span className="gradient-text">Shuvo</span>
            <motion.span
              className="gradient-text-accent inline-block"
              animate={
                isMobile
                  ? {}
                  : {
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }
              }
              transition={isMobile ? {} : { duration: 2, repeat: Infinity }}
            >
              X
            </motion.span>
            <span className="gradient-text">Dev</span>
            {" />"}
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="/Resume_Saheen_Alam_Shuvo.pdf"
            download="Resume_Saheen_Alam_Shuvo.pdf"
            className="btn-primary flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-2">
            <ThemeToggle />
            <a
              href="/Resume_Saheen_Alam_Shuvo.pdf"
              download="Resume_Saheen_Alam_Shuvo.pdf"
              className="btn-primary flex items-center justify-center gap-2 flex-1"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
