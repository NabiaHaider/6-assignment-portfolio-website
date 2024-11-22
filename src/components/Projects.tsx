import React from 'react';
import Image from 'next/image';

const projectsItems = [
  { id: 1, title: 'Dynamic Resume Builder', src: '/project_.jpg' },
  { id: 2, title: 'Todo List', src: '/project_8.png' },
  { id: 3, title: 'Static Interactive Resume', src: '/project_7.png' },
  { id: 4, title: 'Countdown Timer', src: '/project_6.png' },
  { id: 5, title: 'Simple Calculator', src: '/project_4.png' },
  { id: 6, title: 'Currency Converter', src: '/project_3.png' },
  { id: 7, title: 'Portfolio', src: '/project-0.png' }
];

const Projects = () => {
  return (
    <div
      id='projects-section'
      className='w-full mx-auto pt-16 px-8 md:px-16 lg:px-24 bg-slate-700 text-center'
    >
      {/* Header Section */}
      <div className='w-full mb-8'>
        <h3 className='text-3xl mb-20 font-medium text-white'>
          Our <span className='text-pink-400'>Projects</span>
        </h3>
      </div>

      {/* Portfolio Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white justify-items-center'>
        {projectsItems.map((item) => (
          <div key={item.id} className='border border-accent rounded-lg p-4 w-full max-w-sm'>
            <Image
              className='w-full h-auto rounded-lg'
              src={item.src}
              width={350}
              height={250}
              alt={item.title}
            />
            <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
