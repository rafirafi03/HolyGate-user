import React from 'react'

function AntiDrugMission() {
  return (
    <section>
    <div className="bg-[#f5f0eb] py-16 px-6 md:px-20">

      {/* Main Heading */}
      <h2 className="text-2xl md:text-3xl text-center font-playfair font-semibold text-[#567C8D] mb-14">
        Standing Together Against Drug Abuse
      </h2>

      {/* === FIRST ROW === */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
        <img
          src="/Emotion.png"
          alt="drug awareness"
          className="w-100 md:w-100 rounded-md shadow"
        />

        <p className="leading-8  text-md md:text-base md:w-1/2">
          <span className='font-semibold'>At Veterans Sabah Church</span>, we believe that every life is precious 
          and that freedom from addiction is possible through faith, love, 
          and community support. Our Anti-Drug Ministry exists to bring 
          hope and healing to those affected by drug and substance abuse — 
          offering a path toward recovery, redemption, and renewed purpose in Christ.
        </p>
      </div>

      {/* === SECOND ROW === */}
      <h3 className="text-center text-3xl font-playfair font-semibold mb-10">
        Our Mission
      </h3>

      <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
        <img
          src="/Anti-drug-mission.png"
          alt="mission"
          className="w-100 md:w-100 rounded-md shadow"
        />

        <p className="space-y-4  text-md md:text-base leading-8 md:w-1/2">
          Raising awareness about the dangers of drug abuse and its impact on individuals, families, and communities.
          <br />
          Providing a safe, non-judgmental space for those seeking help and recovery.
          <br />
          Supporting veterans and youth through faith-based programs, mentorship, and counseling.
          <br />
          Partnering with local organizations to promote prevention, education, and rehabilitation.
        </p>
      </div>

      {/* === THIRD ROW === */}
      <h3 className="text-center text-3xl font-playfair font-semibold mb-10">
        Faith, Healing, and Support
      </h3>

      <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
        <img
          src="/Anti-drug-mission.png"
          alt="faith support"
          className="w-100 md:w-100 rounded-md shadow"
        />

        <p className="leading-8  text-md md:text-base md:w-1/2">
          Addiction is not a life sentence — it’s a battle that can be won 
          with God’s strength and a caring community.
          <br />
          Through prayer, fellowship, and practical support, our church 
          walks with individuals and families on their journey to healing. 
          <br />
          Our outreach teams visit rehabilitation centers, schools, and 
          communities across Sabah to share testimonies of hope and 
          encourage others to choose life, not addiction.
        </p>
      </div>

      

    </div>
    <div className=" bg-[#567C8D] w-full h-full text-white py-14 px-6 md:px-20">

{/* Heading */}
<h2 className="text-center text-4xl md:text-4xl font-playfair  mb-6">
  Get Help. Find Hope.
</h2>

{/* Description */}
<p className="text-center max-w-3xl mx-auto text-xl md:text-xl leading-relaxed mb-10">
  If you or someone you love is struggling with addiction, you don’t have to 
  face it alone. Reach out to us — we are here to listen, to pray, and to walk 
  beside you.
</p>

{/* Contact Row */}
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-red-600 font-medium">

  {/* Helpline */}
  <div className="flex items-center gap-2">
    <span>📞</span>
    <p>Helpline: +91 9874563210</p>
  </div>

  {/* Email */}
  <div className="flex items-center gap-2">
    <span>📧</span>
    <p>Email: [Insert email]</p>
  </div>
</div>

</div>
    </section>
  );
}

export default AntiDrugMission;
