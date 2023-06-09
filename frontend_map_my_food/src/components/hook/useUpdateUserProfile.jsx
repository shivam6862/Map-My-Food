import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useUpdateUserProfile = () => {
  const { fetchPersonalDetails, updatePersonalDetails } =
    useLocationLocalStorage();
  const { NotificationHandler } = useNotification();
  const UpdateUserProfileData = async (place, newdata) => {
    const id = fetchPersonalDetails().data.id;
    try {
      console.log(place, newdata);
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_BACKEND_URL
        }/updateprofile/${id}/${place}/${newdata}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: "",
        }
      );
      const responsedata = await response.json();
      NotificationHandler(place + responsedata.message, "Info");
      if (response.status == 200) {
        var persondetail = fetchPersonalDetails();
        if (place == "number") {
          persondetail.data.number = newdata;
          updatePersonalDetails(persondetail);
        }
        if (place == "email") {
          persondetail.data.number = newdata;
          updatePersonalDetails(persondetail);
        }
      }
      return responsedata.response;
    } catch (err) {
      console.log(err);
      NotificationHandler("Check your connection!", "Error");
      return "";
    }
  };
  return { UpdateUserProfileData };
};

export default useUpdateUserProfile;
