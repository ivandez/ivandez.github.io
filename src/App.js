import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Project from "./components/Project";
import Abilities from "./components/Abilities";
import Diplomas from "./components/Diplomas";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatButton"

function App() {
  return (
    <div className="App">
      <FloatButton/>
      
      <NavBar />

      <Hero />

      <AboutMe />

      <Container
        title="Experiencia laboral"
        id="work-experience"
        idForScroll="workExperience"
      >
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
        <Education
          institution="U.E.P María Francia"
          degree="Bachiller en ciencias"
        ></Education>

        <Education
          institution="Instituto Universitario Antonio Jose de Sucre"
          degree="Técnico Superior en Informática"
        ></Education>
      </Container>

      <Container title="Proyectos" id="project">
        <Project
          title="Aplicación de gestión de gastos"
          description="Aplicación que te permite gestionar tus gastos que desarrolle para practicar mis conocimientos."
          repository="https://github.com/ivandez/expense-reports"
          img="https://user-images.githubusercontent.com/38108288/99753193-2e10c000-2abc-11eb-9bde-99f37ee9a1e6.png"
        ></Project>
        <Project
          title="Portafolio en React"
          description="Portafolio desarrollado en React.js junto a otros modulos de npm para poder mostrar mí trabajo en la industria tec."
          repository="https://github.com/ivandez/portafolio-react"
          img="https://user-images.githubusercontent.com/38108288/99752497-d160d580-2aba-11eb-9bd3-5d9475203793.png"
          demo="ivandez.github.io"
        ></Project>
          <Project
            title="Web de conferencia"
            description="Pagina web en HTML, CSS y otras tecnologias que simula una conferencia desarrollada en bootstrap."
            repository="https://github.com/ivandez/PlatziConfHawaii"
            img="https://user-images.githubusercontent.com/38108288/99753502-b0997f80-2abc-11eb-8b5f-bd4a8ab1222d.png"
            demo="https://ivandez.github.io/PlatziConfHawaii/"
          ></Project>
        <Project
          title="To do Angular"
          description="Aplicación To Do que organiza tus tareas que desarrolle en Angular para practicar mis conocimientos."
          repository="https://github.com/ivandez/angular-to-do-app"
          img="https://user-images.githubusercontent.com/38108288/99752694-2bfa3180-2abb-11eb-9a47-ff6267654536.png"
        ></Project>
      </Container>
      <Container title="Habilidades" id="abilities">
        <Abilities
          abilities={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Node.js",
            "React.js",
            "PHP",
            "Laravel",
            "SQL/MySQL Workbench",
            "Git/Github",
            "Inglés",
            "Ubuntu",
          ]}
        ></Abilities>
      </Container>
      <Container title="Diplomas" id="diplomas" idForScroll="diplomas">
          <Diplomas
          date="2019"
          title="CARRERA: Desarrollo Backend con PHP"
          link="https://platzi.com/@ivan-mendez/carrera/57-desarrollo-php/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Fundamentos de Ingeniería de Software"
          link="https://platzi.com/@ivan-mendez/curso/1098-ingenieria/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Fundamentos de Bases de Datos"
          link="https://platzi.com/@ivan-mendez/curso/1566-bd/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2018"
          title="Inglés B1"
          link="https://user-images.githubusercontent.com/38108288/99884956-029aec00-2c08-11eb-8685-4cf2bff141af.jpg"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Desarrollo WEB ONLINE"
          link="https://platzi.com/@ivan-mendez/curso/1350-html5-css3/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Curso de Git y Github"
          link="https://platzi.com/@ivan-mendez/curso/1170-git-github-2017/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Programación Orientada a Objectos"
          link="https://platzi.com/@ivan-mendez/curso/1474-oop/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introducción a la Terminal y Línea de comandos"
          link="https://platzi.com/@ivan-mendez/curso/1276-terminal/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Curso de Bootstrap 4"
          link="https://platzi.com/@ivan-mendez/curso/1331-bootstrap/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Curso de API REST"
          link="https://platzi.com/@ivan-mendez/curso/1638-api-rest/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introducción a PHP"
          link="https://platzi.com/@ivan-mendez/curso/1338-php/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2018"
          title="Programación Básica"
          link="https://platzi.com/@ivan-mendez/curso/1050-programacion-basica/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introducción a Java SE"
          link="https://platzi.com/@ivan-mendez/curso/1631-java-basico/diploma/detalle/"
        ></Diplomas>
      </Container>
      <Container title="Contactame :)" id="contact">
        <ContactForm></ContactForm>
      </Container>
      <Footer/>
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
