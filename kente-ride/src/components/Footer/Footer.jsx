import React from 'react'

export default function Footer() {
  return (
    <div className='bg-white'>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">GhanaRide</span>
            </div>
            <p className="text-gray-400">Your trusted partner for exploring Ghana</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
