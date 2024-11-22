import Image from 'next/image';
import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="bg-slate-900 text-left relative min-h-screen"
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center pt-40 ">
        {/* Text Section */}
        <div className="text-left max-w-lg">
          <p className="text-3xl md:text-4xl mb-1 text-white">Hello, It's Me</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Nabia Haider
          </h1>
          <h2 className="text-3xl md:text-3xl text-white mb-6">
            And I'm a <span className="text-pink-400">Student</span>.
          </h2>
          <p className="text-white mb-10 lg:mb-3">
            I’m a student of GIAIC, pursuing a course in Artificial
            Intelligence, Web 3.0 & passionate about technology and constantly
            learning new skills to stay up-to-date with the latest innovations.
          </p>
          <a
            href="/path/to/your-cv.pdf" // Replace with the actual path to your CV file
            download
            className="bg-pink-400 text-slate-900 font-semibold py-2 px-6 rounded-lg hover:bg-pink-500 transition duration-300 mt-6"
          >
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end lg:ml-10 mt-10 lg:mt-0">
          <Image
            src="/pic2.png" // Replace this with the path to your uploaded image if needed
            alt="Nabia Haider"
            width={250}
            height={250}
            priority
            className="rounded-full border-4 border-pink-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
