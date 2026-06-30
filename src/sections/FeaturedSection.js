import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "+=50%",
          scrub: true,
          pin: false,
        },
      });

      // Heading fade/slide in
      tl.from(".featured-heading", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power1.out",
      });

      // Subtext fade in
      tl.from(".featured-subtext", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power1.out",
      }, ">");

      // Product cards stagger in
      tl.from(".product-card", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power1.out",
        stagger: 0.3,
      }, ">");

      // Background parallax (scroll-based, not fixed)
      gsap.to(sectionRef.current, {
        backgroundPositionY: "60%", // 👈 smooth scroll effect
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
    <section className="featured-section" ref={sectionRef}>
      <h2 className="featured-heading">Our Signature Collection</h2>
      <p className="featured-subtext">
        Experience the artistry of Frostad Cosmetics — bold, radiant, and unforgettable.
      </p>

      <div className="product-grid">
        <div className="product-card">
          <img src={process.env.PUBLIC_URL + "/assets/bento/image1.jpg"} alt="Velvet Luxe Lipstick" />
          <h3>Velvet Luxe Lipstick</h3>
          <p>Rich pigments, silky texture, and long-lasting wear.</p>
        </div>

        <div className="product-card">
          <img src={process.env.PUBLIC_URL + "/assets/bento/image2.jpg"} alt="Foundation" />
          <h3>Radiance Foundation</h3>
          <p>Lightweight coverage that enhances your natural glow.</p>
        </div>

        <div className="product-card">
          <img src={process.env.PUBLIC_URL + "/assets/bento/image4.jpg"} alt="Serum" />
          <h3>Botanical Glow Serum</h3>
          <p>Infused with antioxidants to rejuvenate and hydrate.</p>
        </div>
      </div>
    </section>
  );
}
