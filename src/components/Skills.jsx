// import React from "react";
import React, { useState } from "react";

import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiC,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
function Skills() {
  const [showCat, setShowCat] = useState(false);

const skills = [
  {
    name: "JAVA",
    icon: FaJava,
    color: "#007396",
    animation: "animate-float-1",
    translate: "lg:translate-y-8",
  },
  {
    name: "PYTHON",
    icon: FaPython,
    color: "#3776AB",
    animation: "animate-float-2",
    translate: "lg:translate-y-0",
  },
  {
    name: "C",
    icon: SiC,
    color: "#A8B9CC",
    animation: "animate-float-3",
    translate: "lg:translate-y-12",
  },
  {
    name: "JAVASCRIPT",
    icon: FaJs,
    color: "#F7DF1E",
    animation: "animate-float-1",
    translate: "lg:translate-y-4",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
    animation: "animate-float-2",
    translate: "lg:translate-y-8",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
    animation: "animate-float-3",
    translate: "lg:translate-y-0",
  },
  {
    name: "BOOTSTRAP",
    icon: FaBootstrap,
    color: "#7952B3",
    animation: "animate-float-1",
    translate: "lg:translate-y-12",
  },
  {
    name: "REACT",
    icon: FaReact,
    color: "#61DAFB",
    animation: "animate-float-2",
    translate: "lg:translate-y-4",
  },
  {
    name: "NODE.JS",
    icon: FaNodeJs,
    color: "#339933",
    animation: "animate-float-3",
    translate: "lg:translate-y-8",
  },
  {
    name: "EXPRESS",
    icon: SiExpress,
    color: "#000000",
    animation: "animate-float-1",
    translate: "lg:translate-y-0",
  },
  {
    name: "MONGODB",
    icon: SiMongodb,
    color: "#47A248",
    animation: "animate-float-2",
    translate: "lg:translate-y-12",
  },
  {
    name: "MYSQL",
    icon: SiMysql,
    color: "#4479A1",
    animation: "animate-float-3",
    translate: "lg:translate-y-4",
  },
  {
    name: "GIT",
    icon: FaGitAlt,
    color: "#F05032",
    animation: "animate-float-1",
    translate: "lg:translate-y-8",
  },
  {
    name: "GITHUB",
    icon: FaGithub,
    color: "#181717",
    animation: "animate-float-2",
    translate: "lg:translate-y-0",
  },
];



  return (
    <main className="w-full pt-20 bg-surface relative overflow-hidden">

      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="absolute bottom-[-20%] right-[-5%] w-[800px] h-[800px] bg-primary-fixed/30 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <div className="flex flex-col w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-section-gap max-w-container-max mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-16">

            <h1 className="font-display text-[72px] md:text-[96px] leading-[1.1] tracking-tight text-on-surface mb-10 relative">

              <span className="absolute -left-8 -top-12 text-primary-container/10 text-[180px] font-accent-script leading-none select-none z-[-1]">
                T
              </span>

             My
              <br />
              Technical
              <br />
             Stack.
            </h1>

            <div className="w-24 h-[3px] bg-primary-container mb-10 rounded-full"></div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-16 lg:mb-0">
              I build applications using a combination of programming languages,
  frontend technologies, backend tools, and databases. My focus is on
  writing clean code, solving problems, and continuously expanding my
  technical skills.
            </p>

            <div className="hidden lg:flex flex-col gap-4 mt-auto pb-4">

              <span className="font-label-caps text-[14px] tracking-[0.2em] text-outline-variant">
               
              </span>

              <div className="w-3/4 h-px bg-outline-variant/30"></div>

              <span className="font-body-md text-body-md text-on-surface-variant">
                
              </span>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:pl-12 pt-8">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 items-start">

              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center gap-4 group cursor-pointer ${skill.translate}`}
                >

                  <div className="w-24 h-24 flex items-center justify-center bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] group-hover:bg-white/60 group-hover:border-primary-container/40 group-hover:shadow-[0_12px_40px_rgba(74,124,119,0.12)] group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {(() => {
  const Icon = skill.icon;

  return (
    <Icon
      size={48}
      color={skill.color}
      className={`${skill.animation} relative z-10`}
    />
  );
})()}

                  </div>

                  <span className="font-label-caps text-[13px] tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>


      {/* FLOATING ANIMATION */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        .animate-float-1 {
          animation: float 5s ease-in-out infinite 0s;
        }

        .animate-float-2 {
          animation: float 7s ease-in-out infinite 1s;
        }

        .animate-float-3 {
          animation: float 6s ease-in-out infinite 2s;
        }
      `}</style>

    </main>
  );
}


export default Skills;