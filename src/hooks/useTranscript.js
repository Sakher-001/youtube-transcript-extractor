import { useState } from "react";
import { getTranscript } from "../services/api";

const useTranscript = () => {

  const [loading, setLoading] = useState(false);

  const [transcript, setTranscript] = useState([]);

  const [error, setError] = useState("");

  const fetchTranscript = async (url) => {

    try {

      setLoading(true);

      setError("");

      const data = await getTranscript(url);

      setTranscript(data.transcript);

    } catch (err) {

      setError(err.response?.data?.message || "Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return {

    transcript,

    loading,

    error,

    fetchTranscript,

  };

};

export default useTranscript;