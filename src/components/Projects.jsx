import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      number: "Project 01",
      category: "Generative AI",
      title: "AdGen AI",
      description:
        "An AI-powered platform for generating User-Generated Content style advertisements. Leveraging the Gemini API to construct compelling narratives and paired with automated image processing.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMrjc1C8MhI2mT-02_ikz9iyvEamcbMH-sbSubUxBIsXO6uBrojW359EWw6r5g1TG3XBcUnk5v6FHS6vX1qUG5K-8l262nJff3WswHCSOszoyotTmmvqkbVWUwMZjW3MwJQNzxdxBfN_UxCK1PGXgOf-iphwy4Z6buM8X9WMgTqaT_Sc2wmW8nFY1T2C5BxR6csR71ybkl3Ts9A7NBHCufEiWmJrZFxn15BCmcqYqY9eizYSuXRomg6Q",
      technologies: [
        "React",
        "Node.js",
        "Gemini API",
        "PostgreSQL",
      ],
      liveDemo: "#",
      sourceCode: "#",
    },

    {
      number: "Project 02",
      category: "Automation",
      title: "CertifyHub",
      description:
        "A high-performance certificate management system. Architected to bulk-generate, verify, and distribute personalized PDFs at scale. Processed over 50 certificates in under 2 minutes.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCROO9-8OOv_yg89544Nptgt5VPnelaIncLLXx73YYMmO85zOS2z_7odFXvYvxgD6bxHBsTkvpQORpLXWjWWpsa4lR4vaZS7-flmNNsaJt7id7uolqEqCRzm_sQP34jyzhG0qOpuZjv99IlBSUBesa5VURh7FkzBTVGsAK7fkJzIhEwJsK2zNOVjWNZwGfY6yhurkIV6RVp3jB9jo9SGcgpucX_dTiPKl577UhjIO318gje5aN8XRdt4A",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "PDF-Lib",
      ],
      liveDemo: "#",
      sourceCode: "#",
    },

    {
      number: "Project 03",
      category: "Management System",
      title: "PRISM",
      description:
        "A comprehensive hostel maintenance tracking platform bridging the gap between residents and facility managers. Features robust role-based access, OTP authentication, and an intelligent auto-escalation matrix for unresolved issues.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAj-Q3d7D4Ml6KGtIuTaD9KcXTtwLRYz3wnctfR_K3qpKZzRV07ppN9JthZyOjqZ40OlbpT6RyfECmtVhBlZtaJgSaNtY4PCGp973y4z1G-WhKSooqcWomHzx_QfG6bAJF68WxXk3QZl6oXDR1fr6OkZy1AKt43wW6meKtUGo8t-rqMdnMM2pwueFhU6aZ24UD6WZlSMh2c0gTh7I6hAKhwDuaXbk4Qx1HL5qZuqaVmvLfADFMlgyK3lQ",
      technologies: [
        "React",
        "Node.js",
        "MySQL",
      ],
      liveDemo: "#",
      sourceCode: "#",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="w-full pt-20 bg-surface">

      <div className="flex flex-col w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-section-gap max-w-container-max mx-auto overflow-hidden">

        {/* HEADER */}
        <div className="mb-12 relative flex items-center justify-between">

          <h1 className="font-display text-display text-on-surface relative z-10">
            Things I've built.
          </h1>

          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10 mix-blend-multiply"></div>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-4">

            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowRight size={20} />
            </button>

          </div>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >

            {projects.map((project) => (

              <div
                key={project.number}
                className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group"
              >

                {/* PROJECT IMAGE */}
                <div className="w-full lg:w-7/12 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ease-out group-hover:scale-[1.02]">

                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                    }}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                </div>

                {/* PROJECT DETAILS */}
                <div className="w-full lg:w-5/12 flex flex-col items-start relative">

                  {/* Project number */}
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest [writing-mode:vertical-rl] absolute -ml-12 hidden lg:block rotate-180">
                    {project.number}
                  </span>

                  <div className="flex items-center gap-4 mb-4">

                    <span className="font-label-caps text-label-caps text-primary uppercase">
                      {project.category}
                    </span>

                  </div>

                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                    {project.title}
                  </h2>

                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-10">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-caps text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">

                    <a
                      href={project.liveDemo}
                      className="w-full sm:w-auto px-6 py-3 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      See Live Demo
                      <ExternalLink size={18} />
                    </a>

                    <a
                      href={project.sourceCode}
                      className="w-full sm:w-auto px-6 py-3 border border-outline rounded-lg text-on-surface font-label-caps text-label-caps hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                    >
                      Visit Source Code
                      <Code2 size={18} />
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-12 gap-2">

          {projects.map((_, index) => (

            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-outline-variant hover:bg-primary"
              }`}
            ></button>

          ))}

        </div>

        {/* MOBILE ARROWS */}
        <div className="flex md:hidden justify-center mt-8 gap-4">

          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowRight size={20} />
          </button>

        </div>

      </div>

    </main>
  );
}

export default Projects;