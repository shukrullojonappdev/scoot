import { Link } from "react-router-dom";

import AppStore from "../../assets/imgs/Group 28.png";
import GooglePlay from "../../assets/imgs/Group 28 Copy.png";
import Logo from "../../assets/icons/scoot_white.png";
import Facebook from "../../assets/icons/Path.png";
import Twitter from "../../assets/icons/Path-1.png";
import Instagram from "../../assets/icons/Shape.png";

import style from "./footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className="container">
          <div className={style.store}>
            <h2>
              Sign up and <br /> Scoot off today
            </h2>
            <div>
              <img src={AppStore} alt="app-store" />
              <img src={GooglePlay} alt="google-play" />
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className="container">
            <div className={style.row_inner}>
              <div className={style.logo}>
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className={style.nav}>
                <nav className={style.links}>
                  <Link className={style.link} to="about">
                    About
                  </Link>
                  <Link className={style.link} to="location">
                    Location
                  </Link>
                  <Link className={style.link} to="careers">
                    Careers
                  </Link>
                </nav>
                <div className={style.social}>
                  <img src={Facebook} alt="facebook" />
                  <img src={Twitter} alt="twitter" />
                  <img src={Instagram} alt="instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
