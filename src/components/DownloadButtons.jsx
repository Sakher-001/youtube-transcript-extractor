import { FaDownload } from "react-icons/fa";

import toast from "react-hot-toast";

import downloadTxt from "../utils/downloadTxt";
import downloadSrt from "../utils/downloadSrt";

function DownloadButtons({ transcript }) {
  const handleTxt = () => {
    downloadTxt(transcript);

    toast.success("TXT downloaded");
  };

  const handleSrt = () => {
    downloadSrt(transcript);

    toast.success("SRT downloaded");
  };

  return (
    <div className="flex gap-3">

      <button
        onClick={handleTxt}
        className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-700"
      >
        <FaDownload />

        TXT
      </button>

      <button
        onClick={handleSrt}
        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-700"
      >
        <FaDownload />

        SRT
      </button>

    </div>
  );
}

export default DownloadButtons;