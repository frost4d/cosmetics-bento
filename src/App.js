import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import FeaturedSection from "./sections/FeaturedSection";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BehindSection from "./sections/BehindSection";

function App() {
  return (
    <Box sx={{
      overflowX: "hidden",
    }}>
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturedSection />
      <BehindSection />
      <Footer />
    </Box>
  );
}

export default App;