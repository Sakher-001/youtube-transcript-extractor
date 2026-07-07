import { YoutubeTranscript } from "youtube-transcript";

import extractVideoId from "../utils/extractVideoId.js";

export const getTranscript = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: "Youtube URL is required",
      });
    }

    const videoId = extractVideoId(url);

    if (!videoId) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: "Invalid Youtube URL",
      });
    }

    const transcript = await YoutubeTranscript.fetchTranscript(videoId);

    res.status(200).json({
      success: true,
      videoId,
      totalLines: transcript.length,
      language: transcript[0]?.lang || "Unknown",
      transcript,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};