"use client";

import { useMemo, useState } from "react";
import { IconType } from "react-icons";
import { FaCss3Alt, FaFigma, FaGitAlt, FaGears, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import {
  SiC,
  SiGatsby,
  SiJquery,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { DiVim } from "react-icons/di";

import styles from "./page.module.css";

type CategoryKey = "languages" | "frameworks" | "tools";

type Category = {
  key: CategoryKey;
  label: string;
  items: string[];
};

const techIcons: Record<string, IconType> = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  "linguagem C": SiC,
  React: FaReact,
  Redux: SiRedux,
  Gatsby: SiGatsby,
  "Next.js": SiNextdotjs,
  jQuery: SiJquery,
  Git: FaGitAlt,
  "CI/CD": FaGears,
  Figma: FaFigma,
  Vim: DiVim,
};

export default function TechnologiesTabs() {
  const categories = useMemo<Category[]>(
    () => [
      {
        key: "languages",
        label: "Linguagens",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "linguagem C"],
      },
      {
        key: "frameworks",
        label: "Frameworks e bibliotecas",
        items: ["React", "Redux", "Gatsby", "Next.js", "jQuery"],
      },
      {
        key: "tools",
        label: "Ferramentas",
        items: ["Git", "CI/CD", "Figma", "Vim"],
      },
    ],
    [],
  );

  const [active, setActive] = useState<CategoryKey>("languages");

  const activeCategory = categories.find((c) => c.key === active) ?? categories[0];

  return (
    <div className={styles.tech_tabs}>
      <div className={styles.tech_tablist} role="tablist" aria-label="Categorias de tecnologias">
        {categories.map((category) => {
          const isActive = category.key === active;
          return (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tech_tab} ${isActive ? styles.tech_tab_active : ""}`}
              onClick={() => setActive(category.key)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className={styles.tech_panel} role="tabpanel">
        <div className={styles.tech_items}>
          {activeCategory.items.map((item) => (
            <span key={item} className={styles.tech_item}>
              {(() => {
                const Icon = techIcons[item];
                if (!Icon) return null;
                return <Icon className={styles.tech_item_icon} aria-hidden="true" />;
              })()}
              <span className={styles.tech_item_label}>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
