import AboutBanner from "@/components/About/AboutBanner";
import Health from "@/components/About/Health";
import OurTeam from "@/components/About/OurTeam";
import Newsletter from "@/components/news/Newsletter";
import React from "react";

const About = () => {
  return (
    <>
      <AboutBanner />
      <Health />
      <OurTeam />
      <Newsletter />
    </>
  );
};

export default About;
