"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Globe, Award, Users, Calendar } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    icon: Globe,
    title: "Erasmus+ Semester Exchange Program",
    subtitle: "Varna University of Management, Bulgaria",
    year: "Sep - Dec 2025",
    flags: ["https://flagcdn.com/w40/bg.png", "https://flagcdn.com/w40/eu.png"],
    highlights: [
      "Selected as an Erasmus+ Scholar for a semester exchange program",
      "Studied abroad at Varna University of Management in Bulgaria",
      "Completed Machine Learning and Data Structure and Algorithms projects",
      "Gained international academic exposure and cross-cultural experience",
      "Improved communication skills, adaptability, and global collaboration",
      "Represented my home university in academic and cultural activities",
    ],
    gradient: "from-primary to-blue-400",
    featured: true,
  },
  {
    icon: Trophy,
    title: "Hackathons & Competitions",
    subtitle: "Problem Solving & Innovation",
    year: "Ongoing",
    description:
      "Actively participating in hackathons and coding competitions to sharpen problem-solving skills and collaborate on innovative projects.",
    gradient: "from-accent to-orange-400",
    featured: false,
  },
  {
    icon: Users,
    title: "Leadership & Volunteering",
    subtitle: "Community Engagement",
    year: "Ongoing",
    description:
      "Contributing to tech communities, mentoring peers, and participating in volunteer programs to give back and grow as a leader.",
    gradient: "from-emerald-500 to-teal-400",
    featured: false,
  },
  {
    icon: Award,
    title: "Certifications & Awards",
    subtitle: "Professional Development",
    year: "Ongoing",
    description:
      "Continuously earning certifications in web development, cloud technologies, and completing professional courses to stay ahead.",
    gradient: "from-purple-500 to-pink-400",
    featured: false,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div
        className="hidden md:block floating-blob w-80 h-80 bg-accent/15 top-20 -right-40"
        style={{ animationDelay: "-12s" }}
      />
      <div
        className="hidden md:block floating-blob w-64 h-64 bg-primary/15 bottom-20 -left-32"
        style={{ animationDelay: "-6s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            <Trophy className="inline-block mr-2 w-4" />
            Recognition
            <Trophy className="inline-block ml-2 w-4" />
          </span>

          <h2 className="section-heading">
            <span className="gradient-text">Achievements</span> & Global
            Experience
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Milestones, experiences, and accomplishments that shape my journey
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="glass-card p-6 md:p-10 max-w-4xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/5 opacity-50" />

            <div className="flex gap-2 absolute top-4 right-4">
              <Image
                src={achievements[0].flags[1]}
                alt="Bulgaria flag"
                width={32}
                height={32}
                className="w-8 h-5"
                unoptimized
              />
              <Image
                src={achievements[0].flags[0]}
                alt="European Union flag"
                width={32}
                height={32}
                className="w-8 h-5"
                unoptimized
              />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${achievements[0].gradient} flex items-center justify-center shrink-0 transition-transform duration-300 md:group-hover:scale-105`}
                >
                  <Globe size={32} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl md:text-3xl font-bold gradient-text">
                      {achievements[0].title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30">
                      Featured
                    </span>
                  </div>

                  <p className="text-primary text-lg font-medium mb-4">
                    {achievements[0].subtitle}
                  </p>

                  <p className="text-muted-foreground text-xs mb-4 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{achievements[0].year}</span>
                  </p>

                  <ul className="space-y-3">
                    {achievements[0].highlights?.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground/90"
                      >
                        <span className="text-primary mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {achievements.slice(1).map((achievement) => (
            <div
              key={achievement.title}
              className="glass-card p-5 md:p-6 group transition-transform duration-300 md:hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center transition-transform duration-300 md:group-hover:scale-105`}
              >
                <achievement.icon size={28} className="text-white" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold">{achievement.title}</h3>
              </div>

              <p className="text-primary text-sm font-medium mb-2">
                {achievement.subtitle}
              </p>

              <p className="text-muted-foreground text-xs mb-4 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{achievement.year}</span>
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground/70 font-medium">
                  More details coming soon...
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
