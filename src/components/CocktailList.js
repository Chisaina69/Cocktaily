import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CocktailDetail from './CocktailDetail';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

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

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Cocktails</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cocktails.map(cocktail => (
            <div key={cocktail.idDrink} className="bg-white shadow-md p-4">
              <Link to={`/cocktails/${cocktail.idDrink}`}>
                <h3 className="text-xl font-semibold mb-2">{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-40 object-cover rounded-md" />
              </Link>
              <button onClick={() => handleCocktailClick(cocktail)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            </div>
          ))}
        </div>
      </div>
      {selectedCocktail && (
        <div className="flex-1">
          <CocktailDetail cocktail={selectedCocktail} />
        </div>
      )}
    </div>
  );
};

export default CocktailList;


