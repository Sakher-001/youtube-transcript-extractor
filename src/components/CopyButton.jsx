import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

function CopyButton({ transcript }) {
  const handleCopy = async () => {
    const text = transcript.map((item) => item.text).join("\n");

    try {
      await navigator.clipboard.writeText(text);

      toast.success("Transcript copied successfully");
    } catch {
      toast.error("Failed to copy transcript");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
    >
      <FaCopy />

      Copy
    </button>
  );
}

export default CopyButton;