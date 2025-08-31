import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Optional “fake loading” before navigating
  const handleNav = (to) => (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(to); // SPA navigation (no reload)
      setIsMenuOpen(false);
    }, 1000);
  };

  // helper for active link styling (desktop)
  const linkBase =
    'px-3 py-2 text-sm font-medium transition-colors duration-200';
  const linkInactive = 'text-gray-700 hover:text-orange-500';
  const linkActive = 'text-gray-900';

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">KenteRide</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink
                to="/home"
                onClick={handleNav('/home')}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/vehiclelisting"  // ✅ match your Route path exactly
                onClick={handleNav('/vehiclelisting')}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Vehicles
              </NavLink>
              <a
                href="#"
                className={`${linkBase} ${linkInactive}`}
                onClick={(e) => e.preventDefault()}
              >
                About Us
              </a>
              <a
                href="#"
                className={`${linkBase} ${linkInactive}`}
                onClick={(e) => e.preventDefault()}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for vehicles..."
                className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              to="/home"
              onClick={handleNav('/home')}
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/vehiclelisting"   // ✅ lowercase & leading slash
              onClick={handleNav('/vehiclelisting')}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              Vehicles
            </Link>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500"></div>
          <span className="ml-4 text-orange-500 font-semibold">Loading...</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
