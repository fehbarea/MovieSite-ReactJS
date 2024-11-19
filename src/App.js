import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Banner image={'home'} />
      <Container>
        <h1>hellow world</h1>
        <p>Ola mundo 2</p>
      </Container>
      <Footer />
    </div>

  );
}

export default App;
