"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Trophy, Briefcase, Coffee } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 30,
    suffix: "+",
    label: "Projects Completed",
    gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.5)]",
  },
  {
    icon: Trophy,
    value: 300,
    suffix: "+",
    label: "Problems Solved",
    gradient: "from-[hsl(var(--accent))] to-[hsl(var(--accent)/0.5)]",
  },
  {
    icon: Code2,
    value: 10000,
    suffix: "+",
    label: "Lines of Code",
    gradient: "from-emerald-500 to-emerald-500/50",
  },
  {
    icon: Coffee,
    value: 1000,
    suffix: "+",
    label: "Cups of Coffee",
    gradient: "from-amber-500 to-amber-500/50",
  },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 1200;
      const steps = 40;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-16 md:py-24 relative">
      <div
        className="hidden md:block floating-blob w-80 h-80 bg-accent/15 top-0 right-1/4"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            Numbers
          </span>
          <h2 className="section-heading">
            My <span className="gradient-text">Journey</span> in Numbers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A quick snapshot of my coding journey and accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-5 md:p-8 text-center group relative overflow-hidden transition-transform duration-300 md:hover:-translate-y-2"
            >
              {/* Background glow on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 md:group-hover:opacity-10 md:transition-opacity md:duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-linear-to-br ${stat.gradient} flex items-center justify-center transition-transform duration-300 md:group-hover:scale-105`}
              >
                <stat.icon size={28} className="text-white" />
              </div>

              {/* Counter */}
              <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-2 -right-2 w-16 h-16 bg-linear-to-br ${stat.gradient} opacity-10 rounded-tl-3xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
