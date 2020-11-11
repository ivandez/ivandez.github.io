import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import AboutMe from "./components/about/AboutMe";
import WorkExperience from "./components/work/WorkExperience";
import Education from "./components/education/Education";
import Abilities from "./components/abilities/Abilities";

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
      <Container title="Educacíon">
        <Education
          institution="U.E.P María Francia"
          date="2013-2020"
          degree="Bachiller en ciencias"
        ></Education>
        <Education
          institution="Instituto Universitario Antonio Jose de Sucre"
          date="2018 - presente"
          degree="Técnico Superior en Informática"
        />
      </Container>
      <Container title="Habilidades">
        <Abilities
          abilities={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Boostrap 4",
            "React.js",
            "Angular.js",
            "PHP",
            "Laravel",
            "SQL/MySQL Workbench",
            "Git/Github",
            "Inglés",
            "Ubuntu",
            "Vagrant/VirtualBox",
            "MVC",
            "Programación Orientada a Objectos",
          ]}
        ></Abilities>
      </Container>
    </div>
  );
}

export default App;
