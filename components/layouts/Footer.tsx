import { Link } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#C8D9E6D4] py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-sm ">
                Holy Gate Church community serving faith and fellowship.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className=" hover:text-white">About</Link></li>
                <li><Link href="/events" className=" hover:text-white">Events</Link></li>
                <li><Link href="/media" className=" hover:text-white">Media</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm ">Email: info@holygate.com</p>
              <p className="text-sm ">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className=" hover:text-white">FB</a>
                <a href="#" className=" hover:text-white">TW</a>
                <a href="#" className=" hover:text-white">IG</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            © 2024 Holy Gate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
