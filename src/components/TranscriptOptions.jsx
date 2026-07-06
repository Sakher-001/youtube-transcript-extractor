function TranscriptOptions({ mode, setMode }) {

  return (

    <div className="mx-auto mt-10 flex max-w-sm rounded-xl bg-zinc-900 p-2">

      <button
        onClick={() => setMode("text")}
        className={`flex-1 rounded-lg py-3 transition ${
          mode === "text"
            ? "bg-red-600"
            : "hover:bg-zinc-800"
        }`}
      >
        Text Only
      </button>

      <button
        onClick={() => setMode("time")}
        className={`flex-1 rounded-lg py-3 transition ${
          mode === "time"
            ? "bg-red-600"
            : "hover:bg-zinc-800"
        }`}
      >
        Timestamp
      </button>

    </div>

  );

}

export default TranscriptOptions;