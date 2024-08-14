import { useQuery } from "@tanstack/react-query";

const fetchHackerNews = async () => {
  const response = await fetch(
    "https://hn.algolia.com/api/v1/search?tags=front_page"
  );
  const data = await response.json();
  return data.hits;
};

const useHackerNews = () => {
  return useQuery({
    queryKey: ["hackerNews"],
    queryFn: fetchHackerNews,
  });
};

export default useHackerNews;