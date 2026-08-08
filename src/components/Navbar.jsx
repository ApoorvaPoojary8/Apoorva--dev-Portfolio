import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">

      <div className="h-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <img
            alt="Apoorva Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvpMkIrmMPQNoihNePyZQXI-jcllLapyJY3plD5J2kbZub2C41vidnvEgx3FoV2JIyeUkMGV1uYhicGPy4TiDoCH3trLiGRQQ2ZnXeJu1LUKzFMnzjrtTmXB57o5kf_8jMmEdeks34qrKJCJvr1vozQ_Go664BGXa8tgcnUSXUNefZjsLoxi57K5TsXGB56O16k2hiC_Kr6pzgyAe3sCaGJp7opiaycug0cs-4JZAVDsDUPBWGkm-mIQ"
          />

          <span className="font-headline-md text-headline-md tracking-tight text-on-surface select-none">
            Apoorva
          </span>

        </div>


        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8"
          data-active-classes="text-primary font-bold"
        >

          <a
            aria-current="page"
            className="transition-colors uppercase text-primary font-bold"
            data-path="home"
            href="#"
          >
            Home
          </a>

          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="about"
            href="#"
          >
            About
          </a>

          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="skills"
            href="#"
          >
            Skills
          </a>

          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="projects"
            href="#"
          >
            Projects
          </a>

          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="experience"
            href="#"
          >
            Experience
          </a>

          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="achievements"
            href="#"
          >
            Achievements
          </a>

          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="contact"
            href="#"
          >
            Contact
          </a>

        </nav>


        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            className="hidden md:flex items-center px-6 py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"
            href="#"
          >
            LET'S TALK

            <span className="material-symbols-outlined ml-1 text-[16px]">
              north_east
            </span>
          </a>


          {/* Mobile Menu */}
          <div className="lg:hidden p-2 text-on-surface cursor-pointer">

            <span className="material-symbols-outlined">
              menu
            </span>

          </div>


          {/* Profile Icon */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">

            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;