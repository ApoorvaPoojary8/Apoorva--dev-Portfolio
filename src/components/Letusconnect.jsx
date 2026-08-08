import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-surface py-20 border-t border-outline-variant">

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* About */}
          <div className="max-w-sm">

            <h2 className="font-display text-3xl text-on-surface mb-5">
              Apoorva
            </h2>

            <p className="font-body-md text-on-surface-variant">
              Building thoughtful digital experiences through software
              development, AI, and modern technologies.
            </p>

          </div>


          {/* Links */}
          <div className="grid grid-cols-2 gap-12">

            <div className="flex flex-col gap-4">

              <h4 className="font-label-caps text-label-caps text-on-surface">
                CONNECT
              </h4>

              <a
                href="https://www.linkedin.com/in/apoorvapoojary/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/ApoorvaPoojary8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://leetcode.com/u/apoorvapoojary/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                LeetCode
              </a>

            </div>

            <div className="flex flex-col gap-4">

              <h4 className="font-label-caps text-label-caps text-on-surface">
                CONTACT
              </h4>

              <a
                href="mailto:abheeshta.p@gmail.com"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Email
              </a>

            </div>

          </div>

        </div>


        <div className="mt-12 pt-8 border-t border-outline-variant">

          <p className="font-label-caps text-label-caps text-on-surface-variant/70">
            © 2026 APOORVA. ALL RIGHTS RESERVED.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;