import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-500"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> Support
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> Career
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> 24h Service
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> Quick Chat
              </a>
            </li>
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="font-bold text-lg mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> Support
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> Career
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> 24h Service
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2">›</span> Quick Chat
              </a>
            </li>
          </ul>
        </div>

        {/* Download Our App */}
        <div>
          <h3 className="font-bold text-lg mb-4">Download Our App</h3>
          <div className="space-y-4">
            <a href="#">
              <img
                src="/google-play.png"
                alt="Google Play"
                className="w-40 mx-auto md:mx-0"
              />
            </a>
            <a href="#">
              <img
                src="/app-store.png"
                alt="App Store"
                className="w-40 mx-auto md:mx-0"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2023 mental.com All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
