import React from "react";

const VisionMissionSection = () => {
  return (
    <section className="bg-[#f8f5f0] py-32 md:py-45 px-6 md:px-20">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full md:w-[45%] flex justify-center mb-10">
          
          {/* MAIN IMAGE (always visible) */}
          <img
            src="/vision-photo.png"
            alt="Vision"
            className="w-[200px] md:w-[250px] rounded-lg "
          />

          {/* SECOND IMAGE (Mobile = NORMAL | Desktop = ABSOLUTE OVERLAP) */}
          <img
            src="/mission-photo.png"
            alt="Mission"
            className="
              w-[120px] md:w-[180px]  
              
              /* MOBILE → behaves normally (stacked) */
              mt-6 md:mt-0
              
              /* DESKTOP → overlap on top of first image */
              md:absolute md:left-[255px] md:top-[190px]
            "
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="md:w-[55%] text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2d546f] mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed mb-10">
           To be a vibrant, inclusive church where faith transforms lives and service 
           unites generations To be a vibrant, inclusive church where faith transforms lives and service unites generations
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-[#2d546f] mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To honor God by serving veterans, strengthening families, 
            and sharing the love of Christ throughout Sabah and beyond
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
