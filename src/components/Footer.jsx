import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-section-gap border-t border-outline-variant/30">

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-12">


        {/* Left */}
        <div className="max-w-sm">

          <div className="flex items-center gap-3 mb-6">

            <img
              alt="Logo"
              className="h-6 w-auto"
              src="/public/WhatsApp Image 2026-08-08 at 12.59.30 PM.jpeg"
            />

            <span className="font-headline-md text-[24px] text-on-surface">
              Apoorva
            </span>

          </div>

          <p className="font-body-md text-on-surface-variant">
            Engineering thoughtful digital experiences at the intersection
            of technical rigor and editorial design.
          </p>

        </div>


        {/* Right */}
        <div className="grid grid-cols-2 gap-12">


          {/* Connect */}
          <div className="flex flex-col gap-4">

            <h4 className="font-label-caps text-label-caps text-on-surface">
              CONNECT
            </h4>

            <a
              className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              LinkedIn
            </a>

            <a
              className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              GitHub
            </a>

          </div>


          {/* Legal */}
          <div className="flex flex-col gap-4">

            <h4 className="font-label-caps text-label-caps text-on-surface">
              LEGAL
            </h4>

            <a
              className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mt-12 pt-12 border-t border-outline-variant/10 font-label-caps text-label-caps text-on-surface-variant">

        © 2024 APOORVA. ALL RIGHTS RESERVED.

      </div>

    </footer>
  );
}

export default Footer;