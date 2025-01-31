import VideoList from "../../components/VideoList";
import style from "./SearchVideoList.module.css";
import { useState } from "react";

function filterVideos(videos, searchText){
    return videos.filter((video) => video.category.toLowerCase().includes(searchText.toLowerCase()) || video.title.toLowerCase().includes(searchText.toLowerCase()));
}

function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState('');
    const foundVideos = filterVideos(videos, searchText);

  return (
    <section className={style.container}>
        <input 
            type='Pesquisar'
            placeholder="Pesquisar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <VideoList 
          videos={foundVideos}
          empytHeading={`Nenhum vídeo encontrado com o termo "${searchText}"`}
          />
    </section>
    

  )
}

export default SearchVideoList; 
