import categorywisefoodData from "../TemporaryData/Search/Big.json";

const useCategoryWiseFood = () => {
  const CategoryWiseFoodData = async (id) => {
    const data = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/categorywisefood/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return categorywisefoodData;
      });
    return data;
  };
  return { CategoryWiseFoodData };
};

export default useCategoryWiseFood;
