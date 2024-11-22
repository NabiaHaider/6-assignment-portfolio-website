'use client';
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai"; // Export menubar icon

const Navbar = () => {
  const scrollToSection = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID '${sectionId}' not found.`);
    }
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 border-b-2 border-gray-200 bg-gray-900">
      <div className="text-2xl font-bold text-white">Nabia</div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-8 text-white">
          <li className="menulink cursor-pointer hover:text-pink-400 transition">
            <button onClick={() => scrollToSection('home-section')}>Home</button>
          </li>
          <li className="menulink cursor-pointer hover:text-pink-400 transition">
            <button onClick={() => scrollToSection('about-section')}>About</button>
          </li>
          <li className="menulink cursor-pointer hover:text-pink-400 transition">
            <button onClick={() => scrollToSection('skills-section')}>Skills</button>
          </li>
          <li className="menulink cursor-pointer hover:text-pink-400 transition">
            <button onClick={() => scrollToSection('projects-section')}>Projects</button>
          </li>
        </ul>
        <AiOutlineMenu className="md:hidden" size={30} /> {/* For mobile navigation */}
        <button
          className="border-2 border-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-black transition duration-300"
          aria-label="Contact"
          onClick={() => scrollToSection('contact-section')}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
