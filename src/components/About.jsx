"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Bug, MessageSquare } from "lucide-react";

const aboutItems = [
  {
    icon: Code2,
    text: "I am a dedicated full-stack web developer with a strong focus on building scalable, maintainable, and user-friendly web applications.",
  },
  {
    icon: Rocket,
    text: "I work primarily with modern web technologies and frameworks, ensuring performance-driven and responsive solutions from development to deployment.",
  },
  {
    icon: Bug,
    text: "I value clean code, debugging, and continuous improvement to deliver reliable software that meets both technical and business requirements.",
  },
  {
    icon: MessageSquare,
    text: "I enjoy collaborating with teams, communicating ideas clearly, and translating complex problems into efficient technical solutions.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="gradient-text font-mono text-sm mb-4 block">
            Get to know me
          </span>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A passionate developer who loves turning complex problems into
            simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon size={24} />
              </div>
              <p className="text-foreground/90 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;