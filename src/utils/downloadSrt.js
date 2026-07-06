const formatSrtTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;

  const ms = milliseconds % 1000;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
};

const downloadSrt = (transcript) => {
  let srt = "";

  transcript.forEach((item, index) => {
    srt += `${index + 1}\n`;

    srt += `${formatSrtTime(item.offset)} --> ${formatSrtTime(
      item.offset + item.duration
    )}\n`;

    srt += `${item.text}\n\n`;
  });

  const blob = new Blob([srt], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "subtitle.srt";

  link.click();

  URL.revokeObjectURL(url);
};

export default downloadSrt;