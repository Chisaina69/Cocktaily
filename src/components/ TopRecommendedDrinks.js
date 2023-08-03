import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopRecommendedDrinks = () => {
  const [recommendedDrinks, setRecommendedDrinks] = useState([]);

  useEffect(() => {
    const fetchRecommendedDrinks = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        const data = await response.json();
        setRecommendedDrinks(data.drinks);
      } catch (error) {
        console.error('Error fetching top recommended drinks:', error);
      }
    };

    fetchRecommendedDrinks();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Top Recommended Drinks</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {recommendedDrinks.map((drink) => (
          <Link key={drink.idDrink} to={`/cocktails/${drink.idDrink}`}>
            <div className="border border-gray-300 rounded-md p-4 hover:bg-gray-100">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{drink.strDrink}</h3>
              <p>{drink.strCategory}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRecommendedDrinks;
