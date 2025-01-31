import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import style from './Search.module.css';
import videos from '../../json/db.json';
import SearchVideoList from '../../components/SearchVideoList';

function Search() {
    return (
        <>
            <Header />
            <Container>
                <section className={style.search}>
                    <h2>Search</h2>
                    <SearchVideoList videos={videos} />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;
