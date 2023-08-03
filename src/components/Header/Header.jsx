import React, { useState } from "react";

import { PiCoffee } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import recipes from "../../assets/data/recipes";

const nav__links = [
  {
    path: "home",
    display: "Ana Sayfa",
  },
  {
    path: "recipes",
    display: "Tarifler",
  },
  {
    path: "about",
    display: "Hakkımızda",
  },
];

const Header = () => {

  return (
    <header className="header">
      <Container className="container">
        <Row>
          <div className="nav__wrapper">
            {/* ----- LOGO START-----*/}
            <div className="logo">
              <Link to="/home">
                <PiCoffee className="logo__icon fs-3" />
              </Link>

              <div>
                <Link to="/home">
                  <h1>Lezzet Sofrası</h1>
                </Link>
              </div>
            </div>
            {/* ----- LOGO END-----*/}

            {/* ----- NAVIGATION START-----*/}
            <div className="navitation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ----- NAVIGATION END-----*/}

            {/* ----- SEARCH START-----*/}
            <div className="search__box">
              <input
                type="text"
                placeholder="Yemek tarifi ara"
              />
              <span>
                <CiSearch className="search__icon fs-5" />
              </span>
            </div>
            {/* ----- SEARCH END-----*/}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
