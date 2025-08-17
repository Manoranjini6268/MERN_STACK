import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyPortfolio</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="hover:text-teal-400 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <X
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-center md:hidden shadow-lg">
          <ul className="flex flex-col space-y-4 py-6">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block hover:text-teal-400 transition"
                  onClick={() => setIsOpen(false)} // close menu when clicked
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
