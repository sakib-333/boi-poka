import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto py-10 text-center space-y-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Book Vibe</h1>
        <p className="text-gray-500 text-sm w-full">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="text-black font-bold">Services</li>
            <li>
              <a href="#" className="hover:underline">
                Product Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
          </ul>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="text-black font-bold">
              <a href="#" className="hover:underline">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="text-black font-bold">
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
