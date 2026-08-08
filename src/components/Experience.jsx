import React from "react";

function Experience() {
  return (
    <>
      <div className="flex flex-col w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto py-margin-desktop">

        {/* EXPERIENCE */}
        <div className="flex flex-col md:flex-row gap-section-gap mb-section-gap">

          {/* Left */}
          <div className="md:w-1/3 flex flex-col pt-8">
            <div className="sticky top-32">

              <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest mb-4 block">
                01 / Career Journey
              </span>

              <h1 className="font-display text-display text-on-surface mb-6">
                Experience.
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                
              </p>

            </div>
          </div>

          {/* Right */}
          <div className="md:w-2/3 flex flex-col relative pt-12 md:pt-32">

            <div className="absolute left-[15px] top-12 bottom-0 w-[1px] bg-outline-variant/30 hidden md:block"></div>

            {/* 3Skill */}
            <div className="relative pl-0 md:pl-16 mb-24 group">

              <div className="absolute left-[-5px] top-2 w-10 h-10 rounded-full bg-surface border border-outline-variant/30 hidden md:flex items-center justify-center z-10 transition-transform group-hover:scale-110 duration-300">
                <div className="w-3 h-3 rounded-full bg-primary-container"></div>
              </div>

              <div className="flex flex-col gap-2 mb-6">

                <span className="font-label-caps text-label-caps text-secondary uppercase bg-secondary-container px-3 py-1 rounded-full w-fit">
                  Mar 2026 — Apr 2026
                </span>

                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Web Developer Intern
                </h2>

                <h3 className="font-headline-md text-headline-md text-primary-container">
                  3Skill
                </h3>

              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full -mr-8 -mt-8"></div>

                <ul className="font-body-md text-body-md text-on-surface-variant space-y-4 relative z-10">

                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container mt-1 text-[20px]">
                      chevron_right
                    </span>

                    <span>
                      Architected and implemented a comprehensive Student Management System using a modern web stack.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container mt-1 text-[20px]">
                      chevron_right
                    </span>

                    <span>
                      Designed and deployed robust RESTful APIs to handle core CRUD operations, improving system efficiency.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container mt-1 text-[20px]">
                      chevron_right
                    </span>

                    <span>
                      Collaborated extensively within a cross-functional team utilizing Git for version control and CI/CD pipelines.
                    </span>
                  </li>

                </ul>

                <div className="flex flex-wrap gap-2 mt-8 relative z-10">

                  <span className="font-label-caps text-label-caps text-on-surface bg-surface-container px-4 py-2 rounded-lg">
                    REST APIs
                  </span>

                  <span className="font-label-caps text-label-caps text-on-surface bg-surface-container px-4 py-2 rounded-lg">
                    Git
                  </span>

                  <span className="font-label-caps text-label-caps text-on-surface bg-surface-container px-4 py-2 rounded-lg">
                    Web Dev
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>


        {/* Divider */}
        <div className="w-full h-[1px] bg-outline-variant/20 my-margin-desktop"></div>


        {/* EDUCATION */}
        <div className="flex flex-col md:flex-row gap-section-gap mt-margin-desktop pb-section-gap">

          {/* Left */}
          <div className="md:w-1/3 flex flex-col pt-8 order-1 md:order-2">

            <div className="sticky top-32">

              <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest mb-4 block">
                02 / Academic Foundation
              </span>

              <h1 className="font-display text-display text-on-surface mb-6">
                Education.
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                
              </p>

              <div className="w-full max-w-[320px]">
      <img
        src="/Study Girl.png"
        alt="Developer working"
        className="w-full h-auto object-contain"
      />
    </div>

            </div>

          </div>


          {/* Right */}
          <div className="md:w-2/3 flex flex-col relative pt-12 md:pt-32 order-2 md:order-1">

            <div className="absolute right-[15px] top-12 bottom-0 w-[1px] bg-outline-variant/30 hidden md:block"></div>


            {/* BE */}
            <div className="relative pr-0 md:pr-16 mb-24 group text-left md:text-right">

              <div className="absolute right-[-5px] top-2 w-10 h-10 rounded-full bg-surface border border-outline-variant/30 hidden md:flex items-center justify-center z-10 transition-transform group-hover:scale-110 duration-300">

                <div className="w-3 h-3 rounded-full bg-primary-container"></div>

              </div>


              <div className="flex flex-col md:items-end gap-2 mb-6">

                <span className="font-label-caps text-label-caps text-secondary uppercase bg-secondary-container px-3 py-1 rounded-full w-fit">
                  2023 — Present
                </span>

                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  B.E. Computer Science
                </h2>

                <h3 className="font-headline-md text-headline-md text-primary-container">
                  Canara Engineering College
                </h3>

              </div>


              <div className="bg-primary-container p-8 rounded-xl relative overflow-hidden group-hover:bg-primary transition-colors duration-300">

  {/* Decorative shape */}
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -ml-8 -mb-8"></div>

  <div className="font-body-md text-body-md text-white relative z-10">

    <div className="flex md:justify-end items-center gap-4 mb-4">

      {/* Grade */}
      <span className="font-headline-md text-headline-md text-white font-semibold">
        9.24
      </span>

      {/* Label */}
      <span className="font-label-caps text-label-caps text-white uppercase tracking-wider">
        Current SGPA
      </span>

    </div>

    <p className="md:text-right max-w-md ml-auto text-white/90">
    </p>

  </div>

</div>

            </div>


            {/* PU */}
            <div className="relative pr-0 md:pr-16 mb-24 group text-left md:text-right">

              <div className="absolute right-[-5px] top-2 w-10 h-10 rounded-full bg-surface border border-outline-variant/30 hidden md:flex items-center justify-center z-10 transition-transform group-hover:scale-110 duration-300">

                <div className="w-2 h-2 rounded-full bg-primary-container"></div>

              </div>


              <div className="flex flex-col md:items-end gap-2 mb-6">

                <span className="font-label-caps text-label-caps text-outline uppercase bg-surface-container-highest px-3 py-1 rounded-full w-fit">
                  2021 — 2023
                </span>

                <h2 className="font-headline-lg text-[40px] leading-[48px] font-semibold text-on-surface">
                  Pre-University (PCMB)
                </h2>

                <h3 className="font-headline-md text-[24px] text-primary-container">
                  Govt PU College for Girls , Carstreet.
                </h3>

              </div>


              <div className="bg-primary-container p-8 rounded-xl relative overflow-hidden group-hover:bg-primary transition-colors duration-300">

  {/* Decorative shape */}
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -ml-8 -mb-8"></div>

  <div className="font-body-md text-body-md text-white relative z-10">

    <div className="flex md:justify-end items-center gap-4 mb-4">

      {/* Grade */}
      <span className="font-headline-md text-headline-md text-white font-semibold">
        94 %
      </span>

      {/* Label */}
      <span className="font-label-caps text-label-caps text-white uppercase tracking-wider">
        Percentage
      </span>

    </div>

    <p className="md:text-right max-w-md ml-auto text-white/90">
    </p>

  </div>

</div>

            </div>


            {/* School */}
            <div className="relative pr-0 md:pr-16 group text-left md:text-right">

              <div className="absolute right-[-5px] top-2 w-10 h-10 rounded-full bg-surface border border-outline-variant/30 hidden md:flex items-center justify-center z-10 transition-transform group-hover:scale-110 duration-300">

                <div className="w-2 h-2 rounded-full bg-primary-container"></div>

              </div>


              <div className="flex flex-col md:items-end gap-2 mb-6">

                <span className="font-label-caps text-label-caps text-outline uppercase bg-surface-container-highest px-3 py-1 rounded-full w-fit">
                  Up to 2021
                </span>

                <h2 className="font-headline-lg text-[40px] leading-[48px] font-semibold text-on-surface">
                  Higher Secondary Education 
                </h2>

                <h3 className="font-headline-md text-[24px] text-primary-container">
                  SDM Mangala Jyothi Integrated School , Vamanjoor.
                </h3>

              </div>


              <div className="bg-primary-container p-8 rounded-xl relative overflow-hidden group-hover:bg-primary transition-colors duration-300">

  {/* Decorative shape */}
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -ml-8 -mb-8"></div>

  <div className="font-body-md text-body-md text-white relative z-10">

    <div className="flex md:justify-end items-center gap-4 mb-4">

      {/* Grade */}
      <span className="font-headline-md text-headline-md text-white font-semibold">
        93 %
      </span>

      {/* Label */}
      <span className="font-label-caps text-label-caps text-white uppercase tracking-wider">
        Percentage
      </span>

    </div>

    <p className="md:text-right max-w-md ml-auto text-white/90">
    </p>

  </div>

</div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Experience;