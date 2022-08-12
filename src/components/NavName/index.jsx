import NavImage from "../../assets/imgs/nav_image.png";

import style from "./navName.module.scss";

function NavName({ navLabel }) {
  return (
    <>
      <div className={style.nav_name}>
        <div className="container">
          <h1>{navLabel}</h1>
        </div>
        <img src={NavImage} alt="nav-img" />
        <div className={style.blur} />
      </div>
    </>
  );
}

export default NavName;
