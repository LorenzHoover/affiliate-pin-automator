import React from "react";
<<<<<<< HEAD:frontend/src/Home.js
<<<<<<<< HEAD:frontend/src/Home.js
import { Link } from "react-router-dom";
========
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
>>>>>>>> 5b8542cf (Initial commit - Affiliate Pin Automator):src/App.js

const Home = () => {
  return (
<<<<<<<< HEAD:frontend/src/Home.js
=======
import { Link } from "react-router-dom";

const Home = () => {
  return (
>>>>>>> 5b8542cf (Initial commit - Affiliate Pin Automator):src/Home.js
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
<<<<<<< HEAD:frontend/src/Home.js
========
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
>>>>>>>> 5b8542cf (Initial commit - Affiliate Pin Automator):src/App.js
=======
>>>>>>> 5b8542cf (Initial commit - Affiliate Pin Automator):src/Home.js
  );
};

export default Home;
