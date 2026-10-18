'use client'

import { useInView } from 'react-intersection-observer'
import { LoveStoryStep } from '@/types'
import { FiHeart } from 'react-icons/fi'

interface LoveStoryProps {
  story: LoveStoryStep[]
}

export default function LoveStory({ story }: LoveStoryProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className={`section-container bg-white/30 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-title">Cerita Cinta Kami</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-primary-dusty-pink/20 via-accent-gold/30 to-primary-sage-green/20 hidden md:block" />
          
          {story.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:flex items-center justify-center w-1/2">
                <div className={`relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="w-6 h-6 rounded-full bg-linear-to-r from-primary-dusty-pink to-accent-gold border-4 border-white shadow-lg" />
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary-dusty-pink/30" />
                </div>
              </div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div 
                  className={`bg-white rounded-2xl shadow-lg p-6 card-hover animate-fade-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <FiHeart className="text-primary-dusty-pink mr-3" />
                    <span className="text-accent-gold font-medium">{step.date}</span>
                  </div>
                  <h3 className="text-xl font-serif text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 font-serif">
          &quot;Setiap bab dalam cerita kami membawa kami lebih dekat, dan kini kami siap menulis bab terindah bersama.&quot;
        </p>
      </div>
    </section>
  )
}