import axios from "axios";
import { BASE_URL } from "../constants";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getTime = async (city = "astana") => {
  try {
    const response = await api.get(`/${city}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching time data for city "${city}":`, error);
    throw new Error(
      `Failed to fetch time data for city "${city}". Please try again later.`
    );
  }
};
