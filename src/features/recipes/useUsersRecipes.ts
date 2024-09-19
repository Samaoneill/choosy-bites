import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { getUsersRecipes } from "../../services/apiUserRecipes";
import { PAGE_SIZE } from "../../utils/constants";

export interface GetUsersRecipesResult {
  data: number[];
  count: number | null;
}

export function useUsersRecipes() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { user } = useUser();

  if (!user || !user.id) {
    throw new Error("User not found or user id is missing");
  }

  const userId = user.id;
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending,
    data: { data: recipes, count } = {},
    error,
  } = useQuery({
    queryKey: ["userRecipes", page, userId],
    queryFn: () => getUsersRecipes({ userId, page }),
  });

  const pageCount = Math.ceil((count ?? 0) / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["userRecipes", page + 1, userId],
      queryFn: () => getUsersRecipes({ userId, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["userRecipes", page - 1, userId],
      queryFn: () => getUsersRecipes({ userId, page: page - 1 }),
    });

  return { isPending, error, recipes, count: count ?? 0 };
}
