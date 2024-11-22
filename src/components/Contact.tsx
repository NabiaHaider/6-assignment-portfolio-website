"use client"; // Enables client-side interactivity in Next.js

import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload on form submission
    alert('Form submitted successfully!'); // Placeholder for form submission logic
  };

  return (
    <div className="w-full mx-auto pt-32 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-start justify-between bg-slate-900">
      
      {/* Left Section: Text Content and Social Media */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-2xl mb-4 font-medium text-pink-400">Contact</h3>
        <h1 className="text-4xl font-medium mb-6 text-white">
          Get in <span className="text-pink-400">touch</span>
        </h1>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 text-white">
          <a href="mailto:nabiahaider11@gmail.com" className="flex items-center space-x-2">
            <MdMail size={24} />
            <span>nabiahaider11@gmail.com</span>
          </a>
        </div>

        <div className="flex space-x-4 mt-4 text-white">
          <a href="https://www.linkedin.com/in/nabia-haider" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FaLinkedin size={24} />
            <span>Nabia Haider</span>
          </a>
        </div>
      </div>

      {/* Right Section: Form */}
      <form className="space-y-6 lg:w-1/2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="h-[40px] bg-gray-100 border border-accent px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-[40px] bg-gray-100 border border-accent px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="msg" className="text-sm font-medium text-white">Message</label>
          <textarea
            id="msg"
            name="message"
            rows={8}
            className="bg-gray-100 border border-accent px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="flex">
          <button
            type="submit"
            className="h-[40px] w-full bg-pink-400 text-slate-900 font-medium rounded-md hover:bg-pink-500 transition"
          >
            Send
          </button>
        </div>
      </form>

    </div>
  );
};

export default Contact;
