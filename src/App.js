import "./App.css";
import NavBar from "./components/NavBar";
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
import FloatButton from "./components/FloatButton";

function App() {
  return (
    <div className="App">
      <FloatButton />

      <NavBar />

      <Hero />

      <AboutMe />

      <Container
        title="Work Experience"
        id="work-experience"
        idForScroll="workExperience"
      >
        <WorkExperience
          date="Oct 2019 – Mar 2020"
          company="Profesional freelancer"
          job="Web developer"
          jobDescription="Freelancer in web programming with 10 projects successfully completed in Workana


          My job is to create and propose IT solutions to my client's problems, I use NODE, EXPRESS, JAVASCRIPT, PHP, LARAVEL, HTML, CSS, TAILWIND, BOOTSTRAP and MySQL technologies.
          
          
          My solutions include the design and implementation of databases, APIs, and the development of business logic with the before mentioned technologies and frameworks.Cree un sistema automatizado de reserva de servicios empresariales, cree una BBDD SQL, cree una API rest para una app movil."
        ></WorkExperience>
        <WorkExperience
          date="Feb 2021 – Feb 2021"
          company="PROYECTA INFORMÁTICA SOLUCIONES PROFESIONALES SL"
          job="Full-stack Developer"
          jobDescription="I extend and improve an inventory management system"
        ></WorkExperience>
        <WorkExperience
          date="Feb 2021 – Mar 2021"
          company="Universitas Fundación"
          job="Web Master"
          jobDescription="Professional internships as a Higher Computer Technician exercising the position of webmaster."
        ></WorkExperience>
        <WorkExperience
          date="Mar 2021 – Mar 2021"
          company="Founduss"
          job="Back-end Developer"
          jobDescription="I worked as a back-end developer, my main task was to develop a reservation system for PYMES, fix bugs, and improve the system of Founduss."
        ></WorkExperience>
      </Container>

      <Container title="Education" id="education" idForScroll="educationScroll">
        <Education
          institution="U.E.P María Francia"
          degree="Bachelor of Science"
        ></Education>

        <Education
          institution="University Antonio Jose de Sucre"
          degree="Higher Technician in Computer Science"
        ></Education>
      </Container>

      <Container title="Proyectos" id="project">
        <Project
          title="Weather app, node js"
          description="Aplicación que te permite gestionar tus gastos que desarrollé para practicar mis conocimientos."
          repository="https://github.com/ivandez/expense-reports"
          img="https://user-images.githubusercontent.com/38108288/99753193-2e10c000-2abc-11eb-9bde-99f37ee9a1e6.png"
          demo="https://weather-app-express-node.herokuapp.com/"
        ></Project>
        <Project
          title="Portafolio en React"
          description="Portafolio desarrollado en React.js junto a otros módulos de npm para poder mostrar mí trabajo en la industria tec."
          repository="https://github.com/ivandez/portafolio-react"
          img="https://user-images.githubusercontent.com/38108288/99752497-d160d580-2aba-11eb-9bd3-5d9475203793.png"
          demo="ivandez.github.io"
        ></Project>
        <Project
          title="COVID-19 TRACKER"
          description="Aplicación que te permite ver los infectados, fallecidos y fatalidades de COVID-19 alrededor del mundo."
          repository="https://github.com/ivandez/vuejs-covid-tracker"
          img="https://user-images.githubusercontent.com/38108288/124536695-67493680-dde6-11eb-8f07-ee97b2dfa6da.png"
          demo="https://ivandez.github.io/vuejs-covid-tracker/"
        ></Project>
        <Project
          title="Real time chat app"
          description="Aplicación que te permite gestionar tus gastos que desarrollé para practicar mis conocimientos."
          repository="https://github.com/ivandez/expense-reports"
          img="https://user-images.githubusercontent.com/38108288/99753193-2e10c000-2abc-11eb-9bde-99f37ee9a1e6.png"
          demo="https://ivan-real-time-chat-expressjs.herokuapp.com/"
        ></Project>
        <Project
          title="Web de conferencia"
          description="Pagina web en HTML, CSS y otras tecnologias que simula una conferencia desarrollada en bootstrap."
          repository="https://github.com/ivandez/PlatziConfHawaii"
          img="https://user-images.githubusercontent.com/38108288/99753502-b0997f80-2abc-11eb-8b5f-bd4a8ab1222d.png"
          demo="https://ivandez.github.io/PlatziConfHawaii/"
        ></Project>
      </Container>
      <Container title="Abilities" id="abilities">
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
            "GNU/Linux",
            "TDD",
            "Docker",
          ]}
        ></Abilities>
      </Container>
      <Container title="Certificates" id="diplomas" idForScroll="diplomas">
        <Diplomas
          date="2018"
          title="English B1"
          link="https://user-images.githubusercontent.com/38108288/99884956-029aec00-2c08-11eb-8685-4cf2bff141af.jpg"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Software Engineering Fundamentals"
          link="https://platzi.com/@ivan-mendez/curso/1098-ingenieria/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Database Fundamentals"
          link="https://platzi.com/@ivan-mendez/curso/1566-bd/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Web development"
          link="https://platzi.com/@ivan-mendez/curso/1350-html5-css3/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Course of API REST"
          link="https://platzi.com/@ivan-mendez/curso/1638-api-rest/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="CAREER: Backend Development with PHP"
          link="https://platzi.com/@ivan-mendez/carrera/57-desarrollo-php/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Course of Git and Github"
          link="https://platzi.com/@ivan-mendez/curso/1170-git-github-2017/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Object Oriented Programming"
          link="https://platzi.com/@ivan-mendez/curso/1474-oop/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introduction to Terminal and Command Line"
          link="https://platzi.com/@ivan-mendez/curso/1276-terminal/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Course of Bootstrap 4"
          link="https://platzi.com/@ivan-mendez/curso/1331-bootstrap/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introduction to PHP"
          link="https://platzi.com/@ivan-mendez/curso/1338-php/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2018"
          title="Basic programming"
          link="https://platzi.com/@ivan-mendez/curso/1050-programacion-basica/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introducción to Java SE"
          link="https://platzi.com/@ivan-mendez/curso/1631-java-basico/diploma/detalle/"
        ></Diplomas>
      </Container>
      <Container title="Contact me :)" id="contact">
        <ContactForm></ContactForm>
      </Container>
      <Footer />
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
