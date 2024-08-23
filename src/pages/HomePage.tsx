import SearchInput from "../features/recipes/SearchInput";

function HomePage() {
  return (
    <div className="flex w-full">
      <div className="flex h-80 w-1/2 flex-col items-center justify-center gap-10 rounded-bl-xl rounded-tl-xl bg-food-500 text-white">
        <h1 className="text-center text-4xl font-semibold">
          Start Cooking with Choosy Bites
        </h1>
        <h2 className="w-2/3 text-center text-2xl leading-10">
          Enter your ingredients to discover recipes tailored to your eating
          habits!
        </h2>
      </div>
      <div className="w-1/2 rounded-br-xl rounded-tr-xl bg-[url('/hero-image.jpg')] bg-cover">
        <div className="flex h-full items-center justify-center bg-gradient-to-l from-transparent to-food-500">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
