// import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StoryCard = ({ title, value }) => (
  <div className="bg-gray-900 rounded-lg p-10 min-w-full shadow-lg hover:outline hover:outline-blue-500">
    <h3 className="text-white text-4xl font-normal">{title}</h3>
    <p className="text-white text-xl font-extralight mt-4">{value}</p>
  </div>
);

const Stories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const stories = [
    { title: "5+", value: "Clients We Worked With" },
    { title: "2+", value: "Operational Countries" },
    { title: "10,000+", value: "Active Marketplace Users" },
    { title: "10+", value: "Team Strength" },
    { title: "15+", value: "SaaS Products" },
    { title: "30+", value: "Supported Start ups" },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black/30 to-blue-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-blue-950" />
      </div>

      {/* Animated lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"
          style={{ animation: "moveVertical 8s linear infinite" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-500/20 to-transparent"
          style={{ animation: "moveHorizontal 8s linear infinite" }}
        />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col px-6 md:px-12 lg:px-24 items-center justify-center">
        {/* Hero Section */}
        <div className="flex flex-col items-start">
          {/* Main Logo/Title */}
          <h1
            className="text-4xl w-full md:text-5xl text-center lg:text-6xl font-bold bg-clip-text text-white mb-20"
            data-aos="fade-down"
          >
            Our Milestones
          </h1>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            {stories.map((story, index) => (
              <StoryCard key={index} title={story.title} value={story.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
