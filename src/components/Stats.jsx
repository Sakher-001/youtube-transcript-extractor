function Stats({ transcript }) {

  const words = transcript
    .map((item) => item.text)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  const characters = transcript
    .map((item) => item.text)
    .join("")
    .length;

  const duration =
    transcript.length > 0
      ? Math.floor(
          transcript[transcript.length - 1].offset / 1000 / 60
        )
      : 0;

  return (
    <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-4">

      <div className="rounded-xl bg-zinc-900 p-5">
        <p className="text-zinc-400">Lines</p>
        <h2 className="mt-2 text-3xl font-bold">
          {transcript.length}
        </h2>
      </div>

      <div className="rounded-xl bg-zinc-900 p-5">
        <p className="text-zinc-400">Language</p>
        <h2 className="mt-2 text-3xl font-bold">
          {transcript[0]?.lang || "-"}
        </h2>
      </div>

      <div className="rounded-xl bg-zinc-900 p-5">
        <p className="text-zinc-400">Words</p>
        <h2 className="mt-2 text-3xl font-bold">
          {words}
        </h2>
      </div>

      <div className="rounded-xl bg-zinc-900 p-5">
        <p className="text-zinc-400">Duration</p>
        <h2 className="mt-2 text-3xl font-bold">
          {duration} min
        </h2>
      </div>

    </div>
  );
}

export default Stats;