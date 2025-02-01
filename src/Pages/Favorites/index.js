import style from './Favorites.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'


function Favorites() {
    return (
        <section>
            <Header />
            <Container>
            <section className={style.favorites} >
                <h2>Meus Favoritos</h2>
                    Lista de Favoritos
                </section> 
            </Container>
            <Footer />
        </section>
    );
}

export default Favorites;
