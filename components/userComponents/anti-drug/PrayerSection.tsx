import React from 'react'

const PrayerSection = () => {
  return (
    <section className=" py-12 px-6 text-center">

  {/* Top Line */}
  <p className="text-lg mb-6 italic py-5 pb-18">
    ✢ Join our Recovery & Faith Support Group: Every Thursday, 7:30 PM
  </p>

  {/* Heading */}
  <h3 className="text-[#567C8D] text-2xl font-playfair font-md mb-10">
    A Prayer for Freedom
  </h3>

  {/* Image + Prayer Text Overlay */}
  <div className="relative w-full max-w-md mx-auto">
    <img
      src="/hand-round-image.png"
      alt="prayer"
      className="w-full  shadow"
    />

    {/* Text overlay centered on image */}
    <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-white text-lg font-medium leading-relaxed">
      Lord Jesus, You came to <br />
      set the captives free. <br />
      Break every chain of <br />
      addiction, heal the <br />
      wounded hearts, <br />
      and restore hope to <br />
      those who are lost. <br />
      Let Your light guide <br />
      them to freedom, <br />
      peace, and purpose. <br />
      Amen.
    </p>
  </div>

</section>

  )
}

export default PrayerSection
