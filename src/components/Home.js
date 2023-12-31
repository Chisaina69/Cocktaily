import React from "react";
import { Link } from "react-router-dom";
import TopRecommendedDrinks from "./ TopRecommendedDrinks";

const Home = () => {
  return (
    <div className="relative mt-8">
      <div className="relative">
        <video className="w-full h-auto" autoPlay muted loop>
          <source src="/welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to a Place to Get Buzzy!
          </h1>
          <Link
            to="/cocktails"
            className="px-4 py-2 bg-blue-500 text-white rounded-md  sm:inline-block"
          >
            Go to Cocktails
          </Link>
        </div>
      </div>
      <div className="relative mt-8">
        <div className="px-4 md:px-8">
          <TopRecommendedDrinks />
        </div>
      </div>
    </div>
  );
};

export default Home;


