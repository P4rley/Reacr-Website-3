import React, { useState } from "react";
import Footer from "../components/Footer/Index";
import HeroSection from "../components/HeroSection/Index";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Info from "../components/InfoSection/Index";
import Navbar from "../components/Navbar/Index";
import Services from "../components/Services/Index";
import Sidebar from "../components/Sidebar/Index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
