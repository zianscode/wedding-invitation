'use client'

import { useInView } from 'react-intersection-observer'
import { Event } from '@/types'
import { FiCalendar, FiClock, FiMapPin, FiExternalLink, FiHeart } from 'react-icons/fi'

interface EventDetailsProps {
  events: Event[]
}

export default function EventDetails({ events }: EventDetailsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="events" 
      ref={ref}
      className={`section-container transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiHeart className="text-primary-dusty-pink text-4xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Detail Acara
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary-dusty-pink" />
            <FiHeart className="text-primary-dusty-pink text-sm" />
            <div className="w-12 h-px bg-linear-to-r from-primary-dusty-pink to-transparent" />
          </div>
          <p className="text-lg text-gray-600">
            Mohon kehadiran Bapak/Ibu/Saudara/i dalam acara kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {events.map((event, index) => (
            <div 
              key={event.name}
              className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-gray-800 mb-2">{event.name}</h3>
                <div className="w-16 h-1 bg-accent-gold mx-auto" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-cream p-3 rounded-full">
                    <FiCalendar className="text-accent-gold text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tanggal</p>
                    <p className="text-gray-800 font-medium">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-cream p-3 rounded-full">
                    <FiClock className="text-accent-gold text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Waktu</p>
                    <p className="text-gray-800 font-medium">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-cream p-3 rounded-full">
                    <FiMapPin className="text-accent-gold text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lokasi</p>
                    <p className="text-gray-800 font-medium">{event.venue}</p>
                    <p className="text-gray-600 text-sm mt-1">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full mt-8 flex items-center justify-center space-x-2"
              >
                <FiMapPin />
                <span>Lihat Lokasi</span>
                <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto p-6 bg-white/50 rounded-xl">
          <p className="text-center text-gray-700">
            *Dress code: Pastel Colors / Formal Attire
          </p>
          <p className="text-center text-gray-600 text-sm mt-2">
            Kehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan kebahagiaan bagi kami
          </p>
        </div>
      </div>
    </section>
  )
}