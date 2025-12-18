"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiCalendar, FiImage, FiMail } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Mempelai",
      href: "#profile",
      icon: <FiUser className="text-lg" />,
    },
    {
      label: "Acara",
      href: "#events",
      icon: <FiCalendar className="text-lg" />,
    },
    {
      label: "Galeri",
      href: "#gallery",
      icon: <FiImage className="text-lg" />,
    },
    { label: "RSVP", href: "#rsvp", icon: <FiMail className="text-lg" /> },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-100/50"
          : "bg-white/85 backdrop-blur-sm shadow-lg border border-gray-200/30"
      }`}
    >
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-8 py-4">
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => router.push("/landing")}
          >
            <div className="relative">
              <IoMdHeart className="text-primary-dusty-pink text-2xl animate-pulse" />
              <div className="absolute inset-0 bg-primary-dusty-pink/20 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-gray-800 leading-tight">
                A&S
              </span>
              <span className="text-xs text-gray-500 font-light">Wedding</span>
            </div>
          </div>

          <nav className="flex items-center space-x-2 ml-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="group relative bg-white/90 backdrop-blur-sm p-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label={item.label}
              >
                <div className="relative z-10 text-gray-600 group-hover:text-primary-dusty-pink transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-white to-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-primary-dusty-pink/30 group-hover:animate-pulse transition-all duration-300"></div>

                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                  {item.label}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="md:hidden rounded-full">
        <div
          className={`flex items-center justify-between px-6 py-3.5 transition-all duration-300 rounded-full ${
            isMenuOpen
              ? "bg-white/98 backdrop-blur-md shadow-xl"
              : "bg-white/85 backdrop-blur-sm shadow-lg"
          }`}
        >
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => router.push("/landing")}
          >
            <IoMdHeart className="text-primary-dusty-pink text-2xl" />
            <span className="font-serif text-lg font-bold text-gray-800">
              A&S
            </span>
          </div>

          <button
            className="group relative bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            <div className="relative w-5 h-5">
              <div
                className={`absolute top-1 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-2" : ""
                }`}
              ></div>
              <div
                className={`absolute top-2 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`absolute top-3 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-2" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100/50 py-6 px-5">
            <div className="grid grid-cols-5 gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <div className="relative bg-white/95 backdrop-blur-sm p-3.5 rounded-full shadow-md hover:shadow-xl mb-2 transition-all duration-300 group-hover:bg-white">
                    <div className="text-gray-600 group-hover:text-primary-dusty-pink transition-colors duration-300">
                      {item.icon}
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-primary-dusty-pink/30 transition-all duration-300"></div>
                  </div>

                  <span className="text-xs text-gray-700 group-hover:text-primary-dusty-pink font-medium transition-colors duration-300">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/50">
              <p className="text-center text-xs text-gray-500 font-light">
                Dengan penuh rasa syukur dan sukacita di dalam Tuhan
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
