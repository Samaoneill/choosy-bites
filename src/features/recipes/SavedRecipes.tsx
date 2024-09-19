import { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser/lib/index";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

import { useUsersRecipes } from "./useUsersRecipes";
import { useRecipesById } from "./useRecipesByID";

import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

function SavedRecipes() {
  const { isPending, recipes = [], count, error } = useUsersRecipes();
  const [recipeIds, setRecipeIds] = useState<string>("");

  const {
    isPending: isPendingRecipes,
    recipes: recipesDetail,
    error: recipeError,
  } = useRecipesById(recipeIds);

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const ids = recipes.map((recipe) => recipe.recipe_id).join(",");
      setRecipeIds(ids);
    }
  }, [recipes]);

  if (isPending || isPendingRecipes) return <Spinner />;

  if (error) toast.error(error.message);
  if (recipeError) toast.error("Error receiving recipes");

  const truncateSummary = (summary: string, wordLimit: number) => {
    const words = summary.split(" ");
    if (words.length <= wordLimit) return summary;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="rounded-xl bg-food-500">
      <div className="flex flex-col items-center gap-4 p-6">
        <h2 className="mb-2 text-4xl font-semibold text-white">
          Saved Recipes
        </h2>
        {recipesDetail && count > 0 ? (
          recipesDetail.map((recipe, i) => (
            <div
              key={recipe.id + i}
              className="flex w-full flex-col gap-4 lg:flex-row"
            >
              <img
                className="w-full rounded-xl object-cover lg:w-1/3"
                src={recipe.image}
                alt={recipe.title}
              />

              <div className="flex w-full flex-col gap-4 rounded-xl bg-food-600 p-4 lg:w-2/3">
                <h3 className="text-2xl font-semibold text-white hover:text-food-300">
                  <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </h3>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="flex flex-col gap-2 text-white">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <strong>Servings:</strong> {recipe.servings}
                      </li>
                      <li>
                        <strong>Ready in Minutes:</strong>{" "}
                        {recipe.readyInMinutes}
                      </li>
                      <li>
                        <strong>Source:</strong>{" "}
                        <a
                          href={recipe.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-food-200 underline hover:text-food-400"
                        >
                          {recipe.sourceName}
                        </a>
                      </li>
                    </ul>
                    <p>
                      {HTMLReactParser(truncateSummary(recipe.summary, 35))}
                    </p>
                  </div>
                  <ul className="grid gap-4 rounded-xl bg-food-500 p-4 text-white sm:grid-cols-2">
                    <li className="flex flex-grow flex-col items-center justify-center text-center">
                      <strong>Vegetarian</strong>
                      {recipe.vegetarian ? (
                        <IoCheckmarkCircle className="text-2xl" />
                      ) : (
                        <IoCloseCircle className="text-2xl" />
                      )}
                    </li>
                    <li className="flex flex-grow flex-col items-center justify-center text-center">
                      <strong>Vegan</strong>
                      {recipe.vegan ? (
                        <IoCheckmarkCircle className="text-2xl" />
                      ) : (
                        <IoCloseCircle className="text-2xl" />
                      )}
                    </li>
                    <li className="flex flex-grow flex-col items-center justify-center text-center">
                      <strong>Gluten Free</strong>
                      {recipe.glutenFree ? (
                        <IoCheckmarkCircle className="text-2xl" />
                      ) : (
                        <IoCloseCircle className="text-2xl" />
                      )}
                    </li>
                    <li className="flex flex-grow flex-col items-center justify-center text-center">
                      <strong>Dairy Free</strong>
                      {recipe.dairyFree ? (
                        <IoCheckmarkCircle className="text-2xl" />
                      ) : (
                        <IoCloseCircle className="text-2xl" />
                      )}
                    </li>
                  </ul>
                </div>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="mt-4 w-full rounded-md bg-food-500 px-4 py-2 text-center text-white transition-all duration-300 hover:bg-food-400"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="bg=food-500 text-center text-white">
            No saved recipes
          </div>
        )}
        <Pagination count={count} />
      </div>
    </div>
  );
}

export default SavedRecipes;
