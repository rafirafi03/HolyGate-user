import React from 'react'

const AntiDrugHeroSection = () => {
  return (
    <section
      className="relative h-100 md:min-h-[110vh] bg-cover bg-center flex items-center justify-end text-[#1a3c63]"
      style={{ backgroundImage: "url('/anti-drug-photo.png')" }}
    >
      {/* Overlay (optional subtle fade on left for better contrast) */}
      <div className="absolute "></div>

      {/* Text Content (aligned right side) */}
      <div className="relative bottom-18 z-10 w-full md:w-[55%]  md:px-16 py-2 text-center md:text-left">
      <h2 className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-6xl
  xl:text-8xl
  text-white
  mb-6
  font-playfair
  font-semibold
">
  Faith Over Addiction
</h2>

<div className="flex flex-col space-y-7 
                items-center justify-center 
                sm:w-20 md:w-100
                text-center">

  <p className="text-xl sm:text-xl md:text-xl text-center text-white leading-5">
    “So if the Son sets you free, you will <br />
    be free indeed.” — John 8:36
  </p>

</div>

      </div>
      
    </section>
  )
}

export default AntiDrugHeroSection
