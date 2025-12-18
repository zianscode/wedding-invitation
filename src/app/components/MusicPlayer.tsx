'use client'

import { FiMusic, FiPlay, FiPause } from 'react-icons/fi'
import { useState } from 'react'
import { useAudio } from '../context/AudioContext'

export default function MusicPlayer() {
  const { isPlaying, isLoading, togglePlay } = useAudio()
  const [showPlayer, setShowPlayer] = useState(true)

  return (
    <>
      {showPlayer ? (
        <div className="fixed bottom-4 right-4 z-40 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center space-x-3">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                isLoading 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-primary-dusty-pink text-white hover:bg-primary-sage-green'
              }`}
              aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <FiPause className="text-lg" />
              ) : (
                <FiPlay className="text-lg" />
              )}
            </button>
            
            <button
              onClick={() => setShowPlayer(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Sembunyikan pemutar musik"
            >
              <span className="text-gray-700 text-sm">×</span>
            </button>
          </div>
          
          {isPlaying && (
            <div className="absolute -top-2 -right-2 w-4 h-4">
              <div className="absolute inset-0 bg-primary-dusty-pink rounded-full animate-ping" />
              <div className="absolute inset-0 bg-primary-dusty-pink rounded-full" />
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setShowPlayer(true)}
          className="fixed bottom-4 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 hover:bg-white transition-colors"
          aria-label="Tampilkan pemutar musik"
        >
          <FiMusic className="text-primary-dusty-pink" />
        </button>
      )}
    </>
  )
}