import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side: Brand */}
        <div className="footer-section brand">
          <h3 className="footer-logo">Frostad Cosmetics</h3>
          <p className="footer-tagline">Crafted for confidence, designed for you.</p>
        </div>

        {/* Middle: Explore */}
        <div className="footer-section">
          <h4>Explore</h4>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#collections">Collections</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Right: Connect */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="mailto:info@frostadcosmetics.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Frostad Cosmetics. All rights reserved.</p>
      </div>
    </footer>
  );
}
