"use client";
import Image from "next/image";
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
        {/* Logo no mobile */}
        <div className={styles.logo_mobile}>
          <Link href="/" aria-label="Ir para página inicial">
            <Image
              src="/images/logo.png"
              alt="Maycon Alves - Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Alternar para tema ${theme === "retro" ? "futurista" : "retro"}`}
          >
            {theme === "retro" ? "🚀" : "📜"}
          </button>
        )}

        {/* Hamburger Menu */}
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

        {/* Menu Desktop/Mobile */}
        <ul
          id="main-menu"
          className={`${styles.nav_list} ${
            isMenuOpen ? styles.mobile_active : ""
          }`}
          role="menubar"
        >
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/" role="menuitem">
              Home
            </Link>
          </li>
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/about" role="menuitem">
              Sobre
            </Link>
          </li>
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/blog" role="menuitem">
              Blog
            </Link>
          </li>

          <li className={styles.logo_image} aria-hidden="true">
            <Image
              src="/images/logo.png"
              alt=""
              width={150}
              height={150}
              priority
            />
          </li>

          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/video" role="menuitem">
              Vídeos
            </Link>
          </li>
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/book" role="menuitem">
              Livros
            </Link>
          </li>
          <li role="none" onClick={() => setIsMenuOpen(false)}>
            <Link href="/tutorial" role="menuitem">
              Tutoriais
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
