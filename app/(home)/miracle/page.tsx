import MiracleCard from '@/components/userComponents/miracle/MiracleCard'
import MiracleForm from '@/components/userComponents/miracle/MiracleForm'
import MiracleHero from '@/components/userComponents/miracle/MiracleHero'
import MiracleIntro from '@/components/userComponents/miracle/MiracleIntro'
import React from 'react'

const page = () => {
  return (
    <div>
      <MiracleHero/>
      <MiracleIntro/>
      <MiracleCard/>
      <MiracleForm/>    
    </div>
  )
}

export default page
