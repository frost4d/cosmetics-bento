import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BehindSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function BehindSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "+=50%",
          scrub: true,
        },
      });

      // Heading animation
      tl.from(".behind-heading", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power4.out",
      });

      // Paragraphs stagger in
      tl.from(".behind-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.4,
      }, ">");

      // Background scroll animation (instead of fixed parallax)
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
    <section className="behind-section" ref={sectionRef}>
      <h2 className="behind-heading">Behind the Beauty</h2>
      <p className="behind-text">
        Every Frostad creation begins with a spark of inspiration — drawn from art, nature, and the vibrant energy of our community.
      </p>
      <p className="behind-text">
        Our artisans blend rare botanicals with cutting‑edge science, ensuring each product is not only luxurious but also sustainable.
      </p>
      <p className="behind-text">
        From the first silky touch to the radiant finish, Frostad is more than cosmetics — it’s a ritual of confidence and self‑expression.
      </p>
      <p className="behind-text">
        Join us in redefining beauty: bold, conscious, unforgettable.
      </p>
    </section>
  );
}
