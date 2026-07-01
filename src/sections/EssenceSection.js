import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./EssenceSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function EssenceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section is near viewport
          end: "bottom 100%",
          scrub: true,
        },
      });

      // Heading animation
      tl.from(".essence-section h2", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
      });

      // Paragraphs stagger in
      tl.from(".essence-section p", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power1.out",
        stagger: 0.3,
      }, ">");

      // Optional subtle background scroll
      gsap.to(sectionRef.current, {
        backgroundPositionY: "30%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="essence-section" ref={sectionRef}>
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
        minimalist look, Frostad Cosmetics empowers you to define beauty on your
        own terms. Our commitment to cruelty‑free, eco‑friendly production
        ensures that every product you use supports both your skin and the
        planet.
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
    </section>
  );
}
