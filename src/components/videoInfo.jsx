function VideoInfo({videoId}){

return(

<div className="mx-auto mt-10 max-w-5xl">

<img

src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}

className="rounded-2xl"

/>

</div>

)

}

export default VideoInfo