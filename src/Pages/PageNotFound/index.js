import style from './PageNotFound.module.css';
import erro404 from './erro404.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PageNotFound() {
    return (
        <div className={style.PageNotFound}>
            <Header />
            <section className={style.container}>
                <h2>ERRO 404 - Ops! página não localizada</h2>
                <img src={erro404} alt="Erro 404" />
            </section>
            <Footer />
        </div>
    );
}

export default PageNotFound;
