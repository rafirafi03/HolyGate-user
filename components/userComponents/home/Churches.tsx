import React from "react";

const Churches = () => {
  const churches = [
    { id: 1, image: "/Catholic-church.png", name: "St. Mary’s Church", location: "Kannur" },
    { id: 2, image: "/Catholic-church.png", name: "Holy Spirit Church", location: "Kozhikode" },
    { id: 3, image: "/Catholic-church.png", name: "Sacred Heart Church", location: "Thrissur" },
    { id: 4, image: "/Catholic-church.png", name: "St. Joseph’s Church", location: "Ernakulam" },
    { id: 5, image: "/Catholic-church.png", name: "St. Thomas Church", location: "Alappuzha" },
    { id: 6, image: "/Catholic-church.png", name: "St. George Church", location: "Trivandrum" },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-serif text-[#567C8E] text-center mb-10">
          Our Churches
        </h2>

        {/* Grid of Churches */}
        <div className="flex justify-center">
          <div className="grid w-[80%] sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {churches.map((church) => (
              <div
                key={church.id}
                className="flex flex-col items-center text-center"
              >
                {/* Square Image Box */}
                <div className="w-60 aspect-square bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={church.image}
                    alt={church.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Below */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-[#567C8E] mb-1">
                    {church.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{church.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Churches;
