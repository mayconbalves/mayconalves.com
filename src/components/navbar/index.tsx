"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";
import styles from "./navbar.module.css";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        {/* Logo no mobile */}
        <div className={styles.logo_mobile}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={80}
            priority
          />
        </div>

        {/* Hamburger Menu */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Desktop/Mobile */}
        <ul
          className={`${styles.nav_list} ${
            isMenuOpen ? styles.mobile_active : ""
          }`}
        >
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/about">Sobre</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/blog">Blog</Link>
          </li>

          <li className={styles.logo_image}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={150}
              priority
            />
          </li>

          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/video">Vídeos</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/book">Livros</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/tutorial">Tutoriais</Link>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
