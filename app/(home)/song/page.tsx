import ExploreMusic from '@/components/userComponents/music-page/ExploreMusic'
import IntroductionSection from '@/components/userComponents/music-page/IntroductionSection'
import LatestMusic from '@/components/userComponents/music-page/LatestMusic'
import MusicHeroSection from '@/components/userComponents/music-page/MusicHeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <MusicHeroSection/>
      <IntroductionSection/>
      <LatestMusic/>
      <ExploreMusic/>
    </div>
  )
}

export default page
