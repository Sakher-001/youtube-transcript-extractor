# 🎬 YouTube Transcript Extractor

A modern Full Stack web application that extracts transcripts from public YouTube videos quickly and easily.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📖 Overview

YouTube Transcript Extractor allows users to extract subtitles from any public YouTube video.

Users can:

- View transcript as plain text.
- View transcript with timestamps.
- Search inside the transcript.
- Copy the transcript.
- Download transcript as TXT.
- Download transcript as SRT.

---

## ✨ Features

- 🎬 Extract transcript from YouTube videos
- 📝 Text Only Mode
- ⏱️ Timestamp Mode
- 🔍 Search transcript
- 📋 Copy transcript
- 📥 Download TXT
- 🎞️ Download SRT
- ⚡ Fast API Response
- 📱 Responsive Design
- 🎨 Modern UI using Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- React Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- YouTube Transcript API
- CORS
- Dotenv

---

## 📂 Project Structure

```
youtube-transcript-extractor
│
├── src
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   └── utils
│
├── server
│   ├── controllers
│   ├── routes
│   └── app.js
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/youtube-transcript-extractor.git
```

---

### Frontend

```bash
npm install

npm run dev
```

---

### Backend

```bash
cd server

npm install

npm run dev
```

---

## 🌐 API Endpoint

### POST

```
http://localhost:3001/api/transcript
```

Request

```json
{
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```


---

## 📌 Future Improvements

- Dark Mode
- Video Thumbnail
- Video Title
- Channel Name
- Video Duration
- Framer Motion Animations
- Deploy on Vercel
- Deploy Backend on Render

---

## 👨‍💻 Author

**Mohamed Sakher**

LinkedIn :https://linkedin.com/in/mohamed-sakhr000

GitHub : https://github.com/Sakher-001/

---

## ⭐ Support

If you like this project, don't forget to give it a ⭐ on GitHub.