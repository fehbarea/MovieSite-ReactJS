import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import style from './Search.module.css';
import VideoList from '../../components/VideoList';
import videos from '../../json/db.json';

function Search() {
    return (
        <>
            <Header />
            <Container>
                <section className={style.search}>
                    <h2>Search</h2>
                    <VideoList videos={videos} />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;
