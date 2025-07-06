import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Expertise', section: 'expertise' },
    { name: 'Education', section: 'education' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 flex justify-between items-center p-4 bg-black/70 backdrop-blur-md">
      <div className="font-mono text-2xl text-green-500 uppercase tracking-wider animate-fade-in">
        <p>Abdulloh</p>
      </div>
      <nav
        className={`${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        } absolute top-full left-0 right-0  transition-all duration-300 md:static md:translate-y-0 md:opacity-100 md:visible`}
      >
        <ul className="flex flex-col items-center p-4 gap-4 md:flex-row md:p-0 md:gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                smooth={true}
                duration={500}
                className="font-mono text-white text-lg hover:text-green-500 transition-colors duration-300 relative group cursor-pointer"
                onClick={closeMenu}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="flex flex-col gap-1.5 p-2 md:hidden animate-fade-in"
        onClick={toggleMenu}
      >
        <span
          className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;