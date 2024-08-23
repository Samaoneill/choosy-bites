import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../../services/apiRecipes";
import { RecipeDetail } from "../../types/recipe";

interface UseRecipeResult {
  isPending: boolean;
  recipe?: RecipeDetail;
  error: unknown;
}

export function UseRecipe(id: string): UseRecipeResult {
  const {
    isPending,
    data: recipe,
    error,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id),
    retry: false,
  });

  return { isPending, recipe, error };
}
