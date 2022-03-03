import React from "react";

const AboutMe = () => {
  return (
    <div className="about text-white container centerContainer">
      <h1 className="font-bold text-3xl pb-3">About me</h1>
      <div className="about__text">
        <p>
          I am a web programmer with 3 years of work experience. My English is
          B1 endorsed by FUNDAUC, University of Carabobo.
        </p>
        <br />
        <p>
          My work consists of designing and developing APIs, converting business
          logic into code, designing and implementing relational databases and
          integrate third-party solutions
        </p>
        <br/>
        <p>
          I have more than 10 projects completed on <a
            href="https://www.workana.com/freelancer/040f508920d49fd82b2e473646587c4d"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-myColor mx-2 p-1"
          >
            Workana
          </a> and more than 2 second
          time hires from my clients within the platform, my good reputation
          within the platform has allowed me to get clients outside the
          platform. I have also managed to be 22th in the top programmers in Venezuela.
        </p>
        <br />
        <p>
          I enjoy working in a team, sharing ideas, and innovating. I always try
          to demonstrate and promote an attitude that generates confidence both
          in the people/companies that hire me and in the workgroups where I
          work. I am responsible, I take on projects as if they were my own and
          do the best possible job.
        </p>
        <br />
        <p>
          I am a persistent person and I like to take on new challenges, as you
          can see in my profile on
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
      </div>
    </div>
  );
};

export default AboutMe;
