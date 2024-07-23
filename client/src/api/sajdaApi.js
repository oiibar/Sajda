import axios from "axios";

const api = axios.create({
  baseURL: "https://sajda-serv.vercel.app//api",
  timeout: 5000,
});

export const getTime = async (selectedCity = "astana") => {
  try {
    const response = await api.get(`/${selectedCity}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching time data for city "${selectedCity}":`,
      error
    );
    throw new Error(
      `Failed to fetch time data for city "${selectedCity}". Please try again later.`
    );
  }
};
