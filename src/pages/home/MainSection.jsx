import React from "react";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import ExploreSection from "./ExploreSection";
import IconBlockHome from "./IconBlockHome";

export default function MainSection() {
  return (
    <div className="max-w-340 mx-auto w-full my-10 px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <Featured />
      <ExploreSection />
      <IconBlockHome />
    </div>
  );
}
