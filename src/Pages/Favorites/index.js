import style from './Favorites.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import VideoList from '../../components/VideoList';
import { useFavoriteContext } from '../../context/Favorites';

function Favorites() {

    const {favorite} = useFavoriteContext();

    return (
        <section>
            <Header />
            <Container>
            <section className={style.favorites} >
                <h2>Meus Favoritos</h2>
                    { <VideoList videos={favorite} empytHeading={"Você não tem favoritos"} />}
                </section> 
            </Container>
            <Footer />
        </section>
    );
}

export default Favorites;
