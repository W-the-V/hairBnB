const SEARCH_MAP = "google/search";

const fetchMap = (map) => {
  return {
    type: SEARCH_MAP,
    map,
  };
};

export const getMap = async () => {
  const response = await fetch("/api/");
  const loader = await response.json();
  return loader;
};
