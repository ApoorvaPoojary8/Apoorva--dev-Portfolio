import React, { useState } from "react";

const achievements = [
  {
    year: "2026",
    title: "Bengaluru AI Hackathon",
    label: "TOP 5 FINALISTS",
    subtitle: "Project: Sahaay AI",
    description:
      "Developed an innovative AI-driven accessibility solution addressing critical challenges through offline OCR, currency detection, and face recognition.",
    image: "/Ai hakathon.jpeg",
    icon: "emoji_events",
    tags: ["AI", "Accessibility", "Hackathon"],
  },

  {
    year: "2026",
    title: "Infosys Springboard Internship 7.0",
    label: "SELECTED INTERN",
    subtitle: "Infosys Springboard",
    description:
      "Selected for the Infosys Springboard Virtual Internship 7.0, gaining hands-on exposure to industry-relevant technologies through structured learning and project-based development.",
    image: "/Infosys Internship1.jpeg",
    icon: "work",
    tags: ["Internship", "Technology", "Learning"],
  },

  {
    year: "2026",
    title: "Technical Workshops",
    label: "CONDUCTED SESSIONS",
    subtitle: "SQL & Git / Version Control",
    description:
      "Designed and delivered hands-on technical training sessions focusing on SQL and Git / Version Control, empowering more than 30 students with practical engineering skills.",
    image: "/SQL Session.jpeg",
    icon: "school",
    tags: ["SQL", "Git", "30+ Students"],
  },

  {
    year: "2026",
    title: "Pragati: Path to Future",
    label: "COHORT 9",
    subtitle: "Infosys Springboard",
    description:
      "Selected for Pragati: Path to Future – Cohort 9, a structured learning journey focused on developing future-ready technical, professional, and career skills.",
    image: "/pragthi.jpeg",
    icon: "trending_up",
    tags: ["Cohort 9", "Future Skills"],
  },

  {
    year: "2026",
    title: "Academic Topper",
    label: "ACADEMIC EXCELLENCE",
    subtitle: "Outstanding Academic Performance",
    description:
      "Recognized for strong academic performance and consistent dedication towards technical subjects, problem-solving, and overall academic excellence.",
    image: "/Toppers.jpeg",
    icon: "school",
    tags: ["Academics", "Excellence"],
  },

  {
    year: "2026",
    title: "Inceptio Ideathon",
    label: "RANKED TOP 7",
    subtitle: "Among 52 competing teams",
    description:
      "Conceptualized and pitched RescueSync, a comprehensive disaster management and synchronization platform recognized for its feasibility and potential impact.",
    image: "/Inceptio.jpeg",
    icon: "lightbulb",
    tags: ["Ideathon", "RescueSync", "Innovation"],
  },

  {
    year: "2026",
    title: "Low-Code & No-Code Session",
    label: "TECHNICAL SESSION",
    subtitle: "Practical Learning Session",
    description:
      "Participated in a practical learning session exploring low-code and no-code technologies and their applications in modern development and automation.",
    image: "/lowcode.jpeg",
    icon: "build",
    tags: ["Low-Code", "No-Code", "Automation"],
  },

  {
    year: "2026",
    title: "Hackfest 2026 CTF",
    label: "CTF PARTICIPANT",
    subtitle: "Capture The Flag",
    description:
      "Participated in Hackfest 2026 Capture The Flag, gaining practical exposure to cybersecurity challenges, logical problem-solving, and security-oriented thinking.",
    image: "/CTF.jpeg",
    icon: "security",
    tags: ["Cybersecurity", "CTF"],
  },
];


/* =========================================================
   CREATE 4 SLIDES
   8 ACHIEVEMENTS → 2 CARDS PER SLIDE
========================================================= */

const slides = [];

for (let i = 0; i < achievements.length; i += 2) {
  slides.push(achievements.slice(i, i + 2));
}


/* =========================================================
   ACHIEVEMENT CARD
========================================================= */

