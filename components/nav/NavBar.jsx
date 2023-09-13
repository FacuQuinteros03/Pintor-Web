'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  function mostrarOcultarMenu() {
    setMenuVisible(!menuVisible);
  }

  function seleccionar() {
    setMenuVisible(false);
  }

  const navClass = menuVisible ? 'responsive' : '';

  return (
    <div className="contenedor-header">
      <header>
        <Image src={'/images/loguiti.png'} alt="logo" width={50} height={40} />
        <div className="logo">
          <Link legacyBehavior href={'/'}>
            <a src="#">Cristian Zaragoza</a>
          </Link>
        </div>
        <nav id="nav" className={navClass}>
          <ul>
            <li>
              <Link legacyBehavior href={'/'}>
                <a href="" onClick={seleccionar}>
                  Inicio
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={'/works'}>
                <a href="" onClick={seleccionar}>
                  Trabajos
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={'/services'}>
                <a href="" onClick={seleccionar}>
                  Servicios
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={'/contact'}>
                <a href="" onClick={seleccionar}>
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="redes">
          <a
            href="https://www.facebook.com/profile.php?id=100088905354668&mibextid=D4KYlr"
            target="_blank"
            className="fa-brands fa-square-facebook"
          ></a>
          <a
            href="https://www.instagram.com/cristiancz.pintura/"
            className="fa-brands fa-instagram"
            target="_blank"
          ></a>
          <a
            href="https://wa.link/t7h5y1"
            target="_blank"
            className="fa-brands fa-whatsapp"
          ></a>
        </div>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
}
