import { FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <section className="mx-auto mt-20 max-w-5xl text-center">

      <FaYoutube className="mx-auto text-7xl text-red-600" />

      <h1 className="mt-8 text-5xl font-extrabold">

        YouTube Transcript Extractor

      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">

        Extract subtitles from any public YouTube video.
        Copy, Search, Download TXT or SRT in seconds.

      </p>

    </section>
  );
}

export default Hero;