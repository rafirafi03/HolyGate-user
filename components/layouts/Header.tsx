"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react"; // for hamburger icon
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <TopBar/>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo1.png"
            alt="Holy Gate Logo"
            width={70}
            height={70}
            className="object-contain w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
            priority
          />
        </div>  

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#3A4A8C]">Home</Link>
          <Link href="/dhyanam" className="hover:text-[#3A4A8C]">Dhyanam</Link>
          <Link href="/qna" className="hover:text-[#3A4A8C]">Q&A</Link>
          <Link href="/miracles" className="hover:text-[#3A4A8C]">Miracles</Link>
          <Link href="/prayers" className="hover:text-[#3A4A8C]">Prayers</Link>
          <Link href="/about-sabah" className="hover:text-[#3A4A8C]">About Sabah</Link>
          <Link href="/anti-drug" className="hover:text-[#3A4A8C]">Anti Drug</Link>
          <Link href="/song-page" className="hover:text-[#3A4A8C]">Song Page</Link>
        </nav>

        {/* User Info & Menu */}
        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E9E7FC] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#3A4A8C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 20.25a8.25 8.25 0 1115 0"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight text-sm">
              <span className="font-semibold text-gray-800">Arunima V</span>
              <span className="text-gray-500 text-xs">+91 8089038046</span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button className="lg:hidden text-gray-700 hover:text-[#3A4A8C]">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
