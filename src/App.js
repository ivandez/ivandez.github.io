import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import AboutMe from "./components/about/AboutMe";
import WorkExperience from "./components/work/WorkExperience";
import Education from "./components/education/Education";
import Project from "./components/project/Project";
import Abilities from "./components/abilities/Abilities";
import Diplomas from "./components/diplomas/Diplomas";
import Contact from "./components/contact/Contact";
import { FormspreeProvider } from "@formspree/react";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Container title="Sobre mí" id="about">
        <AboutMe></AboutMe>
      </Container>
      <Container title="Experiencia laboral" id="work-experience">
        <WorkExperience
          date="Oct 2019 – Mar 2020"
          company="Founduss"
          job="desarrollador backend con laravel"
          jobDescription="Cree un sistema automatizado de reserva de servicios empresariales, cree una BBDD SQL, cree una API rest para una app movil."
        ></WorkExperience>
        <WorkExperience
          date="Nov 2020 – Nov 2020"
          company="Traductoridiomasmayas"
          job="Base de datos"
          jobDescription="Desarrolle una BBDD sql para guardar traducciones realizadas por los usuarios."
        ></WorkExperience>
      </Container>
      <Container title="Educacíon" id="education">
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
      <Container title="Proyectos" id="project">
        <Project
          title="Portafolio en React"
          description="Portafolio desarrollado en React.js junto a otros modulos de npm para poder mostrar mí trabajo en la industria tec."
          repository="https://github.com/ivandez/portafolio-react"
          img="https://user-images.githubusercontent.com/38108288/99752497-d160d580-2aba-11eb-9bd3-5d9475203793.png"
        ></Project>
        <Project
          title="To do Angular"
          description="Aplicación To Do que desarrolle en angular para practicar mis conocimientos."
          repository="https://github.com/ivandez/angular-to-do-app"
          img="https://user-images.githubusercontent.com/38108288/99752694-2bfa3180-2abb-11eb-9a47-ff6267654536.png"
        ></Project>
        <Project
          title="Aplicación de gestión de gastos"
          description="Aplicación que te permite gestionar tus gastos que desarrolle para practicar mis conocimientos."
          repository="https://github.com/ivandez/expense-reports"
          img="https://user-images.githubusercontent.com/38108288/99753193-2e10c000-2abc-11eb-9bde-99f37ee9a1e6.png"
        ></Project>
        <Project
          title="Panel de COVID en Express.js"
          description="Aplicación que consulta una API para mostrar los casos de COVID a nivel mundial."
          repository="https://github.com/ivandez/covid-dashboard-expressjs"
          img="https://user-images.githubusercontent.com/38108288/99753671-138b1680-2abd-11eb-8451-e84fc904759f.png"
        ></Project>
        <Project
          title="Web de conferencia"
          description="Pagina web que simula una conferencia desarrollada en bootstrap."
          repository="https://github.com/ivandez/PlatziConfHawaii"
          img="https://user-images.githubusercontent.com/38108288/99753502-b0997f80-2abc-11eb-8b5f-bd4a8ab1222d.png"
          link="https://ivandez.github.io/PlatziConfHawaii/"
        ></Project>
      </Container>
      <Container title="Habilidades" id="abilities">
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
      <Container title="Diplomas" id="diplomas">
        <Diplomas
          date="2019"
          institution="222222"
          link="Ver diploma"
        ></Diplomas>
        <Diplomas
          date="2019"
          institution="CARRERA: Desarrollo Backend con PHP"
          link="Ver diploma"
        ></Diplomas>
        <Diplomas date="2019" institution="33333" link="Ver diploma"></Diplomas>
        <Diplomas date="2019" institution="444" link="Ver diploma"></Diplomas>
        <Diplomas date="2019" institution="5555" link="Ver diploma"></Diplomas>
        <Diplomas
          date="2019"
          institution="666666"
          link="Ver diploma"
        ></Diplomas>
        <Diplomas date="2019" institution="77777" link="Ver diploma"></Diplomas>
      </Container>
      <Container title="Contactame :)" id="contact">
        <FormspreeProvider project="1545787927554949020">
          <Contact></Contact>
        </FormspreeProvider>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;

// <\                     __
//  \\                 .~~  ~~.
//   \\               /|~|     |
//    \\             /======\  |
//   //\\           |>/_\_<_=' |
//   ~\  \          `-`__  \\__|    _
//  <<\ \ \    ___    \..'  `--'   / ~-.
// <<\\' )_) .+++++ _ (___.--'| _ /~-.  ~-.
// \_\' /   x||||||| `-._    _.' /~-. ~-.  `.
//  |   |  |X++++++|     \  /   /~-. ~-. ~-./
//  |   `. .||||||||      []   /~-. ~-. ~-./
//  |    |'  ++++++| :::  [] : `-. ~-. ~-.'
//  |    `.        '  ::: []:: _.-:-. ~-/ |
//  (_   /|     _.        []  |____~|`-'  |
//  ||`-'| |_.-' |        |\\/|JUDGE|     `.
//  `.___.-'     `.       ||`' \~~~/ >.    l
//                |   ::  ||    `-' / /`---'\
//                |    :  ||       ( [(_)[_](]
//                |       ||       | [       ]
//               .'       ||       |  \.---./
//             __|________||_______|=.|____|_
//            |: o | o |~\|%/~ o |_ o||-----|
//            |:--'|`-'||X\/X|`-'| `-|`.  .-|
//            `--------'  ll `-------' |  |o|
//               |                  |  `. |_|
//               |               :: `.  |   |
//               |               ::  |  |  .'
//               |         |\    ::  | .'  |
//               |         ||     :  | |.  |
//               `.       .'|     :  | ||..'
//                |       | `.    :  | |'//
//                |       |  |    : .' `='
//                |       |  |   :: |
//                `.      |  |   :: |
//                 |      |  |   :: |
//                 |_____ |  .-------.
//                / _     `./.-- :::  \
//               | | `----' ||        |
//               | |        |        ||
//                \         \.-------./
//                 |-------||.-------.|
//                 /-.____.||         |       I   A M   T H E   L A W
//                  |      ||         /
//                  `.     `:.       /
//                   |       |      |
//                   `,      |      |
//                    |      |      /
//                    `.     |     |
//                     |     |     |  Judge Dredd
//                     |     |     |
//                __/  |     <     >  \
//                 /   /     /     \
//                /   :.___.|.'""`. |      \
//             LS     `----//      \\    ___\
//         /               `---------'       \
//       _/          /
//             /__            |________\
