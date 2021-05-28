import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education"
// import { FormspreeProvider } from "@formspree/react";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Hero />

      <AboutMe />

      <Container title="Experiencia laboral" id="work-experience" idForScroll="workExperience">

        <WorkExperience
          date="Oct 2019 – Mar 2020"
          company="Founduss"
          job="desarrollador backend con laravel"
          jobDescription="Cree un sistema automatizado de reserva de servicios empresariales, cree una BBDD SQL, cree una API rest para una app movil."
        ></WorkExperience>
        <WorkExperience
          date="Feb 2021 – Feb 2021"
          company="Freelancer"
          job="desarrollador backend con PHP"
          jobDescription="Desarrolle un sistema web para exportar una BBDD MySql a excel"
        ></WorkExperience>
        <WorkExperience
          date="Feb 2021 – Mar 2021"
          company="Workana"
          job="desarrollador backend con PHP"
          jobDescription="Desarrolle un scraper en php para extraer informacion de goolge y twitter."
        ></WorkExperience>
        <WorkExperience
          date="Mar 2021 – Mar 2021"
          company="Talently"
          job="desarrollador backend con laravel"
          jobDescription="Cree una página web, con panel administrativo, para crear formularios dinámicos para entrevistar programadores."
        ></WorkExperience>
        <WorkExperience
          date="Mar 2021 – Abr 2021"
          company="Workana"
          job="desarrollador backend con laravel"
          jobDescription="Desarrolle una API para una aplicación móvil."
        ></WorkExperience>
        
      </Container>

      <Container title="Formación" id="education" idForScroll="educationScroll">

        <Education institution="U.E.P María Francia" degree="Bachiller en ciencias"></Education>

        <Education institution="Instituto Universitario Antonio Jose de Sucre" degree="Técnico Superior en Informática"></Education>
        
      </Container>
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
