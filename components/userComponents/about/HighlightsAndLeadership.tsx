import React from "react";

const HighlightsAndLeadership = () => {
  return (
    <div className="w-full bg-[#f7f2ef] py-20 px-6 md:px-16">

      {/* Highlight Section (Top Questions + Logo Row) */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">

          {/* Card 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <p className="text-sm md:text-base leading-tight">who was jesus<br />human mother ?</p>
              <p className="font-semibold text-base md:text-lg mt-1">MARIYAM</p>
            </div>
            <img src="/Mariyam-photo.png" className="w-48 h-auto " />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <p className="text-sm md:text-base leading-tight">who was jesus<br />human mother ?</p>
              <p className="font-semibold text-base md:text-lg mt-1">MARIYAM</p>
            </div>
            <img src="/Mariyam-photo.png" className="w-48 h-auto " />

          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <p className="text-sm md:text-base leading-tight">who was jesus<br />human mother ?</p>
              <p className="font-semibold text-base md:text-lg mt-1">MARIYAM</p>
            </div>
            <img src="/Mariyam-photo.png" className="w-48 h-auto " />

          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="text-center">
        <h1 className="text-2xl md:text-3xl text-[#4c7380] font-semibold mb-14">Our Leadership Team</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-3"
            >
<div className="
  w-28 sm:w-32 md:w-40 lg:w-52
  h-36 sm:h-44 md:h-52 lg:h-60
  bg-[#4c7380]
  rounded-sm flex items-center justify-center
">
                <img src="/contact-icon.png" alt="contact-icon" className="w-20 md:w-30 md:h-30" />
              </div>
              <p className="mt-2 font-semibold text-base">Lorem Ipsum</p>
              <p className="text-sm opacity-70 -mt-2">Lorem Ipsum</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HighlightsAndLeadership;