import formatTime from "../utils/formatTime";

function TranscriptCard({ item, mode }) {

  return (

    <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/10">

      {mode === "time" && (

        <span className="mb-3 inline-block rounded-lg bg-red-600 px-3 py-1 text-sm">

          {formatTime(item.offset)}

        </span>

      )}

      <p className="leading-8 text-zinc-200">

        {item.text}

      </p>

    </div>

  );

}

export default TranscriptCard;