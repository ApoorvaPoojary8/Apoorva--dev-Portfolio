import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full pt-20 bg-transparent"
    >
      <div className="flex flex-col w-full relative min-h-[calc(100vh-80px)] justify-center">

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">

      {/* IMAGE */}
<div className="w-full max-w-md flex-shrink-0 flex justify-center">
  <img
    src="/image.jpg"
    alt="Apoorva"
    className="w-full h-auto max-h-[500px] object-contain rounded-3xl shadow-lg"
  />
</div>

          {/* CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            {/* OPEN TO WORK */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container-highest mb-6">

              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm font-medium text-on-surface-variant font-label-caps">
                Open to work
              </span>

            </div>

            {/* TITLE */}
            <h2 className="font-bold text-display text-on-surface mb-6 font-display tracking-tight">
              Let's Work Together
            </h2>

            {/* EMAIL */}
            <a
              href="mailto:abheeshta.p@gmail.com"
              className="inline-flex items-center gap-3 text-2xl font-display text-primary hover:text-primary-container transition-colors mb-8 group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                mail
              </span>

              apoorvapoojary8@gmail.com
            </a>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-6">

              {/* GitHub */}
              <a
                href="https://github.com/ApoorvaPoojary8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant hover:border-primary-container"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/apoorvapoojary/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant hover:border-primary-container"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.75 1.75 0 1 1 6.5 4.2a1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.2c0-3.1-4-2.9-4 0V19H9V9h3v1.4c1.4-2.6 7-2.8 7 2.5V19z" />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/apoorvapoojary/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant hover:border-primary-container font-label-caps text-xs tracking-wider"
              >
                LC
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;