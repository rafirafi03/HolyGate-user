"use client";

import Image from "next/image";

const ChurchMap = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      {/* Crown Image */}
      <div className="mb-6 ">
        <img
          src="/crown.png" // replace with your crown image later
          alt="Crown of Thorns"
         
          className="object-contain mx-auto w-100"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-[#495057] mb-10">
        Find Nearest Church
      </h2>

      {/* Map and Button Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-22">
        {/* Dummy Map */}
        <div className="w-[440px] h-[320px] md:w-[480px] md:h-[240px] rounded-md shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.089282467785!2d-122.41941548468113!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b4e5d07%3A0xc4a5a9f0ff3f3b6!2sChurch!5e0!3m2!1sen!2sus!4v1699111111111!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Cross + Button */}
        <div className="flex flex-col items-center relative">
          {/* Vertical Bar */}
          <div className="w-[40px] h-60 border border-gray-200 mb-4"></div>

          {/* Button */}
          <button className="absolute bg-[#486a7c] w-40 mt-20 hover:bg-[#3f5d6d] text-white font-medium px-6 py-2 rounded-sm shadow transition">
            FIND HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChurchMap;
