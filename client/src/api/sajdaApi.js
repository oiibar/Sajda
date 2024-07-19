import axios from "axios";
export const getTime = async (selectedCity = "astana") => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/${selectedCity}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
};
