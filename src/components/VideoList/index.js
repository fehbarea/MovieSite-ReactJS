import style from "./VideoList.module.css";
import Card from "../Card";

function VideoList({videos, empytHeading}){

    const count = videos.length;
    let heading = empytHeading;
    if(count > 0){
        const noun = count > 1 ? 'Vídeos' : 'Vídeo';
        heading = `${count} ${noun}`
    }

    return(
        <>
            <h2>{heading}</h2>
            <section className={style.videos}>
                {videos.map((video) => <Card id={video.id} key={video.id}/>)}
            </section>
        </>
    );
}

export default VideoList;