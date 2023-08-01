import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  


  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <Link to="/" className="w-full text-3xl font-bold text-[#dc143c]">
        Cocktaily
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/cocktails">Cocktails</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
     
    </div>
  );
}

export default Navbar;

