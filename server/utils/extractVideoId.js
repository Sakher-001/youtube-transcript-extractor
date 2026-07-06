const extractVideoId = (url) => {

  const regex =
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&?/]+)/;

  const match = url.match(regex);

  return match ? match[1] : null;

};

export default extractVideoId;