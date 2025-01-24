import React from 'react';
import IngredientsList from './components/IngredientsList';
import ClaudeRecipe from './components/ClaudeRecipe';
import { getRecipeFromMistral } from '../src/ai.js';

/**
 * Challenge: Get a recipe from the AI!
 *
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 *
 * Using either the `getRecipeFromChefClaude` function or the
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 *
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState(null);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient').trim();
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  const useRef = React.useRef(null);

  console.log(recipe);

  React.useEffect(() => {
    if (recipe !== null && useRef !== null) {
      useRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          addIngredient(formData);
        }}
        className='add-ingredient-form'>
        <input
          type='text'
          placeholder='e.g. oregano'
          aria-label='Add ingredient'
          name='ingredient'
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          useRef={useRef}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
