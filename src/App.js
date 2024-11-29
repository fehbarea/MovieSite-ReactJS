import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia"
]

function filterCategory(id){
  return videos.filter(video => video.category === categories[id])
}

function App() {
  return (
    <div>
      <Header />
      <Banner image={'home'} />
      <Container>
      
        <Category category={"Geografia"}>
          {filterCategory(0).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        <Category category={"Como fazer e usar"}>
          {filterCategory(1).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        <Category category={"Astronomia e Geografia"}>
          {filterCategory(2).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        <Category category={"Climatologia, Metereologia, Vegetação"}>
          {filterCategory(3).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        <Category category={"Geologia e Hidrografia"}>
          {filterCategory(4).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
      </Container>
      <Footer />
    </div>

  );
}

export default App;
