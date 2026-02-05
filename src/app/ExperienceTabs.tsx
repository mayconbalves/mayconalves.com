"use client";

import { useMemo, useState } from "react";

import styles from "./page.module.css";

type ExperienceKey =
  | "frota162"
  | "b3digitas"
  | "invillia"
  | "avanade"
  | "gympass"
  | "acesso"
  | "printi"
  | "leroy";

type Experience = {
  key: ExperienceKey;
  role: string;
  company: string;
  employmentType?: string;
  period: string;
  location?: string;
  summary?: string;
  skills?: string[];
};

export default function ExperienceTabs() {
  const experiences = useMemo<Experience[]>(
    () => [
      {
        key: "frota162",
        role: "Senior Frontend Developer",
        company: "Frota 162",
        employmentType: "Full-time",
        period: "Oct 2025 - Present",
        summary: `Estou trabalhando em um projeto legado com PHP e React. Minha missão é desativar o projeto legado
          e implementar um novo projeto moderno usando arquitetura de microfrontends, GraphQL e consumindo componentes do DS interno.`,
        skills: ["Front-End Development", "React.js", "JavaScript", "PHP", "GraphQL"],
      },
      {
        key: "b3digitas",
        role: "Senior Frontend Developer",
        company: "B3 Digitas",
        period: "Jan 2025 - Oct 2025",
        summary: `Eu trabalhava com sistemas de câmbio. E com sistemas administrativos. Usávamos React e Apollo Client nos dois sistemas,
          porém usávamos a arquitetura de micro-frontend para cada um deles, para orquestrar os front-ends usávamos module federation do webpack.
          Também mantínhamos um DS próprio para ter consistência nos componentes de cada tela. Para testes usávamos RTL e jest.`,
        skills: ["Redux Thunk", "React.js", "Git", "JavaScript", "styled-components", "Controle de versão", "API REST", "react"],
      },
      {
        key: "invillia",
        role: "Senior Frontend Developer",
        company: "Invillia",
        employmentType: "Full-time",
        period: "Jun 2022 - Dec 2024",
        summary: `Pelo fato de a Invillia ser uma consultoria, tive oportunidade de trabalhar em vários projetos diferentes,
          na grande maioria deles trabalhei usando React, Redux, styled-components e jest com RTL para testes unitários e de UI.`,
        skills: [
          "Redux Thunk",
          "React.js",
          "Git",
          "JavaScript",
          "styled-components",
          "Strapi",
          "TypeScript",
          "Next.js",
          "Controle de versão",
          "redux",
          "API REST",
          "react",
        ],
      },
      {
        key: "avanade",
        role: "Senior Frontend Developer",
        company: "Avanade",
        employmentType: "Full-time",
        period: "Apr 2021 - Jun 2022",
        summary: `Pelo fato de a Avanade ser uma consultoria, tive oportunidade de trabalhar em vários projetos diferentes,
          na grande maioria deles trabalhei usando React, Redux, styled-components e jest com RTL para testes unitários e de UI.`,
        skills: ["Git", "Redux.js", "JavaScript", "TypeScript", "Controle de versão", "API REST", "react"],
      },
      {
        key: "gympass",
        role: "Mid Frontend Developer",
        company: "Gympass",
        employmentType: "Full-time",
        period: "Dec 2019 - Feb 2021",
        summary: `Eu trabalhei na nova plataforma web que estava sendo desenvolvida. A plataforma mais nova foi
          feita em React junto com Redux para controlar o estado global da aplicação e usava styled-components para o visual,
          além de RTL para os testes de UI.

          A plataforma legada era feita em Ruby on Rails e tínhamos features de sustentação enquanto acontecei a migração
          dessa plataforma antiga.

          Tive a oportunidade de trabalhar no app feito em RN e o consumo de dados era feito via GraphQL.`,
        skills: [
          "GraphQL da Apollo",
          "GraphQL",
          "Git",
          "Redux.js",
          "JavaScript",
          "React Native",
          "TypeScript",
          "Next.js",
          "Controle de versão",
          "API REST",
          "react",
        ],
      },
      {
        key: "acesso",
        role: "Mid Frontend Developer",
        company: "Acesso Soluções de Pagamentos",
        employmentType: "Full-time",
        period: "May 2019 - Dec 2019",
        summary: `Eu trabalhei na criação de um sistema de backoffice voltado para os clientes finais,
          usamos para criação dessa aplicação React e Apollo Client para manipulação dos dados,
          além disso usamos styled-componentes para criar os estilos do app e jest com enzyme para os testes unitários.`,
        skills: ["GraphQL da Apollo", "Webpack", "GraphQL", "Git", "JavaScript", "Controle de versão", "API REST", "react"],
      },
      {
        key: "printi",
        role: "Mid Frontend Developer",
        company: "Printi",
        employmentType: "Full-time",
        period: "Nov 2018 - May 2019",
        summary: `Trabalhei em uma nova versão do e-commerce. Usamos React e Redux para controle de estado global,
          emotion-js para estilização da interface do usuário e Node.js para criar um BFF nativo.`,
        skills: ["Webpack", "Git", "Redux.js", "JavaScript", "Controle de versão", "API REST", "react"],
      },
      {
        key: "leroy",
        role: "JuniorFrontend Developer",
        company: "Leroy Merlin Brasil",
        employmentType: "Full-time",
        period: "Jan 2017 - Nov 2018",
        summary: `Meu primeiro como desenvolvedor frontend, construindo sistema de agendamento e faturas de clientes.
          Nós usamos para constuir esses sistemas react, redux e atomic css.`,
        skills: ["Webpack", "Git", "Redux.js", "JavaScript", "Controle de versão", "API REST", "react"],
      },
    ],
    [],
  );

  const [active, setActive] = useState<ExperienceKey>("frota162");

  const activeExperience = experiences.find((e) => e.key === active) ?? experiences[0];

  return (
    <div className={styles.exp_tabs}>
      <div className={styles.exp_tablist} role="tablist" aria-label="Experiências profissionais">
        {experiences.map((experience) => {
          const isActive = experience.key === active;
          return (
            <button
              key={experience.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.exp_tab} ${isActive ? styles.exp_tab_active : ""}`}
              onClick={() => setActive(experience.key)}
            >
              {experience.company}
            </button>
          );
        })}
      </div>

      <div className={styles.exp_panel} role="tabpanel">
        <div className={styles.exp_header}>
          <div className={styles.exp_title}>
            <h3 className={styles.exp_role}>{activeExperience.role}/{activeExperience.employmentType}/{activeExperience.period}</h3>
            <p className={styles.exp_company}>
              {activeExperience.company}
            </p>
          </div>
        </div>

        {activeExperience.summary ? <p className={styles.exp_summary}>{activeExperience.summary}</p> : null}

        {activeExperience.skills && activeExperience.skills.length > 0 ? (
          <div className={styles.exp_skills} aria-label="Skills">
            {activeExperience.skills.map((skill) => (
              <span key={skill} className={styles.exp_skill}>
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
