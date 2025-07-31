import React from "react";
import HoverImageLinks from "./components/HoverImageLinks.jsx";
import HowItWorks from "./components/howItWorks.jsx";
import Features from "./components/features.jsx";
import { HireMe } from "./components/hireMe.jsx";
import PageTransition from "./utils/transition.js";
import Footer from "./components/footer.jsx";
import Menu from "./components/menu/Menu.js";
import  Landing  from "./components/Landing.tsx"

const Page = () => {
  return (
    <PageTransition>
      <Landing />
      <Menu />
      <HoverImageLinks />
      <Features />
      <HowItWorks />
      <HireMe />
      <Footer />
    </PageTransition>

  );
};

export default Page;
