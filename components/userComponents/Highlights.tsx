import React from "react";

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      image: "/Pregador-da-palavra-4.png",
      title: "Latest Sermons",
      description: "Listen to inspiring sermons and teachings of faith.",
    },
    {
      id: 2,
      image: "/Pregador-da-palavra-4.png",
      title: "Our Preachers",
      description: "Meet the devoted preachers who guide our community.",
    },
    {
      id: 3,
      image: "/Pregador-da-palavra-4.png",
      title: "Events Calendar",
      description: "Stay updated on upcoming church events and gatherings.",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto  ">
        <div className="grid md:grid-cols-3 gap-3">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-[#567C8E] text-white  p-9 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3> 
              <div className="w-ful h-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                 <img src={item.image} alt={item.title} className="w-full h-full object-contain" /> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
