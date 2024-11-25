import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

function App() {
  return (
    <div>
      <Header />
      <Banner image={'home'} />
      <Container>
        
      </Container>
      <Footer />
    </div>

  );
}

export default App;
