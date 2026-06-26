"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Globe, Trophy } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Software Engineering Student",
    subtitle: "Daffodil International University",
    description:
      "Pursuing a degree in Software Engineering, focusing on modern web technologies and software development practices.",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-400"
  },
  {
    icon: Globe,
    title: "Erasmus+ Scholar",
    subtitle: "International Exchange Program",
    description:
      "Selected for the prestigious Erasmus+ semester exchange program, gaining international exposure and cross-cultural experience in software development.",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    icon: Trophy,
    title: "Competitive Programmer",
    subtitle: "Problem Solving Enthusiast",
    description:
      "Active competitive programmer on platforms like Codeforces, solving algorithmic challenges and improving problem-solving skills daily.",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-400"
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-16 md:py-24 relative overflow-x-hidden">

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            Experience
          </span>

          <h2 className="section-heading">
            <span className="gradient-text">Highlights</span> & Achievements
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Key milestones in my academic and professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 md:p-8 text-center group transition-transform duration-300 md:hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-300 md:group-hover:scale-105`}
              >
                <item.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary text-sm font-medium mb-4">
                {item.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;