"use client";
import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import logixshuvoImg from "../assets/projects/logix.webp";
import shuvoBitesImg from "@/assets/projects/shuvobites.webp";
import stem from "@/assets/projects/stem.webp";
import shaheen from "../assets/projects/shaheen.webp";
import ia from "../assets/projects/ia.webp";
import cp from "../assets/projects/cp.webp";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Shaheen's Official",
    description:
      "A live e-commerce website for girls’ fashion. Built collaboratively, where I developed ~75% of the project, including UI, frontend logic, and Node.js CRUD APIs, while my teammate handled server setup and database connection.",
    image: shaheen,
    tags: ["Next.js", "MongoDB", "Shadcn", "Tailwind", "Node.js"],
    links: [
      { label: "Live Demo", url: "https://shaheensofficial.com/" },
      {
        label: "Repo",
        url: "https://github.com/saheen-shuvo/nureh-ecommerce-project",
      },
    ],
    gradient: "from-rose-500 to-rose-500/50",
  },
  {
    title: "LogixShuvo",
    description:
      "A MERN-based parcel delivery platform with role-based dashboards for Admin, Deliveryman, and Customer. I designed and developed the entire project end-to-end, including UI, backend APIs, payment gateway, authentication, and business logic.",
    image: logixshuvoImg,
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
    links: [
      { label: "Live Demo", url: "https://logixshuvo.web.app/" },
      {
        label: "Client Repo",
        url: "https://github.com/saheen-shuvo/logixshuvo-client",
      },
      {
        label: "Server Repo",
        url: "https://github.com/saheen-shuvo/logixshuvo-server",
      },
    ],
    gradient: "from-primary to-primary/50",
  },
  {
    title: "Shuvo Bites",
    description:
      "A modern food ordering platform that allows users to browse menus, place orders, make payments, and manage carts with a smooth user experience. I developed the project focusing on responsive UI, frontend logic, and core feature integration.",
    image: shuvoBitesImg,
    tags: ["React", "Node.js", "MongoDB", "Axios", "Tailwind"],
    links: [
      { label: "Live Demo", url: "https://shuvo-bites.web.app/" },
      {
        label: "Repo",
        url: "https://github.com/saheen-shuvo/shuvo-bites-client",
      },
    ],
    gradient: "from-accent to-accent/50",
  },
  {
    title: "STEM for Super Girls",
    description:
      "A web platform promoting girls’ participation in STEM through programs, events, and community initiatives. I designed and developed a responsive UI with interactive sections, authentication, and smooth user flows to showcase impact and engagement.",
    image: stem,
    tags: ["React", "Firebase", "DaisyUI", "Framer Motion", "MongoDB"],
    links: [
      {
        label: "Live Demo",
        url: "https://stem-for-super-girls-ad869.web.app/",
      },
      { label: "Repo", url: "https://github.com/saheen-shuvo/edTech-client" },
    ],
    gradient: "from-emerald-500 to-emerald-500/50",
  },
  {
    title: "International Affairs DIU",
    description:
      "An ongoing web project for the International Affairs Office of Daffodil International University, focused on presenting international programs, partnerships, and student services. I am working on building a clean, responsive UI and integrating dynamic content to improve accessibility and user experience.",
    image: ia,
    tags: ["React", "Tailwind", "Responsive", "MongoDB", "Firebase"],
    links: [
      {
        label: "Live Demo",
        url: "https://international-affairs-6273c.firebaseapp.com/",
      },
      {
        label: "Repo",
        url: "https://github.com/saheen-shuvo/international-affairs-client",
      },
    ],
    gradient: "from-violet-500 to-violet-500/50",
  },
  {
    title: "Competitive Programming",
    description:
      "Actively practicing competitive programming on platforms such as Codeforces and CodeChef, with a strong focus on data structures, algorithms, and efficient problem-solving techniques. This regular practice has strengthened my logical thinking, optimized coding approach, and improved my ability to solve complex problems.",
    image: cp,
    tags: ["C", "C++", "Algorithms", "DSA"],
    links: [
      {
        label: "Codeforces",
        url: "https://codeforces.com/profile/saheen_shuvo",
      },
      { label: "CodeChef", url: "https://www.codechef.com/users/saheen_shuvo" },
    ],
    gradient: "from-amber-500 to-amber-500/50",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div className="glass-card overflow-hidden group">
      {/* Project Image Header */}
      <div className=" relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-48 md:h-56 object-cover object-center transition-transform duration-500 md:group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs mb-4 leading-relaxed text-justify">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-gray-50/15 gradient-text font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label.includes("Repo") ? (
                <FiGithub />
              ) : (
                <FaExternalLinkAlt />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            My work
          </span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
