"use client";
import React, { useState } from 'react';

const ProjectToggle = () => {
  const [activeOption, setActiveOption] = useState(1);

  const toggleOptions = [
    { id: 1, title: 'All' },
    { id: 2, title: 'UI/UX' },
    { id: 3, title: 'Web Design' },
    { id: 4, title: 'App Design' },
    { id: 5, title: 'Graphic Design' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {toggleOptions.map((option) => (
        <div
          key={option.id}
          onClick={() => setActiveOption(option.id)}
          className={`cursor-pointer border rounded-md px-4 py-2 text-lg font-medium transition-all duration-300 ${
            activeOption === option.id ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8] text-black'
          }`}
          aria-selected={activeOption === option.id}
        >
          {option.title}
        </div>
      ))}
    </div>
  );
};

export default ProjectToggle;
