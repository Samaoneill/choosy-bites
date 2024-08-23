import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useTagsContext } from "../../context/TagContext";
import { MAX_INGREDIENTS } from "../../utils/constants";
import TagField from "../../ui/TagField";
import TagList from "../../ui/TagList";

function SearchInput() {
  const navigate = useNavigate();
  const { tags, handleAddTag, handleRemoveTag, handleClearTags } =
    useTagsContext();

  const tagsCheck = tags.length > 0;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    tagsCheck
      ? navigate(`/recipes`)
      : toast.error("You must enter some ingredients.");
  };

  return (
    <div className="flex w-full flex-col items-center">
      <form className="flex w-2/3 items-start justify-center gap-8">
        <TagField tags={tags} addTag={handleAddTag} maxTags={MAX_INGREDIENTS} />

        <button
          type="submit"
          onClick={handleSubmit}
          className="h-[54px] w-1/2 rounded-lg border-none bg-food-700 px-4 text-white outline-none transition-all duration-300 hover:bg-food-600"
        >
          Search Recipes
        </button>
      </form>
      <TagList
        tags={tags}
        removeTag={handleRemoveTag}
        clearTags={handleClearTags}
      />
    </div>
  );
}

export default SearchInput;
