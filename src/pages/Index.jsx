import React, { useState } from "react";
import useHackerNews from "../hooks/useHackerNews";
import Skeleton from "../components/Skeleton";
import StoryCard from "../components/StoryCard";
import SearchBar from "../components/SearchBar";

const Index = () => {
  const { data: stories, isLoading } = useHackerNews();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories?.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Hacker News Top Stories</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <Skeleton />
      ) : (
        filteredStories.map((story) => (
          <StoryCard key={story.objectID} story={story} />
        ))
      )}
    </div>
  );
};

export default Index;