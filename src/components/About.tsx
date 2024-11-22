
import React from 'react';

const About = () => {
  return (
    <div id='about-section'
    className="w-full flex items-center justify-center min-h-96 bg-slate-800">
      {/* Text Content */}
      <div className="text-center lg:w-1/2 p-10">
        <h3 className="text-3xl font-medium text-pink-400 mb-10" data-aos="zoom-in-up">About <span className='text-white'>Me</span></h3>
        <p className="text-white text-2xl mt-4 mb-8" data-aos="zoom-in-up">
          Hi, I’m Nabia Haider. I am now becoming a developer and am also working on various projects using technologies like Next.js and React.js, along with Tailwind CSS, in which I have expertise. I enjoy building seamless digital experiences. Let’s create something amazing together.
        </p>
        <button className="mt-6 px-4 py-2 bg-pink-500 text-slate-900 rounded-lg hover:bg-pink-600 font-semibold">
          See more
        </button>
      </div>
    </div>
  );
};

export default About;
