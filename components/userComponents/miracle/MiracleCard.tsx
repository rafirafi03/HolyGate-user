import React from "react";

const MiracleCard = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 space-y-10">

      {/* Card Template */}
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="bg-[#567C8D] text-white p-6 rounded-md flex gap-12 items-center"
        >
          {/* Image */}
          <img
            src="/card-photo.png"
            alt="miracle"
            className="w-38 h-38 rounded-md object-cover"
          />

          {/* Text Section */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">
              Water Turned into Wine
            </h4>

            <p className="text-sm opacity-90 mb-1">
              <span className="font-semibold">Location:</span> Cana of Galilee
            </p>

            <p className="text-sm opacity-90 mb-3">
              <span className="font-semibold">Approx. Date:</span> ~27 AD
            </p>

            <p className="text-sm opacity-90 leading-relaxed">
              At a wedding in Cana, Jesus turned water into wine after the hosts
              ran out. This was His first miracle, showing His divine power,
              compassion, and the start of His public ministry. It symbolizes
              transformation and faith in God’s abundance.
            </p>
          </div>

          {/* Button */}
          <button className="bg-white text-[#567C8D] px-4 py-2 rounded-md font-semibold">
            Know More
          </button>
        </div>
      ))}
      <div className="flex  justify-center">
        <p className="text-sm text-gray-600 mb-2">View More ▾</p>

      </div>
    </section>
  );
};

export default MiracleCard;
