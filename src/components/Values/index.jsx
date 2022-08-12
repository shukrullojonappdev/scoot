import style from "./values.module.scss";

import img1 from "../../assets/imgs/Bitmap-5 (3).png";
import img2 from "../../assets/imgs/Bitmap-5 (1).png";
import img3 from "../../assets/imgs/Bitmap-5 (2).png";

function Values({ title }) {
  return (
    <section className={style.values}>
      <h2>{title}</h2>
      <div className={style.row}>
        <div className={style.wrapper}>
          <div className={style.box}>
            <img src={img1} alt="" />
            <h4 className={style.number}>01</h4>
          </div>
          <h4>Our tech</h4>
          <p>
            We’re using cutting edge technology to drive accessible urban
            transportation forward. Our fully electric scooters are a joy to
            ride!
          </p>
        </div>
        <div className={style.wrapper}>
          <div className={style.box}>
            <img src={img2} alt="" />
            <h4 className={style.number}>02</h4>
          </div>
          <h4>Our integrity</h4>
          <p>
            We are fully committed to deliver a great yet safe, sustainable
            micro-mobility experience in every city we serve.
          </p>
        </div>
        <div className={style.wrapper}>
          <div className={style.box}>
            <img src={img3} alt="" />
            <h4 className={style.number}>03</h4>
          </div>
          <h4>Our community</h4>
          <p>
            We support every community we serve. All workers are paid a living
            wage based on their location and are Scoot employees.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Values;
