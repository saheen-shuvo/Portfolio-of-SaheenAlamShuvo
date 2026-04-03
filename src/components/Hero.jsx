"use client";

import Image from "next/image";
import profilePic from "../assets/images/HeroImg/heroBanner.webp";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



const Hero = () => {
  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (!el) return;

    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse pt-8 lg:pt-0 lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="gradient-text font-mono text-sm md:text-base mb-4">
              Hello, I&apos;m
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Saheen Alam</span>{" "}
              <span className="text-foreground">Shuvo</span>
            </h1>

            <p className="text-lg text-orange-500 md:text-xl text-accent font-medium mb-6 font-mono">
              Full Stack Developer | Competitive Programmer
            </p>

            <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
              I’m a Full Stack web developer specializing in the MERN stack,
              with a strong passion for problem-solving and competitive
              programming. I build scalable, user-friendly web applications and
              enjoy transforming complex ideas into clean, elegant digital
              solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => handleScroll("#projects")}
                className="btn-primary w-full sm:w-auto"
              >
                View Projects
              </button>

              <button
                onClick={() => handleScroll("#contact")}
                className="btn-outline w-full sm:w-auto"
              >
                Contact Me
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-2xl">
              <a
                href="https://github.com/saheen-shuvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0387c9] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saheen-alam-shuvo-182-li/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0387c9] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:saheenshuvo182@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0387c9] transition"
              >
                <IoMdMail />
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="shrink-0">
            <div className="relative">
              {/* glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/50 to-accent/50 rounded-full blur-2xl opacity-30 scale-110" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src={profilePic}
                  priority
                  alt="Saheen Alam Shuvo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* subtle ring (no animation) */}
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-full" />
            </div>
          </div>
        </div>

        {/* scroll icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
