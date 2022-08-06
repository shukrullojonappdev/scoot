import React from "react";
import { Link } from "react-router-dom";

import style from "./header.module.scss";
import Logo from "../../assets/icons/scoot.png";
import Burger from "../../assets/icons/burger.svg";
import Close from "../../assets/icons/close.svg";

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleToggleNav = () => {
    setOpen(!open);
  };

  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container">
        <header className={style.header}>
          <div className={`${style.header__mobile}`}>
            {open ? (
              <img
                onClick={handleToggleNav}
                className={style.burger}
                src={Close}
                alt="burger"
              />
            ) : (
              <img
                onClick={handleToggleNav}
                className={style.burger}
                src={Burger}
                alt="burger"
              />
            )}
            <div className={style.logo}>
              <Link to="/">
                <img onClick={handleCloseNav} src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div
            className={`${style.navigation} ${
              open ? `${style.open}` : `${style.close}`
            }`}>
            <nav className={style.links}>
              <Link onClick={handleCloseNav} className={style.link} to="about">
                About
              </Link>
              <Link
                onClick={handleCloseNav}
                className={style.link}
                to="location">
                Location
              </Link>
              <Link
                onClick={handleCloseNav}
                className={style.link}
                to="careers">
                Careers
              </Link>
            </nav>
            <button>Get Scootin</button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
