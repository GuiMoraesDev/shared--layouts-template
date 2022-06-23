import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

import "./styles.css";

function Home() {
  return (
    <div className="page-container">
      <header className="top-navbar">
        <Link to="/">
          <img src={Logo} alt="react logo" className="logo-component" />
        </Link>

        <nav className="navigation-bar">
          <Link className="navigation-item" to="/">
            Home
          </Link>
          <Link className="navigation-item" to="/about">
            About
          </Link>
        </nav>
      </header>

      <main className="content-wrapper">
        <div className="session-wrapper">
          <h2 className="session-title">Home session title</h2>
          <p className="session-text-paragraph">
            Sit culpa ex irure sit voluptate deserunt laborum in adipisicing et
            ex cillum commodo. Esse ea id et voluptate proident. Incididunt
            voluptate in voluptate commodo ullamco dolor ipsum non culpa non
            laborum incididunt et nulla. Officia officia exercitation nostrud
            esse do tempor ullamco commodo pariatur dolore amet aliquip aliquip
            cupidatat. Eu do quis dolor adipisicing laborum reprehenderit elit
            aute eu consequat consectetur. Cupidatat ad sint excepteur do labore
            reprehenderit elit. Minim cillum incididunt deserunt ut velit irure
            aliquip.
          </p>

          <p className="session-text-paragraph">
            Ullamco minim irure nulla culpa ipsum ullamco Lorem id officia.
            Aliquip reprehenderit officia aliquip duis voluptate pariatur. Velit
            aliqua enim officia in id proident mollit nostrud laborum amet
            ipsum. Id velit adipisicing est mollit Lorem magna eiusmod voluptate
            consequat.
          </p>

          <p className="session-text-paragraph">
            Eiusmod aliqua aute veniam aliqua sit sint Lorem fugiat. Elit
            exercitation culpa ea deserunt aliquip sint aliquip voluptate est
            culpa. Cillum pariatur sit nisi officia incididunt commodo mollit
            reprehenderit mollit tempor. Quis nulla qui et consectetur nulla
            esse mollit ex sint. Aute irure aute ea exercitation.
          </p>
        </div>

        <div className="session-wrapper">
          <h2 className="session-title">Home session title</h2>
          <p className="session-text-paragraph">
            Sit culpa ex irure sit voluptate deserunt laborum in adipisicing et
            ex cillum commodo. Esse ea id et voluptate proident. Incididunt
            voluptate in voluptate commodo ullamco dolor ipsum non culpa non
            laborum incididunt et nulla. Officia officia exercitation nostrud
            esse do tempor ullamco commodo pariatur dolore amet aliquip aliquip
            cupidatat. Eu do quis dolor adipisicing laborum reprehenderit elit
            aute eu consequat consectetur. Cupidatat ad sint excepteur do labore
            reprehenderit elit. Minim cillum incididunt deserunt ut velit irure
            aliquip.
          </p>

          <p className="session-text-paragraph">
            Ullamco minim irure nulla culpa ipsum ullamco Lorem id officia.
            Aliquip reprehenderit officia aliquip duis voluptate pariatur. Velit
            aliqua enim officia in id proident mollit nostrud laborum amet
            ipsum. Id velit adipisicing est mollit Lorem magna eiusmod voluptate
            consequat.
          </p>

          <p className="session-text-paragraph">
            Eiusmod aliqua aute veniam aliqua sit sint Lorem fugiat. Elit
            exercitation culpa ea deserunt aliquip sint aliquip voluptate est
            culpa. Cillum pariatur sit nisi officia incididunt commodo mollit
            reprehenderit mollit tempor. Quis nulla qui et consectetur nulla
            esse mollit ex sint. Aute irure aute ea exercitation.
          </p>
        </div>

        <div className="session-wrapper">
          <h2 className="session-title">Home session title</h2>
          <p className="session-text-paragraph">
            Sit culpa ex irure sit voluptate deserunt laborum in adipisicing et
            ex cillum commodo. Esse ea id et voluptate proident. Incididunt
            voluptate in voluptate commodo ullamco dolor ipsum non culpa non
            laborum incididunt et nulla. Officia officia exercitation nostrud
            esse do tempor ullamco commodo pariatur dolore amet aliquip aliquip
            cupidatat. Eu do quis dolor adipisicing laborum reprehenderit elit
            aute eu consequat consectetur. Cupidatat ad sint excepteur do labore
            reprehenderit elit. Minim cillum incididunt deserunt ut velit irure
            aliquip.
          </p>

          <p className="session-text-paragraph">
            Ullamco minim irure nulla culpa ipsum ullamco Lorem id officia.
            Aliquip reprehenderit officia aliquip duis voluptate pariatur. Velit
            aliqua enim officia in id proident mollit nostrud laborum amet
            ipsum. Id velit adipisicing est mollit Lorem magna eiusmod voluptate
            consequat.
          </p>

          <p className="session-text-paragraph">
            Eiusmod aliqua aute veniam aliqua sit sint Lorem fugiat. Elit
            exercitation culpa ea deserunt aliquip sint aliquip voluptate est
            culpa. Cillum pariatur sit nisi officia incididunt commodo mollit
            reprehenderit mollit tempor. Quis nulla qui et consectetur nulla
            esse mollit ex sint. Aute irure aute ea exercitation.
          </p>
        </div>

        <div className="session-wrapper">
          <h2 className="session-title">Home session title</h2>
          <p className="session-text-paragraph">
            Sit culpa ex irure sit voluptate deserunt laborum in adipisicing et
            ex cillum commodo. Esse ea id et voluptate proident. Incididunt
            voluptate in voluptate commodo ullamco dolor ipsum non culpa non
            laborum incididunt et nulla. Officia officia exercitation nostrud
            esse do tempor ullamco commodo pariatur dolore amet aliquip aliquip
            cupidatat. Eu do quis dolor adipisicing laborum reprehenderit elit
            aute eu consequat consectetur. Cupidatat ad sint excepteur do labore
            reprehenderit elit. Minim cillum incididunt deserunt ut velit irure
            aliquip.
          </p>

          <p className="session-text-paragraph">
            Ullamco minim irure nulla culpa ipsum ullamco Lorem id officia.
            Aliquip reprehenderit officia aliquip duis voluptate pariatur. Velit
            aliqua enim officia in id proident mollit nostrud laborum amet
            ipsum. Id velit adipisicing est mollit Lorem magna eiusmod voluptate
            consequat.
          </p>

          <p className="session-text-paragraph">
            Eiusmod aliqua aute veniam aliqua sit sint Lorem fugiat. Elit
            exercitation culpa ea deserunt aliquip sint aliquip voluptate est
            culpa. Cillum pariatur sit nisi officia incididunt commodo mollit
            reprehenderit mollit tempor. Quis nulla qui et consectetur nulla
            esse mollit ex sint. Aute irure aute ea exercitation.
          </p>
        </div>
      </main>

      <footer className="page-footer">
        Guilherme Moraes@2022
        <nav className="navigation-bar">
          <Link className="navigation-item" to="/">
            Home
          </Link>
          <Link className="navigation-item" to="/about">
            About
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
