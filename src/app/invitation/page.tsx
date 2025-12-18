'use client'

import Opening from '../components/Opening'
import Profile from '../components/Profile'
import EventDetails from '../components/EventDetails'
import Countdown from '../components/Countdown'
import Gallery from '../components/Gallery'
import LoveStory from '../components/LoveStory'
import Closing from '../components/Closing'
import MusicPlayer from '../components/MusicPlayer'
import RSVP from '../components/RSVP'
import ScrollIndicator from '../components/ScrollIndicator'
import Header from '../components/Header'
import { weddingData } from '../utils/constants'

export default function InvitationPage() {
  return (
    <div className="relative">
      <ScrollIndicator />
      <Header />
      
      <div className="space-y-16 md:space-y-24 mt-32 md:mt-12">
        <Opening />
        <Profile couple={weddingData.couple} />
        <EventDetails events={weddingData.events} />
        <Countdown weddingDate={weddingData.weddingDate} />
        <Gallery photos={weddingData.galleryPhotos} />
        <LoveStory story={weddingData.loveStory} />
        <RSVP />
        <Closing />
      </div>
      
      <MusicPlayer />
    </div>
  )
}