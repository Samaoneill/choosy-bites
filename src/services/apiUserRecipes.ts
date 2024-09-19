import { Database } from "../types/database";
import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

interface GetUsersRecipesParams {
  userId: string;
  page?: number;
}

export async function getUsersRecipes({ userId, page }: GetUsersRecipesParams) {
  let query = supabase
    .from("recipes")
    .select("recipe_id", {
      count: "exact",
    })
    .eq("user_id", userId);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Recipes could not be loaded");
  }

  return { data, count };
}

export async function createRecipe(
  newRecipe: Database["public"]["Tables"]["recipes"]["Insert"],
) {
  const { data, error } = await supabase
    .from("recipes")
    .insert([{ ...newRecipe }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Recipe could not be saved");
  }

  return data;
}
