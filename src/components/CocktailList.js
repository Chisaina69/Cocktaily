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
    <div>
      <h1>Cocktails List</h1>
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink}>
          <Link to={`/cocktails/${cocktail.idDrink}`}>
            <h3>{cocktail.strDrink}</h3>
          </Link>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '150px' }} />
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
