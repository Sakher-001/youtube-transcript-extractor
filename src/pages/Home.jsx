import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UrlInput from "../components/UrlInput";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

import TranscriptOptions from "../components/TranscriptOptions";
import TranscriptCard from "../components/TranscriptCard";

import CopyButton from "../components/CopyButton";
import DownloadButtons from "../components/DownloadButtons";

import SearchBox from "../components/SearchBox";
import Stats from "../components/Stats";
import EmptyState from "../components/EmptyState";

import useTranscript from "../hooks/useTranscript";

function Home() {
  const {
    transcript,
    loading,
    error,
    fetchTranscript,
  } = useTranscript();

  const [mode, setMode] = useState("text");
  const [search, setSearch] = useState("");

  const filteredTranscript = useMemo(() => {
    return transcript.filter((item) =>
      item.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [transcript, search]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <main className="px-6">

        <Hero />

        <UrlInput onExtract={fetchTranscript} />

        {loading && <Loader />}

        {error && (
          <p className="mt-10 text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && transcript.length === 0 && (
          <EmptyState />
        )}

        {!loading && transcript.length > 0 && (
          <>
            <TranscriptOptions
              mode={mode}
              setMode={setMode}
            />

            <Stats transcript={transcript} />

            <SearchBox
              search={search}
              setSearch={setSearch}
            />

            <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-end gap-4">

              <CopyButton transcript={filteredTranscript} />

              <DownloadButtons transcript={filteredTranscript} />

            </div>

            <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              {filteredTranscript.length > 0 ? (
                filteredTranscript.map((item, index) => (
                  <TranscriptCard
                    key={index}
                    item={item}
                    mode={mode}
                  />
                ))
              ) : (
                <p className="text-center text-zinc-500">
                  No matching transcript found.
                </p>
              )}

            </div>
          </>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default Home;