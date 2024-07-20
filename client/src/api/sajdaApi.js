import axios from "axios";
export const getTime = async (selectedCity = "astana") => {
  try {
    const response = await axios.get(
      `https://prayer-serv.onrender.com/api/${selectedCity}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
};
