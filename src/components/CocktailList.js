import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Cocktails</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="shadow-md p-4">
            <Link to={`/cocktails/${cocktail.idDrink}`}>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">{cocktail.strDrink}</h3>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-full h-40 object-cover rounded-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailList;

