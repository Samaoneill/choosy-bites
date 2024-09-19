import { useTagsContext } from "../../context/TagContext";
import { useRecipes } from "./useRecipes";
import RecipeItem from "./RecipeItem";
import Spinner from "../../ui/Spinner";

function RecipeItems() {
  const { tags } = useTagsContext();
  const term = tags.join(",");
  const { isPending, recipes, error } = useRecipes(term);

  if (isPending) return <Spinner />;
  if (error) return <div>Error loading recipes</div>;
  if (!recipes || recipes.length === 0)
    return (
      <div>
        {tags.length === 0
          ? "Please select ingredients to search for recipes."
          : "No Recipes Found"}
      </div>
    );

  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {recipes?.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)}
    </div>
  );
}

export default RecipeItems;
