"use client";

import { Search, Play, Heart, Users, CalendarDays } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-8 leading-snug">
          Never Lose Hope. Just When You Think It’s Over, <br />
          God Will Make A Way
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white/20 border border-white/30 rounded-md shadow-lg w-full max-w-md mx-auto mb-10 overflow-hidden  transition-all duration-300 hover:shadow-xl">
  <input
    type="text"
    placeholder="Search..."
    className="flex-1 px-5 py-3 text-white placeholder-white/70 bg-transparent outline-none"
  />
  <button className=" hover:bg-[#4a6a7a]/90 px-4 py-3 flex items-center justify-center transition-colors">
    <Search className="w-5 h-5 text-white" />
  </button>
</div>


        {/* Icon Actions */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Watch */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/10 hover:bg-white/10 p-4 rounded-sm  transition">
              <Play className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">Watch</p>
          </div>

          {/* Give */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/10 hover:bg-white/10 p-4 rounded-sm  transition">
              <Heart className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">Give</p>
          </div>

          {/* Who We Are */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/10 hover:bg-white/10 p-4 rounded-sm  transition">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">Who We Are</p>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/10 hover:bg-white/10 p-4 rounded-sm  transition">
              <CalendarDays className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
