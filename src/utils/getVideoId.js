export default function getVideoId(url){

const reg=/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;

const match=url.match(reg);

return match?match[1]:null;

}