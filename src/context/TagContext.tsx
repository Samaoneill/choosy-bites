import { createContext, useState, useContext, ReactNode } from "react";

interface TagContextType {
  tags: string[];
  handleAddTag: (newTag: string) => void;
  handleRemoveTag: (tag: string) => void;
  handleClearTags: () => void;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

interface TagProviderProps {
  children: ReactNode;
  maxTags?: number;
}

function TagProvider({ children, maxTags = 5 }: TagProviderProps) {
  const [tags, setTags] = useState<string[]>([]);

  function handleAddTag(newTag: string) {
    if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
      setTags((prevTags) => [...prevTags, newTag]);
    }
  }

  function handleRemoveTag(tag: string) {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  }

  function handleClearTags() {
    setTags([]);
  }

  return (
    <TagContext.Provider
      value={{
        tags,
        handleAddTag,
        handleRemoveTag,
        handleClearTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
}

function useTagsContext() {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("useTagsContext must be used within a TagProvider");
  }
  return context;
}

export { TagProvider, useTagsContext };
