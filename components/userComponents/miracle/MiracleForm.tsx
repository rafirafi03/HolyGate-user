import React from "react";

const MiracleForm = () => {
  return (
    <section className="w-full h-full py-16 px-6 md:px-20"
    style={{ backgroundImage: "url('/form-bg.png')" }}
    >

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-600 mb-2">View More ▾</p>

        <h2 className="text-3xl font-semibold text-[#567C8D] mb-3">
          Share Your Miracle
        </h2>

        <p className="text-gray-700 leading-relaxed">
          We invite you to share how God has moved in your life. Your story may be the encouragement<br />
          someone else needs to keep believing
        </p>
      </div>

      {/* Form */}
      <form className="max-w-3xl mx-auto space-y-6">

        {/* Name + Place */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Name*
            </label>
            <input
              type="text"
              className="w-full h-12 bg-[#BFD0DB] border border-gray-300 rounded-md px-4 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Place*
            </label>
            <input
              type="text"
              className="w-full h-12 bg-[#BFD0DB] border border-gray-300 rounded-md px-4 focus:outline-none"
            />
          </div>
        </div>

        {/* Story */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Your Story*
          </label>

          <div className="relative">
            <textarea
              className="w-full h-64 bg-[#E3EBF0] border border-gray-300 rounded-md p-4 resize-none focus:outline-none"
            ></textarea>

            {/* Background image */}
            <img
              src="/miracle-form-bg.png"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#567C8D] text-white px-10 py-2 rounded-md font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default MiracleForm;
