import { useQuery } from "@tanstack/react-query";
import { getRecipesByID } from "../../services/apiRecipes";
import { SavedRecipeSummary } from "../../types/recipe";

interface UseRecipesByIdResult {
  isPending: boolean;
  recipes?: SavedRecipeSummary[];
  error: unknown;
}

export function useRecipesById(query: string | null): UseRecipesByIdResult {
  const {
    isPending,
    data: recipes,
    error,
  } = useQuery({
    queryKey: ["savedRecipes", query],
    queryFn: () => getRecipesByID(query || ""),
    retry: false,
    enabled: !!query,
    refetchOnWindowFocus: false,
  });

  return { isPending, recipes, error };
}
