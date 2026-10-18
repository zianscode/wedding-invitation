"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { GalleryPhoto } from "@/types";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import Image from "next/image";

interface GalleryProps {
  photos: GalleryPhoto[];
}

export default function Gallery({ photos }: GalleryProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className={`section-container transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FiHeart className="text-primary-dusty-pink text-4xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Galeri Kenangan
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary-dusty-pink" />
            <FiHeart className="text-primary-dusty-pink text-sm" />
            <div className="w-12 h-px bg-linear-to-r from-primary-dusty-pink to-transparent" />
          </div>
          <p className="text-lg text-gray-600">
            Momen berharga dalam perjalanan cinta kami
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-white/50 mb-8">
          <div className="relative h-96 md:h-128 rounded-xl overflow-hidden shadow-lg">
            {photos[currentIndex] && (
              <div className="relative w-full h-full">
                <Image
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={currentIndex === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
              <p className="text-gray-700 text-sm font-medium">
                {currentIndex + 1} / {photos.length}
              </p>
            </div>

            {photos.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                  aria-label="Foto sebelumnya"
                >
                  <FiChevronLeft className="text-gray-700 text-xl" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                  aria-label="Foto berikutnya"
                >
                  <FiChevronRight className="text-gray-700 text-xl" />
                </button>
              </>
            )}
          </div>

          <div className="text-center mt-6">
            <p className="text-lg font-serif text-gray-700 italic">
              {photos[currentIndex]?.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`relative h-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-primary-dusty-pink ring-offset-2 scale-105"
                  : "hover:scale-105 hover:ring-2 hover:ring-primary-dusty-pink/50 opacity-80 hover:opacity-100"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-linear-to-t from-primary-dusty-pink/20 to-transparent' 
                    : 'bg-linear-to-t from-black/30 to-transparent'
                }`} />
              </div>

              {index === currentIndex && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary-dusty-pink rounded-full animate-pulse shadow-lg" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}