"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Plane,
} from "lucide-react";

import img1 from "@/assets/gallery/gallery1.jpg";
import img2 from "@/assets/gallery/gallery2.jpeg";
import img3 from "@/assets/gallery/gallery3.jpeg";
import img4 from "@/assets/gallery/gallery4.jpeg";
import img5 from "@/assets/gallery/gallery5.jpeg";
import img6 from "@/assets/gallery/gallery6.jpeg";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    title: "Erasmus+ Get Together",
    image: img1,
    location: "Varna University Campus, Bulgaria",
    date: "18 October 2025",
    description:
      "Exchange students get together for a fun evening of games and food",
  },
  {
    id: 2,
    title: "University Campus",
    image: img2,
    location: "Varna, Bulgaria",
    date: "12 September 2025",
    description: "Exploring the beautiful campus!",
  },
  {
    id: 3,
    title: "Christmas Lunch",
    image: img3,
    location: "Bulgaria",
    date: "1 December 2025",
    description:
      "Participated in a festive Christmas lunch with international students",
  },
  {
    id: 4,
    title: "Traveling to Vatican City",
    image: img4,
    location: "Vatican City",
    date: "18 November 2025",
    description: "Visited the Vatican City during a weekend trip to Italy",
  },
  {
    id: 5,
    title: "Paris Adventures",
    image: img5,
    location: "Paris, France",
    date: "15 December 2025",
    description: "Weekend trip to Paris with friends from the exchange program",
  },
  {
    id: 6,
    title: "Italy Trip",
    image: img6,
    location: "Rome, Italy",
    date: "20 December 2025",
    description:
      "Exploring Rome and its rich history during a trip with exchange friends",
  },
];

const ExchangeGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Plane className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">
              Erasmus+ Journey
            </span>
          </div>

          <h2 className="section-heading">
            <span className="gradient-text">Exchange</span> Memories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Capturing moments from my semester abroad in Bulgaria
          </p>
        </motion.div>

        {/* Featured Image Showcase */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Main Display */}
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl" />

              <div
                key={activeIndex}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <Image
                  src={galleryImages[activeIndex].image}
                  alt={galleryImages[activeIndex].title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover object-center"
                  priority
                />
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-xs md:text-2xl font-bold mb-2 text-white">
                    {galleryImages[activeIndex].title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80 text-xs md:text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {galleryImages[activeIndex].location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {galleryImages[activeIndex].date}
                    </span>
                  </div>
                  <p className="mt-2 text-xs md:text-base  text-white/70">
                    {galleryImages[activeIndex].description}
                  </p>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-foreground/30 hover:bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -left-4 top-1/4 glass-card px-4 py-3 hidden lg:block">
              <div className="text-2xl font-bold gradient-text">4+</div>
              <div className="text-xs text-muted-foreground">Months Abroad</div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-4 top-[20%] glass-card px-4 py-3 hidden lg:block "
            >
              <div className="text-2xl font-bold gradient-text-accent flex justify-center">
                <img
                  className="w-8"
                  src="https://img.icons8.com/color/48/bulgaria.png"
                  alt="Bulgaria flag"
                />
              </div>
              <div className="text-xs text-muted-foreground">Bulgaria</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-4 left-1/4 glass-card px-4 py-3 hidden lg:block"
            >
              <div className="text-2xl font-bold gradient-text">🇪🇺</div>
              <div className="text-xs text-muted-foreground">Erasmus+</div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer group ${
                activeIndex === index
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : ""
              }`}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center p-3 opacity-0 md:group-hover:opacity-100 transition">
                <span className="text-xs font-medium text-white text-center line-clamp-2">
                  {image.title}
                </span>
              </div>

              {activeIndex === index && (
                <div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border-2 border-primary rounded-2xl"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More memories coming soon...
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary/70 font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Uploading experiences
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeGallery;
