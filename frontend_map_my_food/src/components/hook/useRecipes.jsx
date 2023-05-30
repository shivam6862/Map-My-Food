import recipesData from "../TemporaryData/RecipesData.json";

const useRecipes = () => {
  const RecipesData = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/recipes`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return recipesData;
      });
    return data;
  };
  return { RecipesData };
};

export default useRecipes;
