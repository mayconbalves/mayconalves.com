"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import styles from "./breadcrumb.module.css";

const Breadcrumb = (): JSX.Element | null => {
  const pathname = usePathname();

  // Não exibir na página inicial
  if (pathname === "/") return null;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          
          // Formatar o nome para ficar mais amigável
          let name = value.replace(/-/g, " ");
          name = name.charAt(0).toUpperCase() + name.slice(1);
          
          // Se for uma rota longa de blog post (mais de 40 chars), truncar o nome
          if (name.length > 40) {
            name = name.substring(0, 40) + "...";
          }

          return (
            <li
              key={to}
              className={styles.breadcrumbItem}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link href={to}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
