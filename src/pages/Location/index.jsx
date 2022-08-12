import React from "react";
import NavName from "../../components/NavName";
import LocationImg from "../../assets/imgs/Group 7.png";
import LocationImgMob from "../../assets/imgs/Group 24.png";
import style from "./location.module.scss";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function Location() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <NavName navLabel="Location" />
      <div className="container">
        {width > 500 ? (
          <img className={style.img} src={LocationImg} alt="" />
        ) : (
          <img className={style.img} src={LocationImgMob} alt="" />
        )}

        {width < 500 && (
          <div>
            <h4 className={style.city}>New York</h4>
            <h4 className={style.city}>London</h4>
            <h4 className={style.city}>Jakarta</h4>
            <h4 className={style.city}>Yokohama</h4>
          </div>
        )}

        <div className={style.row}>
          <h3>
            Your city <br /> not listed?
          </h3>
          <p>
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <button>Message Us</button>
        </div>
      </div>
    </>
  );
}

export default Location;
