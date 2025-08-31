import React, { useState } from 'react';
import { Star, Headphones, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import vehicle from '../../assets/vehicle.png';

const GhanaRideVehicles = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Optional "fake loading" before navigating
  const handleNav = (to) => (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(to);            // SPA navigation (no reload)
    }, 500);
    setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000); // Delay slightly to ensure DOM has updated
  };
  

  // TODO: change '/newscreen' to your real route (e.g., '/booking')
  const handleBookNow = () => navigate('/newscreen');

  const featuredVehicles = [
    { id: 1, name: 'Toyota Highlander', price: '₵ 450', period: '/day', rating: 4.8, reviews: 124, image: '/api/placeholder/280/200', category: 'SUV' },
    { id: 2, name: 'Honda Civic',      price: '₵ 280', period: '/day', rating: 4.6, reviews: 89,  image: '/api/placeholder/280/200', category: 'Sedan' },
    { id: 3, name: 'Ford Ranger',      price: '₵ 380', period: '/day', rating: 4.7, reviews: 156, image: '/api/placeholder/280/200', category: 'Pickup' },
    { id: 4, name: 'Hyundai i10',      price: '₵ 180', period: '/day', rating: 4.5, reviews: 92,  image: '/api/placeholder/280/200', category: 'Compact' },
    { id: 5, name: 'Mercedes-Benz C-Class', price: '₵ 650', period: '/day', rating: 4.9, reviews: 78,  image: '/api/placeholder/280/200', category: 'Luxury' },
    { id: 6, name: 'Hyundai H1',       price: '₵ 420', period: '/day', rating: 4.6, reviews: 67,  image: '/api/placeholder/280/200', category: 'Van' },
    { id: 7, name: 'Jeep Wrangler',    price: '₵ 520', period: '/day', rating: 4.8, reviews: 134, image: '/api/placeholder/280/200', category: 'Off-Road' },
    { id: 8, name: 'Kia Picanto',      price: '₵ 150', period: '/day', rating: 4.4, reviews: 86,  image: '/api/placeholder/280/200', category: 'Economy' },
  ];

  const features = [
    {
      icon: <Star className="w-12 h-12 text-orange-500" />,
      title: 'Trusted & Reliable',
      description: 'All our vehicles are regularly maintained and inspected for your safety and peace of mind.',
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: 'Diverse Fleet',
      description: 'From economy cars to luxury vehicles, we have the perfect ride for every occasion and budget.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-orange-500" />,
      title: '24/7 Support',
      description: 'Our customer service team is available around the clock to assist you with any questions or concerns.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: 'GhanaRide made our trip easy! The booking process was seamless and the car was exactly as described. Highly recommend for anyone visiting Ghana!',
      author: 'Sarah Johnson',
      rating: 5,
      location: 'Tourist from UK',
    },
    {
      id: 2,
      text: 'Pricing is realistic and highly rated service. The vehicles are well-maintained and clean. Their attention to detail and customer service is excellent.',
      author: 'Kwame Asante',
      rating: 5,
      location: 'Local Business Owner',
    },
    {
      id: 3,
      text: 'I used GhanaRide for my business trip and was impressed with their professionalism. Great service, fair prices, and reliable vehicles.',
      author: 'Michael Chen',
      rating: 5,
      location: 'Business Traveler',
    },
  ];

  const renderStars = (rating) =>
    [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.round(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${vehicle})` }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Journey, Our Ride.
              <br />
              <span className="text-orange-100">Ghana-Style!</span>
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Explore Ghana with comfort and confidence. Your adventure starts here.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Vehicles */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our premium selection of well-maintained vehicles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="h-48 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${v.image})` }}
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{v.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{v.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{v.category}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xl font-bold text-orange-500">{v.price}</span>
                      <span className="text-gray-600 text-sm">{v.period}</span>
                    </div>
                    <span className="text-xs text-gray-500">({v.reviews} reviews)</span>
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Book Now
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">{renderStars(t.rating)}</div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Landing */}
      <div className="flex justify-center mb-3 mt-3 bg-white py-1">
        <Link
          to="/"
          onClick={handleNav('/')}
          className="w-50 h-10 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm text-center font-medium transition-colors duration-200"
        >
          Back to LandingPage
        </Link>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/75 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500" />
          <span className="ml-4 text-orange-500 font-semibold">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default GhanaRideVehicles;
