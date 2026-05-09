"use client";
import Link from "next/link";
import { JSX, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./navbar.module.css";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <div className={styles.nav_container}>
        {/* Text Logo Premium */}
        <div className={styles.logo_text}>
          <Link href="/" aria-label="Ir para página inicial">
            Maycon
          </Link>
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Alternar para tema ${theme === "retro" ? "escuro" : "claro"}`}
          >
            {theme === "retro" ? "🌙" : "☀️"}
          </button>
        )}

        {/* Hamburger Menu Mobile */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Principal */}
        <ul
          id="main-menu"
          className={`${styles.nav_list} ${isMenuOpen ? styles.mobile_active : ""
            }`}
          role="menubar"
        >
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/" role="menuitem">
              Home
            </Link>
          </li>
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/blog" role="menuitem">
              Artigos
            </Link>
          </li>
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/about" role="menuitem">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
