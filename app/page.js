"use client"
import Image from "next/image";
import { SparklesCore } from "./components/ui/sparkles";
import Hero from "./components/hero";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import Footer from "./components/Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  // Split text animation
  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  // Shimmer animation for the gradient
  const underlineAnimation = {
    scaleX: [0, 1.2, 0.8, 1],  // Add more variations in scaling
    x: ["-150%", "-100%", "-50%", "0%", "50%", "100%", "150%",], // Smooth out the movement with intermediate steps
    opacity: [0, 1, 0.5, 1], // Opacity variation to create a pulsating effect
    backgroundColor: ["#00c6ff", "#ff4b99", "#00c6ff"], // Color transition for dynamic effect
    transition: {
      duration: 3,  // Increase the duration for a more fluid animation
      repeat: Infinity,  // Keep the animation repeating indefinitely
      ease: "easeInOut", // Smooth easing for a more natural feel
      times: [0, 0.25, 0.75, 1],  // Control where each step happens in the animation cycle
    }
  };


  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img1.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          className="w-full h-full object-cover"
        />
      </div>


      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-sm">
        {/* Particle effect background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-10 animate-pulse" />
        </div>

        <div className="w-full flex flex-col items-center justify-center overflow-hidden px-4">
          {/* Main heading with split letter animation */}
          <div className="relative flex justify-center">
            <motion.h1 className="md:text-7xl text-3xl lg:text-9xl font-bold font-nunito text-center text-white relative z-20 flex">
              {"Gadgetry".split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="w-full max-w-4xl relative py-12">
            {/* Enhanced gradient underline */}
            <div className="relative mt-4">
              <motion.div
                className="absolute inset-0 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-[20%] opacity-75"
                animate={underlineAnimation}
              />
              <div className="mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[70%]" />
            </div>

            {/* Animated subheading with typing effect */}
            <motion.p
              className="md:text-xl text-xl lg:text-2xl font-bold font-nunito text-center text-white/90 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Shop Smarter, Live Better
            </motion.p>

            {/* Enhanced CTA button */}
            <motion.div
              className="mt-12 flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"
                  initial={{ x: "100%" }}
                  animate={{ x: isHovered ? "0%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </span>
              </button>

              {/* Scroll indicator */}
              <motion.div
                className="text-white/50 flex flex-col items-center gap-2 mt-8 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced radial gradient mask */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
        </div>
      </div>
      <Hero />
    </div>
  );
}