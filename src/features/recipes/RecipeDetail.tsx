import { Link, useParams } from "react-router-dom";
import { UseRecipe } from "./useRecipe";
import { useCreateRecipe } from "./useCreateRecipe";
import Spinner from "../../ui/Spinner";

function RecipeDetail() {
  const { recipeId } = useParams() as { recipeId: string };
  const { isPending, recipe, error } = UseRecipe(recipeId);
  const { isCreating, createRecipe } = useCreateRecipe();

  if (isPending) return <Spinner />;

  if (error)
    return <div className="text-center text-red-500">Error loading recipe</div>;
  if (!recipe) return <div className="text-center">No recipe found</div>;

  function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    createRecipe({ recipe_id: recipeId });
  }

  return (
    <article className="w-full rounded-lg bg-food-500 p-6 text-white">
      <div className="mb-6">
        <Link
          to="/recipes"
          className="inline-flex items-center font-semibold text-food-300 underline hover:text-food-400"
        >
          &larr; Back to Recipes
        </Link>
      </div>
      <header className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">
        <div className="md:w-1/3">
          <img
            className="w-full rounded-lg object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>

        <div className="space-y-4 md:w-2/3">
          <button onClick={handleSave}>
            {isCreating ? "Saving..." : "Save Recipe"}
          </button>
          <h1 className="text-4xl font-bold">{recipe.title}</h1>
          <ul className="space-y-2">
            <li>
              <strong>Servings:</strong> {recipe.servings}
            </li>
            <li>
              <strong>Ready in Minutes:</strong> {recipe.readyInMinutes}
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-food-300 underline hover:text-food-400"
              >
                {recipe.sourceName}
              </a>
            </li>
            <li>
              <strong>Credits:</strong> {recipe.creditsText}
            </li>
          </ul>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Instructions</h2>
        <div className="rounded-lg bg-food-600 p-4">
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Ingredients</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li
              key={index}
              className="flex items-center gap-4 rounded-lg bg-food-600 p-2"
            >
              <img
                src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.original}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <span>{ingredient.original}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Summary</h2>
        <div
          className="rounded-lg bg-food-600 p-4"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
      </section>
    </article>
  );
}

export default RecipeDetail;
