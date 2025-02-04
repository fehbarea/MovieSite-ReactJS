import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import iconUnfavorite from './favorite.png';
import iconFavorite from './unfavorite.png';
import { useContext } from "react";
import { useFavoriteContext } from "../../context/Favorites";

function Card({id}){

    const {favorite, addFavorite} = useFavoriteContext();
    const isFavorite = favorite.some((item) => item.id === id);
    const iconFav = isFavorite ? iconFavorite : iconUnfavorite

    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img width={250} src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa}/>
            </Link>

            <figure className={styles.icon}>
                <img 
                    src={iconFav} 
                    alt='Icone'
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    );

}

export default Card;
