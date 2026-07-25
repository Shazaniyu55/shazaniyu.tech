"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Image slider for a project card.
 *
 * Props:
 *  - images:   array of image URLs (local like "/projects/royal-1.png" or remote https)
 *  - name:     project name (used for alt text / aria labels)
 *  - autoPlay: auto-advance slides (default true)
 *  - interval: ms between auto-advances (default 4500)
 */
export default function ProjectSlider({
  images = [],
  name = "",
  autoPlay = true,
  interval = 4500,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const count = images.length;

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Autoplay (pauses on hover / when tab hidden)
  useEffect(() => {
    if (!autoPlay || paused || count <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, count, interval, next]);

  if (count === 0) return null;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      className="pslider"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="pslider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} screenshot ${i + 1} of ${count}`}
            className="pslider-img"
            loading="lazy"
            draggable="false"
            onError={(e) => e.currentTarget.classList.add("is-broken")}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="pslider-nav prev"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="pslider-nav next"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="pslider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`pslider-dot ${i === index ? "active" : ""}`}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <span className="pslider-count">
            {index + 1}/{count}
          </span>
        </>
      )}
    </div>
  );
}