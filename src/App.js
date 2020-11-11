import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import AboutMe from "./components/about/AboutMe";
import WorkExperience from "./components/work/WorkExperience";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Container title="Sobre mí">
        <AboutMe></AboutMe>
      </Container>
      <Container title="Experiencia laboral">
        <WorkExperience
          date="Oct 2019 – Mar 2020"
          company="Founduss"
          job="desarrollador backend con laravel"
          jobDescription="Cree un sistema automatizado de reserva de servicios empresariales, cree una BBDD SQL, cree una API rest para una app movil."
        ></WorkExperience>
      </Container>
    </div>
  );
}

export default App;
