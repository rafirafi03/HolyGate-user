import React from "react";

const AboutSection = () => {
  return (
    <section className="containers mx-auto px-6 py-16">
      {/* Title */}
      <div className="flex justify-center p-4">
        <h2 className="text-5xl font-serif text-[#567C8E] mb-4 capitalize">
          Veterans
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Image (1/4 width on md and above) */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/veteran-praying.png"
              alt="Person praying"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text (3/4 width) */}
        <div className="md:col-span-2 p-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a community of Christian veterans dedicated to faith,
            service, and fellowship. United by our shared experiences in the
            military and our commitment to Christ, we strive to support one
            another in both spiritual and everyday life.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to honor God through service, remembering the
            sacrifices made for freedom while continuing to serve our families,
            churches, and communities. We believe that faith strengthens
            purpose, and that the same courage shown in uniform can be lived out
            through love, compassion, and discipleship.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you’re an active service member, a veteran, or a supporter
            of those who’ve served, you’re welcome here. Together, we stand firm
            in faith and gratitude for the grace that sustains us all.
          </p>

          <button className="px-6 py-2 bg-[#567C8E] text-white rounded-lg hover:bg-[#4a6a7a] transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
