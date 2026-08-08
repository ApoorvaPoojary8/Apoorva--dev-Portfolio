import React, { useEffect, useRef } from "react";

function CursorBubbles() {
  const containerRef = useRef(null);
  const butterflyRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const butterfly = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const lastBubbleTime = useRef(0);

  useEffect(() => {
    /* =========================
       MOUSE POSITION
    ========================= */

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      /* =========================
         GREEN BUBBLES
      ========================= */

      const now = Date.now();

      if (now - lastBubbleTime.current < 70) {
        return;
      }

      lastBubbleTime.current = now;

      const bubble = document.createElement("span");

      bubble.className = "cursor-bubble";

      const size = Math.random() * 12 + 6;

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;

      bubble.style.setProperty(
        "--move-x",
        `${(Math.random() - 0.5) * 80}px`
      );

      bubble.style.setProperty(
        "--move-y",
        `${-(Math.random() * 80 + 30)}px`
      );

      containerRef.current.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 900);
    };


    /* =========================
       BUTTERFLY SMOOTH FOLLOW
    ========================= */

    const animateButterfly = () => {
      const targetX = mouse.current.x + 25;
      const targetY = mouse.current.y + 25;

      butterfly.current.x +=
        (targetX - butterfly.current.x) * 0.06;

      butterfly.current.y +=
        (targetY - butterfly.current.y) * 0.06;

      if (butterflyRef.current) {
        butterflyRef.current.style.left =
          `${butterfly.current.x}px`;

        butterflyRef.current.style.top =
          `${butterfly.current.y}px`;
      }

      requestAnimationFrame(animateButterfly);
    };


    window.addEventListener("mousemove", handleMouseMove);

    const animationFrame = requestAnimationFrame(
      animateButterfly
    );


    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);


  return (
    <>
      {/* Butterfly */}

      <img
        ref={butterflyRef}
        src="/monarch-butterfly.webp"
        alt=""
        className="cursor-butterfly"
      />


      {/* Green bubbles */}

      <div
        ref={containerRef}
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      />
    </>
  );
}

export default CursorBubbles;