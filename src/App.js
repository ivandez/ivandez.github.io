import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import AboutMe from "./components/about/AboutMe";
import WorkExperience from "./components/work/WorkExperience";
import Education from "./components/education/Education";
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
      <Container title="Diplomas">
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
      <Container title="Contactame :)">
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
