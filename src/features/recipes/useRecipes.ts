import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiRecipes";
import { RecipeSummary } from "../../types/recipe";

interface UseRecipesResult {
  isPending: boolean;
  recipes?: RecipeSummary[];
  error: unknown;
}

export function useRecipes(query: string | null): UseRecipesResult {
  const {
    isPending,
    data: recipes,
    error,
  } = useQuery({
    queryKey: ["recipes", query],
    queryFn: () => getRecipes(query || ""),
    retry: false,
  });

  return { isPending, recipes, error };
}
