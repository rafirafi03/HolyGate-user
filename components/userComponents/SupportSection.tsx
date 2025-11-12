import React from "react";

const SupportSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center shadow-lg">
        {/* Left Image (1/4 width on md and above) */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative h-60 w-40 md:h-60 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/hand.png"
              alt="Person praying"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text (3/4 width) */}
        
        <div className="md:col-span-2 p-8">
        <div className="flex justify-start p-4">
        <h2 className="text-5xl font-serif text-[#567C8E] mb-4 capitalize">
        Never Stop Believing
        </h2>
      </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            I believe that God has put gifts and talents and ability 
            on the inside of every one of us. When you develop that 
            and you believe in yourself and you believe that you're a 
            person of influence and a person of purpose, I believe you
             can rise up out of any situation.
          </p>
            <div className="flex justify-start">
          <button className="w-90 h-10 bg-[#567C8E] text-white  hover:bg-[#4a6a7a] transition-colors ">
            Make A Donation
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
