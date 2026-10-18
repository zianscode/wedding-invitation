'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import { FiHeart } from 'react-icons/fi'

interface CountdownProps {
  weddingDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown({ weddingDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const wedding = new Date(weddingDate)
      const now = new Date()
      
      const days = differenceInDays(wedding, now)
      const hours = differenceInHours(wedding, now) % 24
      const minutes = differenceInMinutes(wedding, now) % 60
      const seconds = differenceInSeconds(wedding, now) % 60

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const countdownItems = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <section 
      ref={ref}
      className={`section-container bg-linear-to-br from-primary-cream via-white to-primary-sage-green/20 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-title">Menuju Hari Bahagia</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {countdownItems.map((item) => (
            <div 
              key={item.label}
              className="text-center animate-fade-up"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <FiHeart className="text-primary-dusty-pink text-2xl mx-auto mb-4 animate-pulse" />
          <p className="text-lg text-gray-700 font-serif">
            &quot;Tak sabar menanti hari bahagia kami bersama orang-orang terkasih&quot;
          </p>
          <p className="text-gray-600 mt-2">
            {new Date(weddingDate).toLocaleDateString('id-ID', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </section>
  )
}