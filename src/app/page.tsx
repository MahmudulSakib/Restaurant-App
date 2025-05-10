import React from "react";

import Navbar from "./components/Navbar";
import AboutUs from "./ui/AboutUs";
import Chef from "./ui/Chef";
import FindUs from "./ui/FindUs";
import Footer from "./ui/Footer";
import Gallery from "./ui/Gallery";
import Header from "./ui/Header";
import Intro from "./ui/Intro";
import Laurels from "./ui/Laurels";
import Menu from "./ui/Menu";

const Home = () => {
  return (
    <div className="relative z-0">
      {/* Fixed background image */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat z-[-1]" />

      {/* All content overlays above */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <AboutUs />
        <Menu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
