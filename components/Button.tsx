import Link from 'next/link';
import React from 'react';

// Button component for the "Hire Me" call-to-action
const Button: React.FC = () => {
  return (
    <>
      <Link
        href="#Hire" // The URL fragment that the button will scroll to when clicked
        className="bg-[#FD6F00] px-6 py-2 text-white rounded transition-transform transform hover:scale-105" // Styling for the button
      >
        Hire Me
      </Link>
    </>
  );
};

export default Button;
