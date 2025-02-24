import React from "react";
import { Hero } from "./components/hero.jsx";
import HoverImageLinks from "./components/HoverImageLinks.jsx";
import HowItWorks from "./components/howItWorks.jsx";
import Features from "./components/features.jsx";
import { HireMe } from "./components/hireMe.jsx";
import PageTransition from "./utils/transition.js";
import Footer from "./components/footer.jsx";

const Page = () => {
  return (
    <PageTransition>
      <Hero />
      <HoverImageLinks />
      <Features />
      <HowItWorks />
      <HireMe />
      <Footer />
    </PageTransition>

  );
};

export default Page;
