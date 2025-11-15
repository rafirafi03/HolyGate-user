import React from 'react'

const MusicHeroSection = () => {
  return (
    <section
      className="
        relative 
        h-[60vh]           /* Mobile height */
        sm:h-[75vh]        /* Small tablets */
        md:h-[90vh]        /* Tablets & small laptops */
        lg:h-[100vh]       /* Desktop full screen */
        bg-cover bg-center 
        flex flex-col items-center justify-center 
        text-white
      "
      style={{ backgroundImage: "url('/music-hero.png')" }}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-8 leading-snug">
          Music
        </h1>
      </div>
    </section>
  )
}

export default MusicHeroSection
