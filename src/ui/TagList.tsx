interface TagListProps {
  tags: string[];
  removeTag: (tag: string) => void;
  clearTags: () => void;
}

function TagList({ tags, removeTag, clearTags }: TagListProps) {
  return (
    <ul className="mt-4 flex h-[36px] flex-row flex-wrap gap-3">
      {tags.map((tag: string, index: number) => (
        <li
          key={`${index}-${tag}`}
          className="mr-2 inline-flex items-start justify-start rounded-[32px] bg-food-600 px-3 py-2 text-sm font-medium text-white shadow-sm"
        >
          {tag}
          <button
            className="ml-2 hover:text-food-700"
            onClick={() => removeTag(tag)}
            title={`Remove ${tag}`}
          >
            &times;
          </button>
        </li>
      ))}
      {tags.length > 0 && (
        <li className="rounded-[32px] bg-food-800 px-3 py-2 text-sm font-medium text-white shadow-sm">
          <button
            className="hover:text-food-300"
            onClick={() => clearTags()}
            title={`Clear All`}
          >
            Clear All
          </button>
        </li>
      )}
    </ul>
  );
}

export default TagList;
