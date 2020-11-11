import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import AboutMe from "./components/about/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Container title="Sobre mí">
        <AboutMe></AboutMe>
      </Container>
    </div>
  );
}

export default App;
