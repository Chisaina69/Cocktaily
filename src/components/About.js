import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url(/back.jpg)" }}
    >
      <div className="max-w-[1240px] mx-auto px-4 py-8 text-white">
        <h1 className="text-4xl font-bold mb-4">
          About Cocktaily - Discover the Art of Mixology
        </h1>
        <p className="text-xl mb-6">
          Welcome to Cocktaily, your ultimate destination to explore the
          fascinating world of mixology and cocktail delights! We are passionate
          about all things cocktail-related, and our mission is to share that
          passion with you. Here's what makes Cocktaily a unique and exciting
          place for cocktail enthusiasts:
        </p>

        <ul className="list-disc ml-6 mb-6">
          <li>
            <span className="font-semibold">Handcrafted Cocktail Recipes:</span>{" "}
            At Cocktaily, we curate a diverse collection of handcrafted cocktail
            recipes that are sure to tantalize your taste buds. From classic
            cocktails to innovative creations, our recipes are crafted with love
            and attention to detail to ensure every sip is an unforgettable
            experience.
          </li>
        </ul>

        <p className="text-xl">
          So, whether you're a seasoned mixologist or a curious newcomer,
          Cocktaily welcomes you to embark on a captivating journey through the
          world of cocktails. Cheers to exploring the art of mixology and
          crafting your own cocktail masterpieces!
        </p>

        <div className="mt-6">
          <Link to="/cocktails" className="text-blue-500 underline">
            Check out our Cocktails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
