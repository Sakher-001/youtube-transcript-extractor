
import axios from "axios";
console.log(import.meta.env.VITE_API_URL);

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTranscript = async (url) => {
  const response = await API.post("/transcript", {
    url,
  });
  return response.data;
};