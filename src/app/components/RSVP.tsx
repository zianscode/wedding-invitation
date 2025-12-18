'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiHeart, FiUser, FiMail, FiMessageCircle, FiCheck } from 'react-icons/fi'

export default function RSVP() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      id="rsvp"
      ref={ref}
      className={`section-container transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FiHeart className="text-primary-dusty-pink text-4xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            RSVP
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary-dusty-pink" />
            <FiHeart className="text-primary-dusty-pink text-sm" />
            <div className="w-12 h-px bg-linear-to-r from-primary-dusty-pink to-transparent" />
          </div>
          <p className="text-lg text-gray-600">
            Mohon konfirmasi kehadiran Anda
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-white/50">
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="flex items-center text-gray-700 font-medium mb-2">
              <FiUser className="mr-2 text-primary-dusty-pink" />
              Nama Lengkap <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-dusty-pink focus:ring-2 focus:ring-primary-dusty-pink/20 outline-none transition-all duration-300"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="flex items-center text-gray-700 font-medium mb-2">
              <FiMail className="mr-2 text-primary-dusty-pink" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-dusty-pink focus:ring-2 focus:ring-primary-dusty-pink/20 outline-none transition-all duration-300"
              placeholder="nama@gmail.com"
            />
          </div>

          {/* Attendance Select */}
          <div className="mb-6">
            <label htmlFor="attendance" className="flex items-center text-gray-700 font-medium mb-2">
              <FiCheck className="mr-2 text-primary-dusty-pink" />
              Konfirmasi Kehadiran <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="attendance"
              name="attendance"
              value={formData.attendance}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-dusty-pink focus:ring-2 focus:ring-primary-dusty-pink/20 outline-none transition-all duration-300 bg-white"
            >
              <option value="">Pilih konfirmasi kehadiran</option>
              <option value="hadir">Ya, saya akan hadir</option>
              <option value="tidak-hadir">Maaf, saya tidak bisa hadir</option>
              <option value="masih-ragu">Masih belum yakin</option>
            </select>
          </div>

          {/* Number of Guests */}
          {formData.attendance === 'hadir' && (
            <div className="mb-6 animate-fade-up">
              <label htmlFor="guests" className="flex items-center text-gray-700 font-medium mb-2">
                <FiUser className="mr-2 text-primary-dusty-pink" />
                Jumlah Tamu
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-dusty-pink focus:ring-2 focus:ring-primary-dusty-pink/20 outline-none transition-all duration-300 bg-white"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
                <option value="5">5+ Orang</option>
              </select>
            </div>
          )}

          {/* Message Textarea */}
          <div className="mb-8">
            <label htmlFor="message" className="flex items-center text-gray-700 font-medium mb-2">
              <FiMessageCircle className="mr-2 text-primary-dusty-pink" />
              Ucapan & Doa
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-dusty-pink focus:ring-2 focus:ring-primary-dusty-pink/20 outline-none transition-all duration-300 resize-none"
              placeholder="Tulis ucapan dan doa untuk kami..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-4 rounded-lg font-medium text-white transition-all duration-300 ${
              isSubmitted 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-linear-to-r from-primary-dusty-pink to-primary-sage-green hover:shadow-xl hover:scale-105'
            }`}
          >
            {isSubmitted ? (
              <span className="flex items-center justify-center">
                <FiCheck className="mr-2" />
                Terima Kasih!
              </span>
            ) : (
              'Kirim Konfirmasi'
            )}
          </button>
        </form>

        {/* Thank You Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">
            Terima kasih atas konfirmasi kehadiran Anda. Kehadiran dan doa restu Anda sangat berarti bagi kami.
          </p>
        </div>
      </div>
    </section>
  )
}