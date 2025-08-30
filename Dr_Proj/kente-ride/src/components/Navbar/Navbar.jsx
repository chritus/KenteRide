import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate loading for 1s then navigate
    setTimeout(() => {
      setLoading(false);
      window.location.href = e.target.href;
    }, 1000);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">KenteRide</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/Home"
                onClick={handleLinkClick}
                className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/VehicleListing"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Vehicles
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a
              href="/Home"
              onClick={handleLinkClick}
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="/VehicleListing"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              Vehicles
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              onClick={handleLinkClick}
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
