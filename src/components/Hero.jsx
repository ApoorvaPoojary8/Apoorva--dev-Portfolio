import React from "react";

function Hero() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-surface text-on-surface">

      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Abstract Shape Left */}
        <svg
          className="absolute top-[-10%] left-[-5%] w-[40vw] max-w-[600px] h-auto text-primary-fixed/20 animate-[pulse_10s_ease-in-out_infinite]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >

          <path
            d="M42.7,-73.4C56.9,-65.4,70.9,-55.9,80.7,-42.6C90.5,-29.3,96.1,-12.3,93.4,3.7C90.8,19.8,80,34.8,68.2,48.2C56.3,61.7,43.5,73.5,28.6,80.6C13.7,87.7,-3.3,90,-19.9,85.6C-36.5,81.1,-52.7,69.9,-64.7,55.9C-76.8,41.9,-84.7,25,-86.7,7.6C-88.8,-9.7,-85.1,-27.5,-75.4,-41.8C-65.7,-56.1,-50,-66.9,-34.5,-74.3C-19.1,-81.8,-3.8,-85.9,11.5,-83.4C26.8,-80.9,42.2,-71.8,42.7,-73.4Z"
            fill="currentColor"
            transform="translate(100 100)"
          />

        </svg>


        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1c1b1b 1px, transparent 1px), linear-gradient(to bottom, #1c1b1b 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

      </div>


      {/* Main Hero Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center py-section-gap relative z-10">


        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 pr-0 lg:pr-12 relative z-20 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">


          {/* Greeting */}
          <div className="flex flex-col gap-4">

            <div className="inline-flex items-center gap-2">

              <span className="w-8 h-[1px] bg-primary"></span>

              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Software Developer
              </span>

            </div>


            {/* Heading */}
            <h1 className="font-display text-headline-lg-mobile md:text-display text-on-surface leading-tight">

              Hello, I'm

              <br className="hidden md:block" />

              <span className="font-accent-script text-primary italic font-normal tracking-normal relative inline-block">

                Apoorva.

                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary-fixed-dim"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >

                  <path
                    d="M0,5 Q50,15 100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />

                </svg>

              </span>

            </h1>

          </div>


          {/* Description */}
          <div className="flex flex-col gap-6 max-w-lg border-l-2 border-primary-fixed/50 pl-6 py-2">

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Building useful digital experiences, AI-powered products &
              scalable web applications.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant/80">
              I enjoy turning ideas into practical products through full-stack
              development, backend engineering and AI.
            </p>

          </div>


          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">

            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
              href="#work"
            >
              VIEW MY WORK
            </a>
<a
  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-on-surface border border-outline rounded-full font-label-caps text-label-caps hover:bg-surface-container hover:border-primary transition-all duration-300 group"
  href="/Apoorva_Resume.pdf"
  download
>
  DOWNLOAD RESUME

  <span className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">
    download
  </span>
</a>

          </div>


          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-outline-variant/30">

            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Follow
            </span>

            <div className="flex gap-4">


              {/* Github */}
              <a
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high"
                href="#"
              >

                <svg
                  className="w-5 h-5 fill-currentColor"
                  viewBox="0 0 24 24"
                >

                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>

                </svg>

              </a>


              {/* LinkedIn */}
              <a
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high"
                href="#"
              >

                <svg
                  className="w-5 h-5 fill-currentColor"
                  viewBox="0 0 24 24"
                >

                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>

                </svg>

              </a>


              {/* LeetCode */}
              <a
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high font-label-caps text-[14px]"
                href="#"
              >
                LC
              </a>

            </div>

          </div>

        </div>


        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">


          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary-fixed/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] mix-blend-multiply blur-2xl z-0 transition-transform duration-1000 hover:scale-105"></div>


          {/* Organic Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[85%] bg-primary-container text-on-primary-container rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0 rotate-12 origin-center shadow-2xl"></div>


          {/* Portrait */}
          <div className="relative z-10 w-[75%] max-w-[450px] aspect-[0.67] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(28,27,27,0.15)] ring-1 ring-outline/10">

            <img
              alt="Apoorva Portrait"
              className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              src="/public/WhatsApp Image 2026-08-08 at 12.59.30 PM.jpeg"
            />

            <div className="absolute inset-0 border border-surface-container-lowest/20 rounded-2xl pointer-events-none"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none mix-blend-overlay"></div>

          </div>


          {/* Floating Tech Tags */}
          <div className="absolute z-20 flex flex-col gap-4 inset-0 pointer-events-none">

            <span className="absolute top-[10%] left-[5%] bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface font-label-caps text-label-caps px-4 py-2 rounded-full shadow-sm border border-outline-variant/30 animate-[float_4s_ease-in-out_infinite_alternate]">
              Java
            </span>

            <span className="absolute top-[30%] right-[-5%] bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container font-label-caps text-label-caps px-4 py-2 rounded-full shadow-sm animate-[float_5s_ease-in-out_infinite_alternate_0.5s]">
              React
            </span>

            <span className="absolute bottom-[25%] left-[-10%] bg-primary/90 text-on-primary backdrop-blur-sm font-label-caps text-label-caps px-4 py-2 rounded-full shadow-sm animate-[float_6s_ease-in-out_infinite_alternate_1s]">
              Node.js
            </span>

            <span className="absolute bottom-[40%] right-[10%] bg-tertiary-container/80 text-on-tertiary-container backdrop-blur-sm font-label-caps text-label-caps px-4 py-2 rounded-full shadow-sm animate-[float_4.5s_ease-in-out_infinite_alternate_0.2s]">
              SQL
            </span>

            <span className="absolute bottom-[10%] right-[30%] bg-surface-variant/90 text-on-surface-variant backdrop-blur-sm font-label-caps text-label-caps px-4 py-2 rounded-full shadow-sm animate-[float_5.5s_ease-in-out_infinite_alternate_0.8s]">
              AI
            </span>

          </div>

        </div>

      </div>


      {/* Scroll Indicator */}
      <div className="hidden lg:flex absolute right-margin-desktop bottom-1/4 translate-y-1/2 flex-col items-center gap-4 z-30 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">

        <span className="writing-mode-vertical-rl font-label-caps text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mix-blend-difference">
          Scroll to explore
        </span>

        <div className="w-[1px] h-12 bg-on-surface-variant/30 relative overflow-hidden">

          <div className="w-full h-full bg-primary absolute top-0 left-0 animate-[scrollLine_2s_ease-in-out_infinite]"></div>

        </div>

      </div>


      {/* Animations */}
      <style>{`

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes float {
          from {
            transform: translateY(0px) rotate(0deg);
          }

          to {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }

          50% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(100%);
          }
        }

        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }

      `}</style>

    </div>
  );
}

export default Hero;