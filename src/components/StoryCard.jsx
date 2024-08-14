import React from "react";

const StoryCard = ({ story }) => {
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold">{story.title}</h2>
      <p className="text-gray-600">Upvotes: {story.points}</p>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Read more
      </a>
    </div>
  );
};

export default StoryCard;