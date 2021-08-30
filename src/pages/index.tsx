import React from "react";
import PageLayout from "@src/components/layous/Page";
import HomeHero from "@src/components/sections/HomeHero";
import HowItWorks from "@src/components/sections/HowItWorks";

const HomePage = () => {
  return (
    <PageLayout>
      <HomeHero />
      <HowItWorks />
    </PageLayout>
  );
};

export default HomePage;
