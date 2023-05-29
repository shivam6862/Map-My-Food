import SmallSearch from "../TemporaryData/Search/Small.json";

const useSmallSearch = () => {
  const smallSearch = async (search) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/smallSearch/${search}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        const newSearchItemData = SmallSearch.filter((obj) =>
          Object.keys(obj).some((key) =>
            key.trim().toLowerCase().includes(search.trim().toLowerCase())
          )
        );
        return newSearchItemData;
      });
    return data;
  };
  return { smallSearch };
};

export default useSmallSearch;
