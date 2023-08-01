import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#faebd7] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <Link to="/" className="w-full text-3xl font-bold text-[#dc143c] m-4">
          Cocktaily
        </Link>
        <ul className="uppercase p-4">
          <li className="p-4 border-b">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b">
            <Link to="/cocktails">Cocktails</Link>
          </li>
          <li className="p-4 border-b">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

