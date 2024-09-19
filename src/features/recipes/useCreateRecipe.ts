import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createRecipe as createRecipeApi } from "../../services/apiUserRecipes";

export function useCreateRecipe() {
  const queryClient = useQueryClient();

  const { mutate: createRecipe, isPending: isCreating } = useMutation({
    mutationFn: createRecipeApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedRecipes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRecipe };
}
