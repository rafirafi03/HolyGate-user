import NextEventSection from '@/components/common/NextEventSection'
import AntiDrugHeroSection from '@/components/userComponents/anti-drug/AntiDrugHeroSection'
import AntiDrugMission from '@/components/userComponents/anti-drug/AntiDrugMission'
import PrayerSection from '@/components/userComponents/anti-drug/PrayerSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <AntiDrugHeroSection/>
        <AntiDrugMission/>
        <PrayerSection/>
        <NextEventSection/>
    </div>
  )
}

export default page
