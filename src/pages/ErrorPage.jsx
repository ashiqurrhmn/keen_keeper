import React from 'react';
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        
        <h1 className="text-9xl font-extrabold drop-shadow-lg text-[#244D3F]">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-[#244D3F]">
          Oops! Page not found
        </h2>

        <p className="mt-2 text-lg text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6 ">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#244D3F] text-white font-semibold rounded-full shadow-lg"
          >
            Go Back Home
          </Link>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          🚀 Lost in space? Let's get you back!
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;