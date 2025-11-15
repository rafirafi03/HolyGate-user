import React from "react";

const NextEventSection = () => {
  const countdown = [
    { id: 1, value: "6", label: "years" },
    { id: 2, value: "1", label: "Month" },
    { id: 3, value: "45", label: "days" },
    { id: 4, value: "6", label: "Hours" },
  ];

  return (
    <section className="bg-white py-16! containers mx-auto">
      <div className="">
        <div className="flex justify-center md:grid-cols-2 items-center gap-8">
          
          {/* Left content */}
          <div className="text-center md:text-left  mt-10">
            <h2 className="text-4xl font-serif text-[#567C8E] mb-6">
              Would You Like To Attend The Next Event?
            </h2>
            <p className="text-gray-700 mb-10 text-lg">
              Our Next Event Will Be On <span className="font-semibold">Dec 27, 2025</span> at Kannur
            </p>

            {/* Countdown circles */}
            <div className="flex flex-wrap justify-center md:justify-start gap-13">
              {countdown.map((item) => (
                <div
                  key={item.id}
                  className="w-30 h-30 border border-[#567C8E] rounded-full flex flex-col items-center justify-center text-[#567C8E]"
                >
                  <span className="text-2xl font-semibold">{item.value}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Lectern-model-Ztature-SP-1.png"
              alt="Podium"
              className="w-80 h-full md:w-60 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextEventSection;
