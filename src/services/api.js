import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getTranscript = async (url) => {
  const response = await API.post("/transcript", {
    url,
  });

  return response.data;
};