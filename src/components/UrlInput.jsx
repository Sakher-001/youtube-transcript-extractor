import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function UrlInput({ onExtract }) {

  const [url, setUrl] = useState("");

  return (

    <div className="mx-auto mt-14 max-w-4xl">

      <div className="flex flex-col gap-4 md:flex-row">

        <input
          type="text"
          placeholder="Paste YouTube URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-red-500"
        />

        <button
          onClick={() => onExtract(url)}
          className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
        >

          Extract

          <FaArrowRight />

        </button>

      </div>

    </div>

  );

}

export default UrlInput;