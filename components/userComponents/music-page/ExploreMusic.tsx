import React from 'react'

const ExploreMusic = () => {
  return (
    <section className="bg-[#f5f0eb] py-16 px-6 md:px-20 text-center">

  <h2 className="text-2xl text-[#4c7380] md:text-3xl font-semibold mb-14">
    Explore the Music Department
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex flex-col items-center space-y-3">

        <div className="w-40 h-36 md:w-58 md:h-50 bg-white shadow rounded-md flex items-center justify-center">
          <img src="/song-label.png" alt="music-img" className="w-full h-full object-cover" />
        </div>

        <p className="font-semibold text-base">Lorem Ipsum</p>
        <button className='text-blue-600 '>Learn more</button>
      </div>
    ))}

  </div>
</section>

  )
}

export default ExploreMusic
