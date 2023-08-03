import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktailDetail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setCocktail(data.drinks[0]);
      } catch (error) {
        console.error('Error fetching cocktail detail:', error);
      }
    };

    fetchCocktailDetail();
  }, [id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{cocktail.strDrink}</h1>
      <p>
        <span className="font-semibold">Category:</span> {cocktail.strCategory}
      </p>
      <p>
        <span className="font-semibold">Instructions:</span> {cocktail.strInstructions}
      </p>
      <h3 className="mt-4 text-lg font-semibold">Ingredients:</h3>
      <ul className="list-disc list-inside">
        {Object.keys(cocktail)
          .filter((key) => key.startsWith('strIngredient') && cocktail[key])
          .map((key) => (
            <li key={key}>{cocktail[key]}</li>
          ))}
      </ul>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="mt-8 rounded-md" style={{ width: '200px' }} />
    </div>
  );
};

export default CocktailDetail;
