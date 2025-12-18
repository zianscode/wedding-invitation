'use client'

import { useInView } from 'react-intersection-observer'
import { FiHeart } from 'react-icons/fi'

export default function Closing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className={`section-container text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <FiHeart className="text-primary-dusty-pink text-4xl mx-auto mb-8" />
        
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
          Terima Kasih
        </h2>
        
        <div className="text-lg text-gray-700 space-y-4 mb-12">
          <p>
            Atas kehadiran, doa, dan restu Bapak/Ibu/Saudara/i,
          </p>
          <p>
            kami mengucapkan terima kasih yang sebesar-besarnya.
          </p>
          <p className="font-serif text-xl text-primary-dusty-pink mt-8">
            Semoga kita semua selalu diberikan kesehatan, kebahagiaan,
          </p>
          <p className="font-serif text-xl text-primary-dusty-pink">
            dan keberkahan dalam setiap langkah kehidupan.
          </p>
        </div>
        
        <div className="my-12">
          <h3 className="text-5xl md:text-6xl font-handwriting text-gray-800 mb-4">
            Alexander & Chloe
          </h3>
          <div className="flex items-center justify-center space-x-6 mt-8">
            <div className="w-16 h-px bg-linear-to-r from-transparent to-accent-gold" />
            <FiHeart className="text-accent-gold text-xl" />
            <div className="w-16 h-px bg-linear-to-r from-accent-gold to-transparent" />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            &quot;Merupakan suatu kehormatan dan kebahagiaan bagi kami
          </p>
          <p className="text-gray-600">
            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.&quot;
          </p>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            © 2026 The Wedding of Alexander & Chloe. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}