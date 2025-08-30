import React, { useState } from 'react';
import { Search, Menu, X, Star, Filter, ChevronDown, Users, Fuel, Settings, Car, Truck, Bike } from 'lucide-react';

const GhanaRideVehicleListing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { id: 'all', name: 'All', icon: <Car className="w-6 h-6" /> },
    { id: 'sedan', name: 'Sedan', icon: <Car className="w-6 h-6" /> },
    { id: 'suv', name: 'SUV', icon: <Truck className="w-6 h-6" /> },
    { id: 'pickup', name: 'Pickup', icon: <Truck className="w-6 h-6" /> },
    { id: 'van', name: 'Van', icon: <Users className="w-6 h-6" /> },
    { id: 'luxury', name: 'Luxury', icon: <Star className="w-6 h-6" /> }
  ];

  const allVehicles = [
    {
      id: 1,
      name: "Suzuki Alto",
      category: "sedan",
      price: "₵ 120",
      period: "/day",
      rating: 4.5,
      reviews: 89,
      passengers: 4,
      transmission: "Manual",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Kia Picanto",
      category: "sedan", 
      price: "₵ 150",
      period: "/day",
      rating: 4.6,
      reviews: 124,
      passengers: 4,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Hyundai Accent",
      category: "sedan",
      price: "₵ 180",
      period: "/day", 
      rating: 4.7,
      reviews: 156,
      passengers: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Volkswagen Polo",
      category: "sedan",
      price: "₵ 200",
      period: "/day",
      rating: 4.8,
      reviews: 92,
      passengers: 5,
      transmission: "Manual",
      fuel: "Petrol", 
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Toyota Corolla",
      category: "sedan",
      price: "₵ 250",
      period: "/day",
      rating: 4.9,
      reviews: 203,
      passengers: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Honda Civic",
      category: "sedan",
      price: "₵ 280",
      period: "/day",
      rating: 4.8,
      reviews: 167,
      passengers: 5,
      transmission: "Automatic", 
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 7,
      name: "Mercedes-Benz C200",
      category: "luxury",
      price: "₵ 650",
      period: "/day",
      rating: 4.9,
      reviews: 78,
      passengers: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 8,
      name: "Ford Ranger",
      category: "pickup",
      price: "₵ 420",
      period: "/day",
      rating: 4.7,
      reviews: 134,
      passengers: 5,
      transmission: "Manual",
      fuel: "Diesel",
      image: "/api/placeholder/300/200"
    },
    {
      id: 9,
      name: "Toyota Hilux",
      category: "pickup",
      price: "₵ 380",
      period: "/day",
      rating: 4.8,
      reviews: 198,
      passengers: 5,
      transmission: "Manual",
      fuel: "Diesel",
      image: "/api/placeholder/300/200"
    },
    {
      id: 10,
      name: "Nissan Navara",
      category: "pickup",
      price: "₵ 400",
      period: "/day",
      rating: 4.6,
      reviews: 112,
      passengers: 5,
      transmission: "Automatic",
      fuel: "Diesel",
      image: "/api/placeholder/300/200"
    },
    {
      id: 11,
      name: "Toyota RAV4",
      category: "suv",
      price: "₵ 450",
      period: "/day",
      rating: 4.8,
      reviews: 156,
      passengers: 7,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    },
    {
      id: 12,
      name: "BMW X3",
      category: "luxury",
      price: "₵ 750",
      period: "/day",
      rating: 4.9,
      reviews: 67,
      passengers: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "/api/placeholder/300/200"
    }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? allVehicles 
    : allVehicles.filter(vehicle => vehicle.category === selectedCategory);

  const vehiclesPerPage = 8;
  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);
  const startIndex = (currentPage - 1) * vehiclesPerPage;
  const displayedVehicles = filteredVehicles.slice(startIndex, startIndex + vehiclesPerPage);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-100 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: "url('/api/placeholder/1200/400')"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Ride in Ghana
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our extensive fleet of vehicles available for rent across Ghana. Filter by price, type, and features to find your ideal ride.
            </p>
            
            {/* Search Filters */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pick-up Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pick-up Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200">
                    Search Vehicles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Categories */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-orange-300'
                }`}
              >
                {category.icon}
                <span className="mt-2 text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Listings */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Available Vehicles</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{filteredVehicles.length} vehicles found</span>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url(${vehicle.image})`}}></div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{vehicle.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-1" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-1" />
                      <span>{vehicle.fuel}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-3">({vehicle.reviews} reviews)</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xl font-bold text-orange-500">{vehicle.price}</span>
                      <span className="text-gray-600 text-sm">{vehicle.period}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
              >
                « Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-2 text-sm rounded ${
                    currentPage === index + 1
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
              >
                Next »
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default GhanaRideVehicleListing;