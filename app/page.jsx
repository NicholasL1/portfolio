"use client";

// Components
import LandingPage from "@/components/LandingPage";
import Interact from "@/components/ui/interact";
import Coder from "@/components/ui/coder";
import { Skills } from "@/components/ui/skills";
import Experience from "@/app/experience/page";

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
        <div className="flex flex-col justify-center items-center pt-20 pb-20">
          {/* Experience */}
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Home;
