import { Link } from "react-router-dom";
import { RecipeSummary } from "../../types/recipe";

interface RecipeItemProps {
  recipe: RecipeSummary;
}

function RecipeItem({
  recipe: { id, title, image, usedIngredients },
}: RecipeItemProps) {
  return (
    <Link className="flex grow" to={`/recipe/${id}`}>
      <div className="overflow-hidden rounded-xl bg-food-500 text-white">
        <div className="relative">
          <img className="w-full" src={image} alt={title} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-food-500"></div>
        </div>
        <div className="flex flex-col p-4">
          <h2 className="mb-4 text-center text-2xl font-semibold">{title}</h2>

          <h3 className="mb-4 text-center text-lg">Matching Ingredients</h3>
          <ul className="flex flex-col gap-2">
            {usedIngredients.map((ingredient) => (
              <li
                key={ingredient.name}
                className="rounded-md bg-food-600 px-3 py-2 text-sm font-medium text-white"
              >
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default RecipeItem;
