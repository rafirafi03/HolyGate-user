import React from 'react'

const LatestMusic = () => {
  return (
    <section className="bg-[#4c7380] py-14 px-6 md:px-20 text-center text-white">
  <h2 className="text-2xl md:text-5xl font-semibold mb-10">Latest Music</h2>

  <div className="space-y-5  mx-auto">

    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="bg-white text-black rounded-md py-3 px-4 flex justify-between items-center shadow"
      >
        <p className="text-sm md:text-base">Music List November</p>
        <button className="bg-[#4c7380] text-white px-4 py-2 rounded-sm">Download</button>
      </div>
    ))}

  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center space-x-3 mt-8">
    <span className="w-3 h-3 border  w-8 h-8">1</span>
    <span className="w-3 h-3 border  w-8 h-8">2</span>

    <span className="w-3 h-3 border  w-8 h-8">3</span>
    <span className="w-3 h-3 border  w-8 h-8">...</span>

  </div>
</section>

  )
}

export default LatestMusic
