import React, { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [showName, setShowName] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Start letters after all balls finish
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 1800);

    // Fade out
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 5000);

    // Remove loading screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5700);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F7F2] transition-all duration-700 ${
        exit ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">

        {/* =========================
            7 BALLS
        ========================= */}

        <div className="relative w-[300px] h-[140px] flex items-end justify-center gap-4">

          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              className={`loading-ball ball-${index}`}
            />
          ))}

        </div>


        {/* =========================
            APOORVA
        ========================= */}

        <div
          className={`flex mt-2 transition-opacity duration-500 ${
            showName ? "opacity-100" : "opacity-0"
          }`}
        >
          {"APOORVA".split("").map((letter, index) => (
            <span
              key={index}
              className="loading-letter font-display text-4xl md:text-6xl tracking-[0.18em] text-on-surface"
              style={{
                animationDelay: `${index * 0.35}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

      </div>


      {/* =========================
          ANIMATIONS
      ========================= */}

      <style>{`

        /* -------------------------
           BALL APPEAR
        ------------------------- */

        @keyframes ballAppear {

          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.4);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }


        /* -------------------------
           BALL BOUNCE
        ------------------------- */

        @keyframes ballBounce {

          0% {
            transform: translateY(0);
          }

          30% {
            transform: translateY(-45px);
          }

          55% {
            transform: translateY(0);
          }

          70% {
            transform: translateY(-20px);
          }

          85% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }

        }


        /* -------------------------
           BALL STYLE
        ------------------------- */

        .loading-ball {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: block;

          opacity: 0;

          animation:
            ballAppear 0.45s ease-out forwards,
            ballBounce 1.3s ease-in-out forwards;
        }


        /* -------------------------
           7 DIFFERENT BALLS
        ------------------------- */

        .ball-0 {
          background: #3F6F69;
          animation-delay: 0s, 0.45s;
        }

        .ball-1 {
          background: #4A7C77;
          animation-delay: 0.18s, 0.63s;
        }

        .ball-2 {
          background: #5D8F84;
          animation-delay: 0.36s, 0.81s;
        }

        .ball-3 {
          background: #6B9080;
          animation-delay: 0.54s, 0.99s;
        }

        .ball-4 {
          background: #77A69A;
          animation-delay: 0.72s, 1.17s;
        }

        .ball-5 {
          background: #8FB8A8;
          animation-delay: 0.90s, 1.35s;
        }

        .ball-6 {
          background: #A8C8BA;
          animation-delay: 1.08s, 1.53s;
        }


        /* -------------------------
           LETTER ANIMATION
        ------------------------- */

        @keyframes letterAppear {

          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.8);
          }

          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.05);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }


        .loading-letter {
          opacity: 0;

          animation:
            letterAppear 0.65s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

      `}</style>
    </div>
  );
}

export default LoadingScreen;