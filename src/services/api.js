
import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTranscript = async (url) => {
  const response = await API.post("/transcript", {
    url,
  });
  return response.data;
};