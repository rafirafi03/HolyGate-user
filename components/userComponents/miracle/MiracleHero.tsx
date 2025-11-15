import React from "react";

const MiracleHero = () => {
  return (
    <section
      className="w-full h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/miracle-hero.png')" }}
    >
      <h1 className="text-4xl md:text-5xl font-serif mb-8">
        Miracles at Veterans <br /> Sabah Church
      </h1>

      <p className="text-lg pb-4 md:text-xl font-light opacity-90">
        “With God all things are possible.” — Matthew 19:26
      </p>
    </section>
  );
};

export default MiracleHero;
