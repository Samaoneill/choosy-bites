export interface ExtendedIngredient {
  image: string;
  original: string;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;
  sourceName: string;
  sourceUrl: string;
  creditsText: string;
  instructions: string;
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  extendedIngredients: ExtendedIngredient[];
  summary: string;
}

export interface RecipeSummary {
  id: number;
  title: string;
  image: string;
  usedIngredients: { name: string }[];
}

export interface SavedRecipeSummary {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  summary: string;
  sourceUrl: string;
  sourceName: string;
  dairyFree: boolean;
  glutenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
}
