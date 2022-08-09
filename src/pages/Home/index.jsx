import React from "react";

// Images and icons
import MainImage from "../../assets/imgs/main-img.png";
import MainImageTablet from "../../assets/imgs/main-img_tablet.png";
import MainImageMobile from "../../assets/imgs/main-img_mobile.png";
import Line from "../../assets/icons/Group 13 Copy.svg";
import Mobile from "../../assets/icons/mobile.png";
import Scooter from "../../assets/icons/scooter.png";
import Rider from "../../assets/icons/rider.png";
import Use from "../../assets/imgs/use.png";
import Place from "../../assets/imgs/place.png";
import Payment from "../../assets/imgs/payment.png";

// Modules
import style from "./home.module.scss";
import Action from "../../components/Action";
import Info from "../../components/Info";

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
        <div className={style.box__img}>
          {width < 1060 ? (
            width > 500 ? (
              <>
                <img className={style.img} src={MainImageTablet} alt="main" />
                <div className={style.box_content}>
                  <h1>Scooter sharing made simple</h1>
                  <p>
                    Scoot takes the hassle out of urban mobility. Our bikes are
                    placed in convenient locations in each of our cities. Use
                    our app to locate the nearest bike, unlock it with a tap,
                    and you’re away!
                  </p>
                  <button>Get Scootin</button>
                </div>
              </>
            ) : (
              <>
                <img className={style.img} src={MainImageMobile} alt="main" />
                <div className={style.box_content}>
                  <h1>Scooter sharing made simple</h1>
                  <p>
                    Scoot takes the hassle out of urban mobility. Our bikes are
                    placed in convenient locations in each of our cities. Use
                    our app to locate the nearest bike, unlock it with a tap,
                    and you’re away!
                  </p>
                  <button>Get Scootin</button>
                </div>
              </>
            )
          ) : (
            <>
              <img className={style.img} src={MainImage} alt="main" />
              <img className={style.img} src={MainImageMobile} alt="main" />
              <div className={style.box_content}>
                <h1>Scooter sharing made simple</h1>
                <p>
                  Scoot takes the hassle out of urban mobility. Our bikes are
                  placed in convenient locations in each of our cities. Use our
                  app to locate the nearest bike, unlock it with a tap, and
                  you’re away!
                </p>
                <button>Get Scootin</button>
              </div>
            </>
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

      <div className="container">
        <Info
          info_img={Use}
          info_title="Easy to use
riding telemetry"
          info_text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        >
          <button>Learn More</button>
        </Info>
        <Info
          info_img={Place}
          info_title="Coming to a city near you"
          info_text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        >
          <button>Learn More</button>
        </Info>
        <Info
          info_img={Payment}
          info_title="Zero hassle payments"
          info_text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        >
          <button>Learn More</button>
        </Info>
      </div>
    </>
  );
}

export default Home;