function AchievementCard({ achievement }) {
  return (
    <article className="relative h-[560px] rounded-2xl overflow-hidden group">

      {/* IMAGE */}

      <img
        src={achievement.image}
        alt={achievement.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />


      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />


      {/* CONTENT */}

      <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8 text-white">

        {/* YEAR */}

        <span className="inline-block px-3 py-1 mb-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps">
          {achievement.year}
        </span>


        {/* ICON */}

        <div className="mb-4">

          <span className="material-symbols-outlined text-[38px]">
            {achievement.icon}
          </span>

        </div>


        {/* TITLE */}

        <h2 className="font-display text-[32px] md:text-[36px] leading-tight mb-4">
          {achievement.title}
        </h2>


        {/* LABEL */}

        <div className="font-label-caps text-label-caps text-inverse-primary tracking-widest mb-2">
          {achievement.label}
        </div>


        {/* SUBTITLE */}

        {achievement.subtitle && (
          <div className="font-body-md text-white/80 mb-4">
            {achievement.subtitle}
          </div>
        )}


        {/* DESCRIPTION */}

        <p className="font-body-md text-white/90 leading-relaxed max-w-xl">
          {achievement.description}
        </p>


        {/* TAGS */}

        {achievement.tags && (
          <div className="flex flex-wrap gap-2 mt-5">

            {achievement.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/30 rounded-full text-xs tracking-wide"
              >
                {tag}
              </span>
            ))}

          </div>
        )}

      </div>

    </article>
  );
}


/* =========================================================
   MAIN ACHIEVEMENTS
========================================================= */

function Achievements() {

  const [currentSlide, setCurrentSlide] = useState(0);


  /* =======================================================
     NEXT
  ======================================================= */

  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1
        ? 0
        : prev + 1
    );

  };


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );

  };


  /* =======================================================
     GO TO SLIDE
  ======================================================= */

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (

    <main className="w-full pt-20 bg-surface">

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-variant/20 to-transparent" />


        <svg
          className="absolute top-40 -left-20 w-96 h-96 text-primary-fixed-dim/10 transform rotate-12"
          fill="currentColor"
          viewBox="0 0 100 100"
        >

          <circle
            cx="50"
            cy="50"
            fill="none"
            r="40"
            stroke="currentColor"
            strokeDasharray="4 8"
            strokeWidth="2"
          />

          <path
            d="M 20 50 Q 50 10 80 50 T 20 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

        </svg>

      </div>


      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full py-20 lg:py-section-gap relative z-10">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-16 flex flex-col items-start">

          <div className="flex items-center gap-4 mb-6">

            <span className="w-12 h-px bg-primary/30" />

            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              Recognition & Impact
            </span>

          </div>


          <h1 className="font-display text-display text-on-surface mb-6 relative">

            Milestones.

            <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-inverse-primary/40 -z-10 rounded-full" />

          </h1>


          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">

            A curated collection of competitive achievements,
            technical initiatives, internships, and academic
            milestones that have shaped my journey and technical acumen.

          </p>

        </div>


        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="relative">


          {/* ===============================================
              VIEWPORT
          =============================================== */}

          <div className="overflow-hidden rounded-2xl">

            {/* =============================================
                TRACK
            ============================================= */}

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >


              {/* ===========================================
                  EACH SLIDE
              =========================================== */}

              {slides.map((slide, slideIndex) => (

                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                  {slide.map((achievement) => (

                    <AchievementCard
                      key={achievement.title}
                      achievement={achievement}
                    />

                  ))}

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="flex items-center justify-between mt-8">


            {/* =============================================
                SLIDE INDICATORS
            ============================================= */}

            <div className="flex items-center gap-2">

              {slides.map((_, index) => (

                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-12 bg-primary"
                      : "w-4 bg-outline-variant"
                  }`}
                />

              ))}

            </div>


            {/* =============================================
                COUNTER
            ============================================= */}

            <div className="font-label-caps text-label-caps text-on-surface-variant">

              {String(currentSlide + 1).padStart(2, "0")}

              {" / "}

              {String(slides.length).padStart(2, "0")}

            </div>


            {/* =============================================
                ARROWS
            ============================================= */}

            <div className="flex gap-4">


              {/* PREVIOUS */}

              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
              >

                <span className="material-symbols-outlined">
                  west
                </span>

              </button>


              {/* NEXT */}

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
              >

                <span className="material-symbols-outlined">
                  east
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </main>

  );
}

export default Achievements;