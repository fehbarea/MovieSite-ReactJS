import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import iconFavorite from './favorite.png';
import iconUnfavorite from './unfavorite.png';

function Card({id}){
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img width={250} src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa}/>
            </Link>

            <figure className={styles.icon}>
                <img src={iconFavorite} alt='Icone'/>
            </figure>
        </section>
    );

}

export default Card;
