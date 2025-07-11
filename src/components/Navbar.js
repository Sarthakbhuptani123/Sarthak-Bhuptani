import React from 'react';
import profile from '../assets/profile.jpg'; // adjust path if needed

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
  <img
    src={profile}
    alt="Sarthak"
    className="w-6 h-6 rounded-full object-cover"
  />
  <span className="text-lg font-bold">Sarthak</span>
</div>


        <ul className="flex gap-3">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
