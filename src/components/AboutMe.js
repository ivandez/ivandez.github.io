import React from "react";

const AboutMe = () => {
  return (
    <div className="about text-white container centerContainer">
      <h1 className="font-bold text-3xl pb-3">Sobre Mí</h1>
      <div className="about__text">
        <p>
          Soy un programador especializado en backend con PHP y Laravel con 3
          años de experiencia laboral. Soy Inglés es B1 avalado por FUNDAUC
          Universidad de Carabobo. Disfruto trabajar en equipo, compartir ideas
          e innovar. Siempre procuro demostrar y promover una actitud que genere
          confianza tanto a las personas/empresas que me contratan como a los
          grupos de trabajo donde me integro. Soy responsable, asumo los
          proyectos como si fueran propios y hago el mejor trabajo posible.
        </p>
        <br />

        <p>
          Soy una persona presistente y me gusta afrontar nuevos retos, como lo
          puedes ver en mi perfil de
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
          Tengo más 10 proyectos completados en
          <a
            href="https://www.workana.com/freelancer/040f508920d49fd82b2e473646587c4d"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-myColor mx-2 p-1"
          >
            Workana
          </a>
          y más de 2 contrataciones por segunda vez de mis clientes dentro de la
          plataforma, mi buena reputación dentro de la plataforma me ha
          permitido obtener clientes fuera de esta.
        </p>
        <br />

        <p>
          Fuera del trabajo me gusta leer sobre tecnologica, actualizar mi
          conocimientos de las herramientas que uso para trabajar y jugar
          futbol.
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
