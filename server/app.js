import express from "express";
import cors from "cors";

import transcriptRoutes from "./routes/transcriptRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/transcript", transcriptRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "YouTube Transcript API Running 🚀",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});