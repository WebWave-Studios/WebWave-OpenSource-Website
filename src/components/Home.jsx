import { useEffect, useState } from "react";
import Home_Background from "../assets/home.jpg";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const sectors = [
    "Startups",
    "Real Estate",
    "Healthcare",
    "Consultants",
    "E-commerce",
    "FinTech",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
          src={Home_Background}
          className="h-full w-full object-cover opacity-70"
          alt="Continental Advertising Background"
        />
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black/30 to-transparent" />
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

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <div className="mt-24 md:mt-32 lg:mt-40 flex flex-col items-start">
          {/* Main Logo/Title */}
          <h1
            className="text-4xl w-full md:text-5xl text-center lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-950 mb-8"
            data-aos="fade-down"
          >
            WebWave Studios
          </h1>

          {/* Description */}
          <div
            className="text-center text-lg md:text-xl lg:text-2xl max-w-full text-gray-300 font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We empower businesses across diverse industries—including startups,
            healthcare, real estate, and e-commerce—with comprehensive
            development services tailored to their unique needs. Whether you
            have a mobile app concept, an idea for a web platform, or need a
            digital transformation solution, we are your agile partner every
            step of the way. Our expertise ensures that each project—be it for a
            tech startup, a healthcare provider, a property management team, or
            an online retail brand—is crafted to meet industry-specific goals
            and drive measurable impact.
            <br />
            <br />
            <p className="font-bold">
              Build Your MVP in Less than{" "}
              <span className="text-3xl">60 days</span>
            </p>
          </div>

          <div
            className="relative text-center w-full text-2xl md:text-4xl lg:text-5xl max-w-full mt-12 md:mt-16 lg:mt-20 font-medium"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900">
              Product Development for{" "}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-6xl"
              >
                {sectors[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Horizontal Carousel */}
      {/* <div className="w-full h-64">
        <h1 className="font-bold text-2xl">Our Tech Stack</h1>
        <div className="m-auto overflow-hidden relative w-auto">
          <ul className="flex w-[calc(250px*14)] animate-scroll">
            <li className="w-[250px]">Image 1</li>
            <li className="w-[250px]">Image 2</li>
            <li className="w-[250px]">Image 3</li>
            <li className="w-[250px]">Image 4</li>
            <li className="w-[250px]">Image 5</li>
            <li className="w-[250px]">Image 6</li>
            <li className="w-[250px]">Image 7</li>
            <li className="w-[250px]">Image 8</li>
            <li className="w-[250px]">Image 9</li>
            <li className="w-[250px]">Image 10</li>
            <li className="w-[250px]">Image 11</li>
            <li className="w-[250px]">Image 12</li>
            <li className="w-[250px]">Image 13</li>
            <li className="w-[250px]">Image 14</li>
          </ul>
        </div>
      </div> */}
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes moveVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        @keyframes moveHorizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
