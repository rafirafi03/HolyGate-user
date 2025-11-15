import React from "react";
import { Search } from "lucide-react"; // icon

const FAQSection = () => {
  return (
    <section
      className="w-full bg-cover  bg-center bg-no-repeat py-24 px-6 md:px-16 text-white"
      style={{ backgroundImage: "url('/FAQ-photo.png')" }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-snug mb-10">
        God Is With You Even On Your <br /> Hardest Days
      </h2>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto flex items-center bg-white text-black rounded-md shadow-lg px-5 py-3 mb-16">
        <input
          type="text"
          placeholder="what do u wanna know?"
          className="flex-1 bg-transparent outline-none text-sm md:text-base"
        />
        <Search className="w-7 h-7 " />
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        
        {/* Left heading */}
        <div className="flex justify-centre w-full h-full">
          <h3 className="text-xl md:text-4xl  p-7">
            Frequently Asked <br /> Question
          </h3>
        </div>

        {/* Right questions */}
        <div className="flex sm:w-20 md:w-100 flex-col space-y-7 text-right md:text-left">
          <p className="border-b border-white/40 pb-2">who was jesus human mother</p>
          <p className="border-b border-white/40 pb-2">who was jesus human mother</p>
          <p className="border-b border-white/40 pb-2">who was jesus human mother</p>
          <p className="border-b border-white/40 pb-2">who was jesus human mother</p>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
