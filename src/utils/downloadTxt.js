const downloadTxt = (transcript) => {
  const text = transcript.map((item) => item.text).join("\n");

  const blob = new Blob([text], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "transcript.txt";

  link.click();

  URL.revokeObjectURL(url);
};

export default downloadTxt;