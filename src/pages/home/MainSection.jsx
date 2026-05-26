import React from "react";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import ExploreSection from "./ExploreSection";

export default function MainSection() {
  return (
    <div className=" my-10 px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <Featured />
      <ExploreSection />
    </div>
  );
}
