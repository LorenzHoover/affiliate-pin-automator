import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">Affiliate Pin Automator</h1>
        <p className="text-gray-600 mt-2">
          A streamlined solution for automating Pinterest marketing.
        </p>
        <p className="text-gray-600 mt-2">
          Affiliate Pin Automator helps users efficiently create and schedule engaging Pinterest posts, driving organic traffic to their brands.
        </p>
        <div className="mt-4">
          <Link to="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
