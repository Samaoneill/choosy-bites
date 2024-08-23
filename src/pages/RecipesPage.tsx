import RecipeItems from "../features/recipes/RecipeItems";
import SearchInput from "../features/recipes/SearchInput";

function RecipesPage() {
  return (
    <>
      <div className="mb-4 flex w-full">
        <div className="flex h-40 w-1/2 flex-col items-center justify-center gap-4 rounded-bl-xl rounded-tl-xl bg-food-500 text-white">
          <h1 className="text-center text-4xl font-semibold">
            Didn't Find What You Need?
          </h1>
          <h2 className="text-center text-2xl">Try Another Search!</h2>
        </div>
        <div className="w-1/2 rounded-br-xl rounded-tr-xl bg-[url('/hero-image.jpg')] bg-cover">
          <div className="flex h-full items-center justify-center bg-gradient-to-l from-transparent to-food-500">
            <SearchInput />
          </div>
        </div>
      </div>
      <RecipeItems />
    </>
  );
}

export default RecipesPage;
