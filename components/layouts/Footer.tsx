import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#C8D9E6]/90 py-12 text-[#2b3b45]">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 mb-4">
              <Image
                src="/logo1.png" // replace with your actual logo file
                alt="Holy Gate Church Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg  mb-2 text-gray-400">THE DOOR WAYS TO </h3>
            <h3 className="text-lg  mb-2 text-gray-400"> LIVING FAITH</h3>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#2b3b45]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#486a7c] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#486a7c] transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#486a7c] transition">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[#2b3b45]">Contact</h3>
            <p className="text-sm text-[#37474f]/90">Email: info@holygate.com</p>
            <p className="text-sm text-[#37474f]/90">Phone: +91 987456123</p>
            <p className="text-sm text-[#37474f]/90">Location: Kannur</p>

          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#2b3b45] text-lg">Follow Us</h3>
            <div className="flex gap-5 justify-center md:justify-start">
              <a
                href="#"
                className="p-3 rounded-full bg-[#486a7c] hover:bg-[#3f5d6d] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-[#486a7c] hover:bg-[#3f5d6d] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-[#486a7c] hover:bg-[#3f5d6d] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-[#486a7c] hover:bg-[#3f5d6d] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-[#486a7c]/20 text-center text-sm text-[#37474f]/70">
          © {new Date().getFullYear()} Holy Gate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
