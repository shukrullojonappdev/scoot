import React from "react";

// Images and icons
import MainImage from "../../assets/imgs/main-img.png";
import MainImageTablet from "../../assets/imgs/main-img_tablet.png";
import MainImageMobile from "../../assets/imgs/main-img_mobile.png";
import Line from "../../assets/icons/Group 13 Copy.svg";
import Mobile from "../../assets/icons/mobile.png";
import Scooter from "../../assets/icons/scooter.png";
import Rider from "../../assets/icons/rider.png";

// Modules
import style from "./home.module.scss";
import Action from "../../components/Action";

const items = [
  {
    icon: Mobile,
    title: "Locate with app",
    text: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
  },
  {
    icon: Scooter,
    title: "Pick your scooter",
    text: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    icon: Rider,
    title: "Enjoy the ride",
    text: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];

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

function Home() {
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
      <div className={style.box}>
        <img src={Line} className={style.line} alt="line" />
        <div className={style.box__img}>
          {width < 1060 ? (
            width > 500 ? (
              <img className={style.img} src={MainImageTablet} alt="main" />
            ) : (
              <img className={style.img} src={MainImageMobile} alt="main" />
            )
          ) : (
            <img className={style.img} src={MainImage} alt="main" />
          )}
          <div className={style.img__blur}></div>
        </div>
      </div>

      <div className={style.actions__row}>
        <div className="container">
          <div className={style.actions}>
            <div className={style.actions__line}></div>
            {items.map((item, index) => (
              <Action key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
