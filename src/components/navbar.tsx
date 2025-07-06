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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 bg-gradient-to-r from-black via-gray-900 to-teal-950/90 backdrop-blur-md">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-20 pointer-events-none animate-scanline"></div>
      {/* Matrix Digital Rain Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="matrix-rain"></div>
      </div>

      {/* Navbar Brand */}
      <div className="font-mono text-lg sm:text-xl md:text-2xl text-green-500 uppercase tracking-wider animate-fade-in">
        <p>Abdulloh</p>
      </div>
      {/* Navbar Menu */}
      <nav
        className={`${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        } fixed top-[56px] sm:top-[60px] left-0 right-0 bottom-0 bg-gradient-to-b from-black/95 to-gray-900/95 transition-all duration-300 md:static md:translate-y-0 md:opacity-100 md:visible md:bg-transparent md:flex md:items-center md:h-auto`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 sm:gap-10 md:flex-row md:p-0 md:gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                smooth={true}
                duration={500}
                offset={-60} // Adjusted for navbar height
                className="font-mono text-base sm:text-lg md:text-xl text-white hover:text-green-500 transition-colors duration-300 relative group cursor-pointer"
                onClick={closeMenu}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Hamburger Button */}
      <button
        className="flex flex-col gap-1.5 p-2 md:hidden animate-fade-in"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Tailwind Animation Keyframes */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes matrix-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-scanline {
          animation: scanline 6s linear infinite;
        }
        .matrix-rain {
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><text x="0" y="15" font-family="monospace" font-size="12" fill="rgba(0, 255, 128, 0.5)">0101011010</text><text x="20" y="30" font-family="monospace" font-size="12" fill="rgba(0, 255, 128, 0.5)">1010100110</text><text x="40" y="45" font-family="monospace" font-size="12" fill="rgba(0, 255, 128, 0.5)">1100110011</text><text x="60" y="60" font-family="monospace" font-size="12" fill="rgba(0, 255, 128, 0.5)">0011001100</text><text x="80" y="75" font-family="monospace" font-size="12" fill="rgba(0, 255, 128, 0.5)">0110011001</text></svg>') repeat;
          animation: matrix-rain 10s linear infinite;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </header>
  );
};

export default Navbar;