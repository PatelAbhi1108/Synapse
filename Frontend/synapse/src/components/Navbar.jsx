import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4">
        {/* logo */}
        <Link to="/">Logo</Link>

        {/* buttons */}
        <div className="flex gap-5 relative">
          <Link to="/">Home</Link>

          {/* Feature button with dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="relative">Features</button>

            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white border rounded shadow-md p-2 z-10">
                <ul className="flex flex-col gap-2">
                  <li className="hover:bg-gray-200 p-1 cursor-pointer">
                    <Link to="/Lecture">Live Lectures</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-1 cursor-pointer">
                    <Link to="/Material">Study Material </Link>
                  </li>
                  
                  <li className="hover:bg-gray-200 p-1 cursor-pointer">
                    <Link to="/Forum">Forum</Link>
                  </li>
                 
                </ul>
              </div>
            )}
          </div>

          <Link to="/About">About Us</Link>
          <Link to="ContactUs">Contact Us</Link>
        </div>

        {/* extra buttons */}
        <div>
          <p>search</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
