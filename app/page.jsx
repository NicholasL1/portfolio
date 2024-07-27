"use client";

import Image from "next/image";

// Components
import LandingPage from "@/components/LandingPage";
import Interact from "@/components/ui/interact";
import Coder from "@/components/ui/coder";
import { Skills } from "@/components/ui/skills";
import Experience from "@/app/experience/page";

// York image
{
  /* <img
src="https://cdn.builder.io/api/v1/image/assets/TEMP/525034fbb59c0a2f32001ee5572aefb8696ebb273ce5147f418df23d4ed3182d?"
alt="York"
className="max-w-none"
loading="lazy"
/> */
}

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Landing page text */}
            <LandingPage />
            {/* btn and socials */}
            <Interact />
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:ml-4">
            {/* Animated img */}
            <Coder />
          </div>
        </div>
        <div>
          {/* Skills rotating carousel */}
          <Skills />
        </div>
        <div className="flex flex-col item-center pt-20 pb-20" id="about"></div>
        {/* TODO (Maybe): Add images to the sides of the timeline and fade in animation*/}
        <div className="flex flex-col items-center pt-20 pb-20" id="experience">
          {/* Experience */}
          {/* <div className="w-1/6"></div> */}
          <Experience />
          {/* <div className="w-1/6"></div> */}
        </div>
        <div className="flex flex-col item-center pt-20 pb-20" id="work"></div>
        <div
          className="flex flex-col item-center pt-20 pb-20"
          id="contact"
        ></div>
      </div>
    </section>
  );
};

export default Home;
