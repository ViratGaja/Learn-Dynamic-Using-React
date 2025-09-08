import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const Nav = () => {
      const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
     <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-500">banquee.</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-teal-500 font-medium transition-colors duration-200"
            >
              Features
            </a>
            
            <div className="relative">
              <button 
                onClick={() => setIsCompareOpen(!isCompareOpen)}
                className="flex items-center text-gray-700 hover:text-teal-500 font-medium transition-colors duration-200"
              >
                Compare
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isCompareOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500">
                    Compare Plans
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500">
                    Pricing
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500">
                    Competitors
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#" 
              className="text-gray-700 hover:text-teal-500 font-medium transition-colors duration-200"
            >
              Support
            </a>
            
            <div className="relative">
              <button 
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className="flex items-center text-gray-700 hover:text-teal-500 font-medium transition-colors duration-200"
              >
                Blog
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isBlogOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500">
                    Latest Posts
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500">
                    Financial Tips
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500">
                    News
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Login and CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-teal-500 font-medium hover:text-teal-600 transition-colors duration-200">
              Login
            </button>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-200">
              Open Account
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <a 
                href="#" 
                className="block py-2 text-gray-700 hover:text-teal-500 font-medium"
              >
                Features
              </a>
              
              <div>
                <button 
                  onClick={() => setIsCompareOpen(!isCompareOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-teal-500 font-medium"
                >
                  Compare
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isCompareOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCompareOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="#" className="block py-1 text-sm text-gray-600 hover:text-teal-500">
                      Compare Plans
                    </a>
                    <a href="#" className="block py-1 text-sm text-gray-600 hover:text-teal-500">
                      Pricing
                    </a>
                    <a href="#" className="block py-1 text-sm text-gray-600 hover:text-teal-500">
                      Competitors
                    </a>
                  </div>
                )}
              </div>

              <a 
                href="#" 
                className="block py-2 text-gray-700 hover:text-teal-500 font-medium"
              >
                Support
              </a>
              
              <div>
                <button 
                  onClick={() => setIsBlogOpen(!isBlogOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-teal-500 font-medium"
                >
                  Blog
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isBlogOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBlogOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="#" className="block py-1 text-sm text-gray-600 hover:text-teal-500">
                      Latest Posts
                    </a>
                    <a href="#" className="block py-1 text-sm text-gray-600 hover:text-teal-500">
                      Financial Tips
                    </a>
                    <a href="#" className="block py-1 text-sm text-gray-600 hover:text-teal-500">
                      News
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Login/CTA buttons */}
              <div className="pt-4 space-y-2">
                <button className="w-full text-left py-2 text-teal-500 font-medium hover:text-teal-600">
                  Login
                </button>
                <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-600">
                  Open Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


export default Nav