import React, { useState } from 'react';
import { Search, Menu, X, MapPin, DollarSign, Shield, Clock, Star } from 'lucide-react';
import car1 from "../../assets/car1.png"
import { useNavigate } from 'react-router-dom';
import car from '../../assets/car.png';

const GhanaRideHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const vehicleCategories = [
    {
      id: 1,
      title: "Bikes for Adventure",
      image: car,
      description: "Explore Ghana's beautiful landscapes on two wheels"
    },
    {
      id: 2,
      title: "Sedans for City Comfort",
      image: car, 
      description: "Comfortable rides for urban exploration"
    },
    {
      id: 3,
      title: "Vans for Group Travel",
      image: car,
      description: "Perfect for family trips and group adventures"
    },
    {
      id: 4,
      title: "Luxury for Special Occasions",
      image: car,
      description: "Premium vehicles for memorable experiences"
    }
  ];

  const featuredVehicles = [
    {
      id: 1,
      name: "Honda Pilot",
      price: "₵ 350",
      period: "/day",
      rating: 4.8,
      reviews: 124,
      image: car
    },
    {
      id: 2,
      name: "Hyundai Elantra",
      price: "₵ 280",
      period: "/day", 
      rating: 4.6,
      reviews: 89,
      image: car
    },
    {
      id: 3,
      name: "Toyota RAV4",
      price: "₵ 420",
      period: "/day",
      rating: 4.9,
      reviews: 156,
      image: car
    },
    {
      id: 4,
      name: "Honda Civic",
      price: "₵ 250",
      period: "/day",
      rating: 4.7,
      reviews: 92,
      image: car
    },
    {
      id: 5,
      name: "Mercedes-Benz C-Class",
      price: "₵ 650",
      period: "/day",
      rating: 4.9,
      reviews: 78,
      image: car
    },
    {
      id: 6,
      name: "Ford Transit Van",
      price: "₵ 380",
      period: "/day",
      rating: 4.5,
      reviews: 67,
      image: car
    }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: "Wide Vehicle Selection",
      description: "From economy cars to luxury vehicles, find the perfect ride for your needs"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-500" />,
      title: "Competitive Pricing",
      description: "Get the best value for your money with transparent, affordable rates"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Reliable Local Service",
      description: "Trust our local expertise and commitment to excellent customer service"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Safety & Reliability",
      description: "All vehicles are regularly maintained and thoroughly inspected"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-orange-50 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-65"
    style={{ backgroundImage: `url(${car1})` }}
  ></div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-22">
    <div className="text-center backdrop-blur-md bg-white/40 rounded-lg p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Your Journey to Explore Ghana<br />
        <span className="text-orange-500">Begins Here</span>
      </h1>
      <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
        Discover the beauty and diversity of Ghana with our reliable car rental service.
        From bustling cities to scenic countryside, we've got the perfect vehicle for your adventure.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Where would you like to go?"
          className="flex-1 px-6 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200">
          Search Vehicles
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Popular Vehicle Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Vehicle Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our diverse fleet of vehicles, each perfect for different types of adventures across Ghana
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url(${category.image})`}}></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    Browse Vehicles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose GhanaRide */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GhanaRide?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best car rental experience in Ghana
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Top Featured Vehicles */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Top Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked vehicles offering the best value and comfort for your journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url(${vehicle.image})`}}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{vehicle.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">({vehicle.reviews} reviews)</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-orange-500">{vehicle.price}</span>
                      <span className="text-gray-600">{vehicle.period}</span>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default GhanaRideHomepage;