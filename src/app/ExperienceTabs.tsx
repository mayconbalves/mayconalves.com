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
        location: "Brazil · Remote",
        skills: ["Front-End Development", "React.js", "JavaScript", "PHP", "GraphQL"],
      },
      {
        key: "b3digitas",
        role: "Senior Frontend Developer",
        company: "B3 Digitas",
        period: "Jan 2025 - Oct 2025",
      },
      {
        key: "invillia",
        role: "Senior Frontend Developer",
        company: "Invillia",
        employmentType: "Full-time",
        period: "Jun 2022 - Dec 2024",
        location: "Brasil",
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
        role: "Frontend Developer",
        company: "Avanade",
        employmentType: "Full-time",
        period: "Apr 2021 - Jun 2022",
        skills: ["Git", "Redux.js", "JavaScript", "TypeScript", "Controle de versão", "API REST", "react"],
      },
      {
        key: "gympass",
        role: "Frontend Developer",
        company: "Gympass",
        employmentType: "Full-time",
        period: "Dec 2019 - Feb 2021",
        location: "São Paulo Area, Brazil",
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
        role: "Frontend Developer",
        company: "Acesso Soluções de Pagamentos",
        employmentType: "Full-time",
        period: "May 2019 - Dec 2019",
        location: "São Paulo",
        summary: "I working actually in development the backoffice system with react and apollo client",
        skills: ["GraphQL da Apollo", "Webpack", "GraphQL", "Git", "JavaScript", "Controle de versão", "API REST", "react"],
      },
      {
        key: "printi",
        role: "Frontend Web Developer",
        company: "Printi",
        employmentType: "Full-time",
        period: "Nov 2018 - May 2019",
        location: "São Paulo e Região, Brasil",
        summary: "I working with react, redux and nodejs for building e-commerce",
        skills: ["Webpack", "Git", "Redux.js", "JavaScript", "Controle de versão", "API REST", "react"],
      },
      {
        key: "leroy",
        role: "Frontend Developer",
        company: "Leroy Merlin Brasil",
        employmentType: "Full-time",
        period: "Jan 2017 - Nov 2018",
        location: "Av Alexandre Dumas",
        summary:
          "My first job with frontend developer, building schedule system and invoices of clients. Technology used react, redux, atomic css. REST for all requests.",
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
            <h3 className={styles.exp_role}>{activeExperience.role}</h3>
            <p className={styles.exp_company}>
              {activeExperience.company}
              {activeExperience.employmentType ? ` · ${activeExperience.employmentType}` : ""}
            </p>
          </div>

          <div className={styles.exp_meta}>
            <p className={styles.exp_period}>{activeExperience.period}</p>
            {activeExperience.location ? <p className={styles.exp_location}>{activeExperience.location}</p> : null}
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
