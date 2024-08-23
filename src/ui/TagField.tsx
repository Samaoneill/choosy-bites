import { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";

interface TagFieldProps {
  tags: string[];
  addTag: (tag: string) => void;
  maxTags: number;
}

function TagField({ tags, addTag, maxTags }: TagFieldProps) {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      const trimmedInput = userInput.trim();

      if (trimmedInput.length > 15) {
        toast.error("Ingredient length exceeded. Max 15 chars.");
        return;
      }

      if (tags.includes(trimmedInput)) {
        toast.error("This ingredient has already been added.");
        return;
      }

      if (tags.length < maxTags) {
        addTag(trimmedInput);
        setUserInput("");
      }
    }
  };

  return (
    <div className="w-full">
      <input
        name="keyword_ingredients"
        type="text"
        aria-label="Add your ingredient"
        placeholder={
          tags.length < maxTags
            ? "Add your ingredient"
            : `Sorry! Maximum ${maxTags} ingredients`
        }
        className="h-[50px] w-full rounded-lg border-2 border-food-300 bg-transparent px-4 text-white placeholder:text-white focus:outline-none focus:ring focus:ring-food-300"
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
        disabled={tags.length === maxTags}
      />
    </div>
  );
}

export default TagField;
