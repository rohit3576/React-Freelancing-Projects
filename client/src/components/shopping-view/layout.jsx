import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/shopping/home" className="text-2xl font-bold text-indigo-600">
            MyStore
          </Link>
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/shopping/home" className="hover:text-indigo-500">Home</Link>
            <Link to="/shopping/listings" className="hover:text-indigo-500">Products</Link>
            <Link to="/shopping/checkout" className="hover:text-indigo-500">Checkout</Link>
            <Link to="/shopping/account" className="hover:text-indigo-500">Account</Link>
          </nav>
          <button className="md:hidden text-gray-700 focus:outline-none">
            {/* Mobile menu button */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet /> {/* Nested routes will render here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ShoppingLayout;
