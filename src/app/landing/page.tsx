"use client";

import { useRouter } from "next/navigation";
import { FiChevronDown, FiMail } from "react-icons/fi";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenInvitation = () => {
    router.push("/invitation");
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/couple.jpg)",
            filter: "brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/40 to-primary-cream" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <h3 className="text-lg md:text-xl text-gray-700 mb-2 tracking-widest font-serif animate-fade-down">
            THE WEDDING OF
          </h3>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-handwriting text-gray-800 mb-4 animate-fade-up">
            Alexander <span className="text-primary-dusty-pink">&</span> Chloe
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-accent-gold to-transparent mx-auto my-6 animate-scale-x" />
          <p
            className="text-lg md:text-xl text-gray-700 font-serif animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            12 • 02 • 2026
          </p>
        </div>

        <button
          onClick={handleOpenInvitation}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative px-5 py-2.5 mt-8 bg-linear-to-r from-primary-dusty-pink to-primary-sage-green rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
              isHovered ? "translate-x-full" : "-translate-x-full"
            }`}
          />

          <div className="relative flex items-center justify-center space-x-2">
            <FiMail
              className={`text-white text-lg transition-all duration-300 ${
                isHovered ? "scale-110 -translate-y-0.5" : ""
              }`}
            />

            <span className="text-white text-base font-medium tracking-wide">
              Buka Undangan
            </span>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isHovered ? "w-4 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>

          <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/50 transition-colors duration-300" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mb-8">
          <FiChevronDown className="text-accent-gold text-2xl" />
        </div>
      </div>
    </section>
  );
}
