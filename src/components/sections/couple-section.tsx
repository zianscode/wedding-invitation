"use client";

import { useInView } from "react-intersection-observer";
import { Couple } from "@/types";
import { FiHeart } from "react-icons/fi";
import Image from "next/image";

interface ProfileProps {
  couple: Couple;
}

export default function Profile({ couple }: ProfileProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="profile"
      ref={ref}
      className={`section-container transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiHeart className="text-primary-dusty-pink text-4xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Mempelai
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary-dusty-pink" />
            <FiHeart className="text-primary-dusty-pink text-sm" />
            <div className="w-12 h-px bg-linear-to-r from-primary-dusty-pink to-transparent" />
          </div>
          <p className="text-lg text-gray-600">
            Mempelai yang berbahagia
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16">
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative mb-6">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto bg-linear-to-br from-primary-cream to-primary-beige">
                <div className="relative w-full h-full">
                  <Image
                    src={couple.groom.photo}
                    alt={`Foto ${couple.groom.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 288px"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-accent-gold text-white px-6 py-1 rounded-full text-sm font-medium">
                Mempelai Pria
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {couple.groom.name}
            </h3>
            <p className="text-lg text-gray-700 mb-4">{couple.groom.fullName}</p>
            <div className="text-gray-600">
              <p>Putra dari:</p>
              <p className="font-medium">{couple.groom.father}</p>
              <p className="font-medium">&</p>
              <p className="font-medium">{couple.groom.mother}</p>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center animate-float">
            <div className="text-5xl font-handwriting text-primary-dusty-pink">
              &
            </div>
            <div className="h-48 w-px bg-linear-to-b from-transparent via-accent-gold to-transparent my-8" />
          </div>

          <div className="md:hidden my-8">
            <div className="text-4xl font-handwriting text-primary-dusty-pink">
              &
            </div>
          </div>

          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative mb-6">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto bg-linear-to-br from-primary-cream to-primary-dusty-pink/20">
                <div className="relative w-full h-full">
                  <Image
                    src={couple.bride.photo}
                    alt={`Foto ${couple.bride.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 288px"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary-dusty-pink text-white px-6 py-1 rounded-full text-sm font-medium">
                Mempelai Wanita
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {couple.bride.name}
            </h3>
            <p className="text-lg text-gray-700 mb-4">{couple.bride.fullName}</p>
            <div className="text-gray-600">
              <p>Putri dari:</p>
              <p className="font-medium">{couple.bride.father}</p>
              <p className="font-medium">&</p>
              <p className="font-medium">{couple.bride.mother}</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center p-6 bg-white/50 rounded-xl">
          <p className="text-gray-700">
            &quot;Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia
            tidak memegahkan diri dan tidak sombong. Ia tidak melakukan yang tidak
            sopan dan tidak mencari keuntungan diri sendiri.&quot;
          </p>
          <p className="text-gray-600 mt-2">(1 Korintus 13:4-5)</p>
        </div>
      </div>
    </section>
  );
}