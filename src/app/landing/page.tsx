"use client";

import { useRouter } from "next/navigation";
import { FiChevronDown, FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleOpenInvitation = () => {
    router.push("/invitation");
  };

  useEffect(() => {
    const createFlowerParticle = () => {
      const particle = document.createElement("div");
      particle.innerHTML = "❀";
      
      const size = Math.random() * 15 + 12;
      const startX = Math.random() * 100;
      const duration = Math.random() * 8 + 12;
      const delay = Math.random() * 3;
      const opacity = Math.random() * 0.3 + 0.4;
      
      const animations = ['floatDown', 'floatDownSmooth', 'gentleFall'];
      const animation = animations[Math.floor(Math.random() * animations.length)];
      
      particle.style.position = "fixed";
      particle.style.left = `${startX}vw`;
      particle.style.top = "-40px";
      particle.style.fontSize = `${size}px`;
      particle.style.opacity = `${opacity}`;
      particle.style.color = "rgba(255, 255, 255, 0.7)";
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "5";
      particle.style.textShadow = "0 1px 3px rgba(0,0,0,0.3)";
      particle.style.animation = `${animation} ${duration}s ease-in-out ${delay}s infinite`;
      particle.style.willChange = "transform, opacity";
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.style.opacity = "0";
          setTimeout(() => {
            if (particle.parentNode) {
              document.body.removeChild(particle);
            }
          }, 1000);
        }
      }, (duration + delay) * 1000);
    };

    const particleInterval = setInterval(() => {
      for (let i = 0; i < 2; i++) {
        createFlowerParticle();
      }
    }, 800);

    for (let i = 0; i < 5; i++) {
      setTimeout(() => createFlowerParticle(), i * 300);
    }

    return () => {
      clearInterval(particleInterval);
      const particles = document.querySelectorAll('[style*="animation: floatDown"], [style*="animation: floatDownSmooth"], [style*="animation: gentleFall"]');
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/landing/couple.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.85) contrast(1.1)",
          }}
        />
        
        <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/10 to-primary-cream/20" />
        
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-primary-cream/50 to-transparent" />
      </div>

      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-primary-dusty-pink/15 text-2xl animate-pulse">
          ❀
        </div>
        <div className="absolute top-1/3 right-1/3 text-accent-gold/15 text-3xl animate-ping" style={{ animationDelay: "0.5s" }}>
          ✿
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-primary-sage-green/15 text-2xl animate-pulse" style={{ animationDelay: "1s" }}>
          ❀
        </div>
        <div className="absolute top-1/2 right-1/4 text-accent-brown/15 text-3xl animate-pulse" style={{ animationDelay: "1.5s" }}>
          ✿
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
          <h3 className="text-lg md:text-xl text-white mb-2 tracking-[0.3em] font-serif animate-fade-down drop-shadow-lg">
            THE WEDDING OF
          </h3>
          
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-handwriting text-white animate-fade-up drop-shadow-2xl leading-tight">
              Alexander <br className="block md:hidden" />
              <span className="text-primary-dusty-pink mx-2">&</span> <br className="block md:hidden" />
              Chloe
            </h1>
          </div>

          <div className="w-32 h-1 bg-linear-to-r from-transparent via-accent-gold to-transparent mx-auto my-4 animate-scale-x" />
          
          <div className="space-y-2">
            <p
              className="text-2xl md:text-3xl text-white font-serif animate-fade-up font-light"
              style={{ animationDelay: "0.2s" }}
            >
              12 • 02 • 2026
            </p>
            <p
              className="text-lg md:text-xl text-white/90 font-sans animate-fade-up italic"
              style={{ animationDelay: "0.4s" }}
            >
              Grand Ballroom Hotel Majestic • Jakarta
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenInvitation}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          className="group relative px-8 py-4 mt-8 bg-linear-to-r from-primary-dusty-pink/90 to-primary-sage-green/90 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer border-2 border-white/30 hover:border-white/50 z-20"
        >
          <div
            className={`absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${
              isHovered ? "translate-x-full" : "-translate-x-full"
            }`}
          />

          <div
            className={`absolute inset-0 bg-black/20 rounded-full transition-opacity duration-150 ${
              isPressed ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="relative flex items-center justify-center space-x-3">
            <FiMail
              className={`text-white text-xl transition-all duration-300 ${
                isHovered ? "scale-110 -translate-y-0.5 rotate-12" : ""
              } ${isPressed ? "scale-95" : ""}`}
            />

            <span className="text-white text-lg font-medium tracking-wider">
              Buka Undangan
            </span>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isHovered ? "w-6 opacity-100" : "w-0 opacity-0"
              } ${isPressed ? "translate-x-1" : ""}`}
            >
              <svg
                className="w-5 h-5 text-white"
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
          
          {isHovered && (
            <>
              <div className="absolute -top-2 -left-2 text-accent-gold/50 text-lg animate-ping">
                ✿
              </div>
              <div className="absolute -top-2 -right-2 text-primary-dusty-pink/50 text-lg animate-ping" style={{ animationDelay: "0.2s" }}>
                ❀
              </div>
              <div className="absolute -bottom-2 -left-2 text-primary-sage-green/50 text-lg animate-ping" style={{ animationDelay: "0.4s" }}>
                ✿
              </div>
              <div className="absolute -bottom-2 -right-2 text-accent-gold/50 text-lg animate-ping" style={{ animationDelay: "0.6s" }}>
                ❀
              </div>
            </>
          )}
        </button>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center">
            <FiChevronDown className="text-accent-gold text-2xl" />
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 text-primary-dusty-pink/15 text-4xl animate-float hidden md:block z-5">
        ❦
      </div>
      <div className="absolute top-10 right-10 text-primary-sage-green/15 text-4xl animate-float hidden md:block z-5">
        ❦
      </div>
      <div className="absolute bottom-20 left-20 text-accent-gold/15 text-3xl animate-float z-5" style={{ animationDelay: "1s" }}>
        ✿
      </div>
      <div className="absolute bottom-20 right-20 text-accent-gold/15 text-3xl animate-float z-5" style={{ animationDelay: "2s" }}>
        ✿
      </div>
    </section>
  );
}