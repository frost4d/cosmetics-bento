import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger, Flip);

const images = [
  process.env.PUBLIC_URL + "/assets/bento/image1.webp",
  process.env.PUBLIC_URL + "/assets/bento/image2.webp",
  process.env.PUBLIC_URL + "/assets/bento/image3.webp",
  process.env.PUBLIC_URL + "/assets/bento/image4.webp",
  process.env.PUBLIC_URL + "/assets/bento/image5.webp",
  process.env.PUBLIC_URL + "/assets/bento/image6.webp",
  process.env.PUBLIC_URL + "/assets/bento/image7.webp",
  process.env.PUBLIC_URL + "/assets/bento/image8.webp",
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let flipCtx;
    let resizeTimeout;

    const createTween = () => {
      const galleryElement = containerRef.current.querySelector(".gallery");
      const galleryItems = galleryElement.querySelectorAll(".gallery__item");

      if (flipCtx) flipCtx.revert();
      galleryElement.classList.remove("gallery--final");

      flipCtx = gsap.context(() => {
        // temporarily add final class to capture state
        galleryElement.classList.add("gallery--final");
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove("gallery--final");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "power2.out", // ✅ lighter easing
          duration: 0.8, 
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: galleryElement.parentNode,
          },
        });

        // morph grid into fullscreen hero
        tl.add(flip)
  .to([".hero-title", ".section"], {
    opacity: 1,
    y: 0,
    duration: 0.3,
    ease: "power1.out",
    stagger: 0.1
  }, ">");

        return () => gsap.set(galleryItems, { clearProps: "all" });
      }, containerRef);
    };

    createTween();
    // ✅ debounce resize listener
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createTween, 250);
    };

    window.addEventListener("resize", createTween);

    return () => {
      window.removeEventListener("resize", createTween);
      if (flipCtx) flipCtx.revert();
    };
  }, []);

  return (
    <>
      <section className="gallery-wrap" ref={containerRef}>
        <div className="gallery gallery--bento" id="gallery-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery__item"
              id={i === 2 ? "hero-image" : undefined}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </div>

        {/* Title overlay */}
        <div className="hero-title">
          <img 
    src={process.env.PUBLIC_URL + "/assets/bento/frostadLogo.png"} 
    alt="Frostad Logo" 
    className="hero-logo"
  />
          <p>Elevating beauty into an art form — where innovation meets elegance, 
    and every shade tells your story.</p>
        </div>
      </section>

      {/* <div className="section">
        <h2>Discover the Essence of Radiance</h2>
        <p>
          At <strong>Frostad Cosmetics</strong>, beauty is more than skin deep —
          it’s a celebration of individuality, confidence, and self‑expression.
          Our products are crafted with precision and care, blending nature’s
          finest ingredients with cutting‑edge science to bring out your most
          luminous self.
        </p>

        <p>
          Each formula is designed to nourish and enhance, from our silky
          foundations that melt seamlessly into the skin to our hydrating lip
          tints that deliver a burst of color and moisture. We believe makeup
          should feel as good as it looks — lightweight, breathable, and
          effortlessly radiant.
        </p>

        <p>
          Our skincare line complements your daily ritual with rejuvenating
          serums, botanical cleansers, and restorative creams that awaken your
          natural glow. Every drop is infused with vitamins, antioxidants, and
          plant extracts sourced sustainably from around the world.
        </p>

        <p>
          Whether you’re preparing for a night out or embracing a fresh,
          minimalist look, Frostad Cosmetics empowers you to define beauty on
          your own terms. Our commitment to cruelty‑free, eco‑friendly
          production ensures that every product you use supports both your skin
          and the planet.
        </p>

        <p>
          Step into a world where artistry meets innovation — where every shade,
          texture, and scent tells a story of elegance and empowerment. Because
          when you feel radiant, you inspire others to shine too.
        </p>

        <p>
          Explore our latest collections, discover your signature look, and
          experience the transformative power of cosmetics that care. Frostad
          Cosmetics — <em>crafted for confidence, designed for you.</em>
        </p>
      </div> */}
    </>
  );
}
