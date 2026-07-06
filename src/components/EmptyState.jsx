import { FaYoutube } from "react-icons/fa";

function EmptyState() {
  return (
    <div className="mt-24 text-center">

      <FaYoutube className="mx-auto text-7xl text-zinc-700" />

      <h2 className="mt-6 text-3xl font-bold">
        Paste a YouTube URL
      </h2>

      <p className="mt-3 text-zinc-500">
        Extract subtitles from any public YouTube video.
      </p>

    </div>
  );
}

export default EmptyState;