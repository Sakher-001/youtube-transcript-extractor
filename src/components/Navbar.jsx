import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">

          <FaYoutube className="text-4xl text-red-600" />

          <div>
            <h1 className="text-xl font-bold">
              YouTube Transcript
            </h1>

            <p className="text-xs text-zinc-500">
              Extract subtitles instantly
            </p>
          </div>

        </div>

        <a
          href="https://www.linkedin.com/in/mohamed-sakhr000/"
          target="_blank"
          className="rounded-lg border border-zinc-700 px-4 py-2 transition hover:border-red-500"
        >
          Linked In
        </a>

      </div>
    </nav>
  );
}

export default Navbar;