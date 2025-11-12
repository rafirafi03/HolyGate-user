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
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#3A4A8C] rounded-full flex items-center justify-center relative">
              <div className="absolute w-[1.5px] h-6 bg-white left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-6 h-[1.5px] bg-white top-[18px]"></div>
            </div>
            <span className="font-semibold text-gray-800">Holy Gate</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/media" className="text-gray-700 hover:text-gray-900">Media</Link>
            <Link href="/events" className="text-gray-700 hover:text-gray-900">Events</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-700 hover:text-gray-900">Login</button>
            <button className="px-4 py-2 bg-[#567C8E] text-white rounded text-sm hover:bg-[#4a6a7a]">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: "url('/church-interior.jpg')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Never Glorify Hope, but Always Work for It
          </h1>
          <p className="text-xl md:text-2xl font-light">I AM WITH THE WAR</p>
        </div>
      </section>

      {/* Veterans Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/silhouette-praying.jpg" 
              alt="Person praying" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-[#567C8E] mb-4">veterans</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="px-6 py-2 bg-[#567C8E] text-white rounded hover:bg-[#4a6a7a]">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="bg-[#567C8E] py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="text-xl mb-2">Feature Title</h3>
                <p className="text-sm text-white/90">
                  Brief description of the feature or service offered
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Word That Helps Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-[#567C8E] mb-4">Word That Helps live</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="px-6 py-2 bg-[#567C8E] text-white rounded hover:bg-[#4a6a7a]">
              Watch Now
            </button>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/bible-candle.jpg" 
              alt="Bible with candle" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center text-[#567C8E] mb-12">
            Would You Like to Attend The Next Event?
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {events.map((event, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-white rounded-full shadow-md flex items-center justify-center">
                  <span className="text-2xl">{event.icon}</span>
                </div>
                <p className="text-sm text-gray-600">{event.label}</p>
                <p className="text-lg font-semibold text-gray-800">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Churches Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-[#567C8E] mb-12">Our Churches</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {churches.map((church, idx) => (
            <div key={idx} className="text-center">
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <img 
                  src={church.image} 
                  alt={church.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-700">{church.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Crown of Thorns Section */}
      <section className="bg-gray-50 py-16">
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
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/map-placeholder.jpg" 
            alt="Map" 
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 px-4 py-2 bg-[#567C8E] text-white rounded hover:bg-[#4a6a7a]">
            View on Map
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A4A8C] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-sm text-white/80">
                Holy Gate Church community serving faith and fellowship.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-white/80 hover:text-white">About</Link></li>
                <li><Link href="/events" className="text-white/80 hover:text-white">Events</Link></li>
                <li><Link href="/media" className="text-white/80 hover:text-white">Media</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-white/80">Email: info@holygate.com</p>
              <p className="text-sm text-white/80">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white">FB</a>
                <a href="#" className="text-white/80 hover:text-white">TW</a>
                <a href="#" className="text-white/80 hover:text-white">IG</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            © 2024 Holy Gate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;