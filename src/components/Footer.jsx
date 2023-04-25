import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 bg-black py-9 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <FaFacebook className="mx-4 text-2xl hover:text-white" />
          <FaTwitter className="mx-4 text-2xl hover:text-white" />
          <FaInstagram className="mx-4 text-2xl hover:text-white" />
        </div>
        <p className="mt-2 text-xl">Copyright © {new Date().getFullYear()} KarmaWala International</p>
      </div>
    </footer>
  );
};

export default Footer;
