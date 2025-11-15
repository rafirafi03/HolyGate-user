import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import AboutSection from "@/components/userComponents/home/AboutSection";
import Churches from "@/components/userComponents/home/Churches";
import ChurchMap from "@/components/userComponents/home/ChurchMap";
import HeroSection from "@/components/userComponents/home/HeroSection";
import Highlights from "@/components/userComponents/home/Highlights";
import NextEventSection from "@/components/common/NextEventSection";
import SupportSection from "@/components/userComponents/home/SupportSection";

const HomePage = () => {

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