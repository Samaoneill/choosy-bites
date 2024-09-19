import {
  ExtendedIngredient,
  RecipeDetail,
  SavedRecipeSummary,
} from "../types/recipe";
import { RecipeSummary } from "../types/recipe";
import { MAX_RECIPES_SIZE } from "../utils/constants";
import { spoonacular_app_key } from "./spoonacular";

export async function getRecipes(query: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonacular_app_key}&ingredients=${query}&number=${MAX_RECIPES_SIZE}`,
  );

  if (!res.ok) throw new Error("Could not load recipes");

  const data: RecipeSummary[] = await res.json();

  return data.map(({ id, title, image, usedIngredients }) => {
    return {
      id,
      title,
      image,
      usedIngredients: usedIngredients.map((ingredient) => ({
        name: ingredient.name,
      })),
    };
  });
}

export async function getRecipesByID(query: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/informationBulk?apiKey=${spoonacular_app_key}&ids=${query}`,
  );

  if (!res.ok) throw new Error("Could not load recipes");

  const data: SavedRecipeSummary[] = await res.json();

  return data.map(
    ({
      id,
      title,
      image,
      servings,
      readyInMinutes,
      sourceUrl,
      sourceName,
      dairyFree,
      glutenFree,
      vegan,
      vegetarian,
      summary,
    }) => {
      return {
        id,
        title,
        image,
        servings,
        readyInMinutes,
        sourceUrl,
        sourceName,
        dairyFree,
        glutenFree,
        vegan,
        vegetarian,
        summary,
      };
    },
  );
}

export async function getRecipe(id: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${spoonacular_app_key}&includeNutrition=false`,
  );

  if (!res.ok) throw new Error("Could not load recipe");

  const data = await res.json();

  const recipeData: RecipeDetail = {
    id: data.id,
    title: data.title,
    image: data.image,
    servings: data.servings,
    readyInMinutes: data.readyInMinutes,
    cookingMinutes: data.cookingMinutes || 0,
    preparationMinutes: data.preparationMinutes || 0,
    sourceName: data.sourceName || "",
    sourceUrl: data.sourceUrl || "",
    creditsText: data.creditsText || "",
    instructions: data.instructions || "",
    vegan: data.vegan,
    vegetarian: data.vegetarian,
    glutenFree: data.glutenFree,
    dairyFree: data.dairyFree,
    extendedIngredients: data.extendedIngredients.map(
      (ingredient: ExtendedIngredient) => ({
        image: ingredient.image,
        original: ingredient.original,
      }),
    ),
    summary: data.summary || "",
  };

  return recipeData;
}
