import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background effect
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "New Products", id: "new" },
    { label: "Eye Makeup", id: "eye makeup" },
    { label: "Face Makeup", id: "face makeup" },
    { label: "Lip Makeup", id: "lip makeup" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: scrolled
          ? "rgba(0, 0, 0, 0.7)"
          : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/assets/Frostad1.png"}
          alt="Frostad Cosmetics Logo"
          sx={{ width: 140, cursor: "pointer" }}
          onClick={() => handleScrollTo("home")}
        />

        {/* Nav Buttons */}
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              sx={{
                color: "#000000",
                position: "relative",
                mx: 1,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 0,
                  height: "2px",
                  bottom: 4,
                  left: 0,
                  backgroundColor: "#00e5ff",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;