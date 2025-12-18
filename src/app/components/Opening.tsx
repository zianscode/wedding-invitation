'use client'

import { useInView } from 'react-intersection-observer'
import { weddingData } from '@/app/utils/constants'
import { FiHeart} from 'react-icons/fi'

export default function Opening() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const quote = weddingData.quotes[0]

  return (
    <section 
      ref={ref}
      className={`section-container transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >

      <div className="max-w-3xl mx-auto text-center">
        <div className="floral-divider">
          <FiHeart className="inline mx-2" />
          <FiHeart className="inline mx-2" />
          <FiHeart className="inline mx-2" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-8">
          Dengan penuh rasa syukur dan sukacita di dalam Tuhan, kami mengundang Bapak/Ibu/Saudara/i
        </h2>
        
        <div className="my-12">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            untuk menghadiri acara pemberkatan pernikahan putra-putri kami yang akan dilaksanakan pada:
          </p>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <p className="text-xl font-serif text-gray-800 mb-6">
              {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
            </p>
            <p className="text-3xl md:text-4xl font-handwriting text-primary-dusty-pink mb-4">
              14 Desember 2026
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary-sage-green/10 rounded-xl animate-fade-up">
          <FiHeart className="text-primary-dusty-pink text-xl mx-auto mb-4" />
          <p className="text-gray-700 italic font-serif">
            &quot;{quote}&quot;
          </p>
        </div>
      </div>
    </section>
  )
}