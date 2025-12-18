"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiCalendar,
  FiImage,
  FiMail,
  FiMusic,
  FiPause,
} from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { useAudio } from "../context/AudioContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const { isPlaying, isLoading, togglePlay } = useAudio();

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
  };

  return (
    <>
      {/* Header Utama */}
      <header
        className={`fixed top-7 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-100/50"
            : "bg-white/85 backdrop-blur-sm shadow-lg border border-gray-200/30"
        }`}
      >
        {/* Desktop Header dengan Music Player */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between px-4 py-3 min-w-15">
            {/* Logo Section */}
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
                <span className="text-xs text-gray-500 font-light">
                  Wedding
                </span>
              </div>
            </div>

            {/* Navigation Menu Items dengan spacing yang lebih renggang */}
            <nav className="flex items-center space-x-4 mx-12">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="group relative bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={item.label}
                >
                  <div className="relative z-10 text-gray-600 group-hover:text-primary-dusty-pink transition-colors duration-300">
                    {item.icon}
                  </div>

                  <div className="absolute inset-0 bg-linear-to-br from-white to-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-primary-dusty-pink/30 group-hover:animate-pulse transition-all duration-300"></div>

                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></div>
                  </div>
                </button>
              ))}
            </nav>

            {/* Music Player Section dengan spacing yang lebih baik */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={togglePlay}
                  disabled={isLoading}
                  className={`group relative bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isLoading ? "cursor-not-allowed opacity-70" : ""
                  }`}
                  aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
                >
                  {/* Icon dengan warna tetap primary-dusty-pink dan hover effect yang benar */}
                  <div className="relative z-10">
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-dusty-pink border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                      <FiPause className="text-lg text-primary-dusty-pink group-hover:text-primary-dusty-pink transition-colors duration-300" />
                    ) : (
                      <FiMusic className="text-lg text-primary-dusty-pink group-hover:text-primary-dusty-pink transition-colors duration-300" />
                    )}
                  </div>

                  {/* Hover Effect - hanya background, tidak mempengaruhi icon */}
                  <div className="absolute inset-0 bg-linear-to-br from-white to-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Playing Indicator Ring - hanya untuk visual, tidak mempengaruhi icon */}
                  {isPlaying && (
                    <div className="absolute inset-0 border-2 border-primary-dusty-pink/50 rounded-full animate-pulse"></div>
                  )}
                </button>

                {/* Playing Indicator Dot */}
                {isPlaying && (
                  <div className="absolute -top-1 -right-1 w-3 h-3">
                    <div className="absolute inset-0 bg-primary-dusty-pink rounded-full animate-ping opacity-75" />
                    <div className="absolute inset-0 bg-primary-dusty-pink rounded-full" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header - Hanya Logo dan Music Player, TANPA tombol menu */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-6 py-3 min-w-60">
            {/* Mobile Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => router.push("/landing")}
            >
              <IoMdHeart className="text-primary-dusty-pink text-2xl" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-gray-800">
                  A&S
                </span>
                <span className="text-xs text-gray-500 font-light">
                  Wedding
                </span>
              </div>
            </div>

            {/* Hanya Music Player, TANPA tombol menu */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className={`group relative bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
                isLoading ? "cursor-not-allowed opacity-70" : ""
              }`}
              aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
            >
              <div className="relative z-10">
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-primary-dusty-pink border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <FiPause className="text-primary-dusty-pink group-hover:text-primary-dusty-pink transition-colors duration-300" />
                ) : (
                  <FiMusic className="text-primary-dusty-pink group-hover:text-primary-dusty-pink transition-colors duration-300" />
                )}
              </div>

              {/* Playing Indicator for Mobile */}
              {isPlaying && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-dusty-pink rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Bar - Tetap ada di bawah */}
      <nav className="fixed md:hidden bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-lg rounded-3xl border border-gray-200/50 shadow-lg min-w-90">
        <div className="px-6 py-4">
          <div className="grid grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-md hover:shadow-xl mb-2 transition-all duration-300 group-hover:bg-white">
                  <div className="text-gray-600 group-hover:text-primary-dusty-pink transition-colors duration-300">
                    {item.icon}
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-primary-dusty-pink/30 transition-all duration-300"></div>
                </div>

                <span className="text-xs text-gray-700 group-hover:text-primary-dusty-pink font-medium transition-colors duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}