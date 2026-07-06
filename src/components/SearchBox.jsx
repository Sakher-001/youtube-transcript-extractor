import { FaSearch } from "react-icons/fa";

function SearchBox({ search, setSearch }) {
  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <div className="relative">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search transcript..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-red-500"
        />

      </div>
    </div>
  );
}

export default SearchBox;