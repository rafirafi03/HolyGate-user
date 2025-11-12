import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import AboutSection from "@/components/userComponents/AboutSection";
import Churches from "@/components/userComponents/Churches";
import ChurchMap from "@/components/userComponents/ChurchMap";
import HeroSection from "@/components/userComponents/HeroSection";
import Highlights from "@/components/userComponents/Highlights";
import NextEventSection from "@/components/userComponents/NextEventSection";
import SupportSection from "@/components/userComponents/SupportSection";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const churches = [
    { name: "Prayer Need", image: "/church1.jpg" },
    { name: "Sermon", image: "/church2.jpg" },
    { name: "Prayer Need", image: "/church3.jpg" },
    { name: "Prayer Need", image: "/church4.jpg" },
    { name: "Prayer Need", image: "/church5.jpg" },
    { name: "Prayer Need", image: "/church6.jpg" },
  ];

  const events = [
    { icon: "📅", label: "Today", date: "11" },
    { icon: "📅", label: "Weekly", date: "7" },
    { icon: "📅", label: "Monthly", date: "30" },
    { icon: "📅", label: "Yearly", date: "365" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <Header/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Veterans Section */}
      <AboutSection/>

      {/* Three Column Section */}
      <Highlights/>

      {/* Word That Helps Section */}
      <SupportSection/>

      {/* Events Section */}
      <NextEventSection/>

      {/* Our Churches Section */}
      <Churches/>

      {/* Crown of Thorns Section */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-32 h-32 mx-auto mb-6">
            <img 
              src="/crown-thorns.png" 
              alt="Crown of thorns" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl font-serif text-[#567C8E] mb-2">Find Nearest Church</h2>
        </div>
      </section> */}

      {/* Map Section */}
      <ChurchMap/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;