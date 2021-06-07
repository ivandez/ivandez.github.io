import React from "react";

const AboutMe = () => {
  return (
    <div className="about text-white container centerContainer">
      <h1 className="font-bold text-3xl pb-3">Sobre Mí</h1>
      <div className="about__text">
        <p>
          Soy desarrollador backend, dedico parte de mi tiempo libre a aprender
          nuevas tecnologías y a actualizarme con las que ya domino, tengo
          experiencia con HTML, CSS, JavaScript, Laravel, PHP, MySql y Node.js,
          construyo páginas web y APIs, soy bueno en lo que hago.
        </p>
        <br />

        <p>
          Soy curioso y me gusta afrontar nuevos retos, como lo puedes ver en mi
          perfil de
          <a
            href="https://github.com/ivandez"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-myColor mx-2 p-1"
          >
            Github
          </a>
          y
          <a
            href="https://www.codewars.com/users/ivandez"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-myColor mx-2 p-1"
          >
            CodeWars
          </a>
        </p>
        <br />

        <p>
          Mi último trabajo fue como desarrollador freelancer backend con
          Laravel para Manejo.pro donde estuve diseñando, probando e
          implementando nuevas funcionalidades para la empresa. Anteriormente
          trabaje en Founduss, una startup Venezolana donde me desempeñe como
          backend developer con Laravel, mis responsabilidades fueron crear
          nuevas funcionalidades, dar soporte técnico al desarrollador backend y
          frontend y realizar modificaciones a la base de datos, después me
          desempeñe como freelancer en
          <a
            href="https://www.workana.com/freelancer/040f508920d49fd82b2e473646587c4d"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-myColor mx-2 p-1"
          >
            Workana
          </a>
          donde mi buena reputación dentro de la plataforma me ha permitido
          obtener clientes fuera de esta.
        </p>
        <br />

        <p>
          Fuera del trabajo me gusta jugar fútbol, leer, aprender nuevas
          habilidades y conocer nuevos lugares.
        </p>

        <p>
          Aqui puedes ver mi{" "}
          <a
            href="https://drive.google.com/file/d/1LWuXmnWjf9IfBOSSMpnx9mZm8vQMcf_F/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-myColor mx-2 p-1"
          >
            curriculum vitae
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
