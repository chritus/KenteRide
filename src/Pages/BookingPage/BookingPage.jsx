import React, { useState } from 'react';
import { Calendar, MapPin, Clock, User, Phone, Mail, CreditCard, Shield, ArrowLeft, Star, CheckCircle } from 'lucide-react';

const BookingScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    drivingLicense: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const selectedVehicle = {
    name: "Honda Pilot",
    price: "₵ 350",
    period: "/day",
    rating: 4.8,
    reviews: 124,
    image: "/api/placeholder/400/250",
    features: ["Automatic", "5 Seats", "GPS", "AC", "Bluetooth"]
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => {
    const steps = ['Vehicle', 'Details', 'Personal', 'Payment'];
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index + 1 <= currentStep 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index + 1}
              </div>
              <span className={`ml-2 text-sm ${
                index + 1 <= currentStep ? 'text-orange-500 font-medium' : 'text-gray-500'
              }`}>
                {step}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 mx-4 ${
                  index + 1 < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Vehicle</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="h-48 bg-gray-200 rounded-lg bg-cover bg-center" 
                 style={{backgroundImage: `url(${selectedVehicle.image})`}}></div>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-900">{selectedVehicle.name}</h4>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{selectedVehicle.rating}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">({selectedVehicle.reviews} reviews)</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedVehicle.features.map((feature, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-orange-500">{selectedVehicle.price}</span>
                <span className="text-gray-600">{selectedVehicle.period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rental Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter pickup location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Drop-off Location
            </label>
            <input
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter drop-off location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Pickup Date
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Pickup Time
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Drop-off Date
            </label>
            <input
              type="date"
              name="dropoffDate"
              value={formData.dropoffDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Drop-off Time
            </label>
            <input
              type="time"
              name="dropoffTime"
              value={formData.dropoffTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <CreditCard className="w-4 h-4 inline mr-2" />
              Driving License Number
            </label>
            <input
              type="text"
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your driving license number"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <CreditCard className="w-4 h-4 inline mr-2" />
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="123"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter cardholder name"
            />
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Vehicle:</span>
            <span className="font-medium">{selectedVehicle.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Daily Rate:</span>
            <span className="font-medium">{selectedVehicle.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">3 days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">₵ 1,050</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Insurance:</span>
            <span className="font-medium">₵ 150</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-orange-500">₵ 1,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-gray-600 hover:text-orange-500 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Vehicles
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Book Your Vehicle</h1>
          <p className="text-gray-600 mt-2">Complete your booking in just a few simple steps</p>
        </div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Step Content */}
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
          >
            {currentStep === 4 ? (
              <>
                <Shield className="w-5 h-5 mr-2" />
                Complete Booking
              </>
            ) : (
              'Next Step'
            )}
          </button>
        </div>

        {/* Security Note */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 text-green-500 mr-2" />
            Your personal information is protected with 256-bit SSL encryption
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;