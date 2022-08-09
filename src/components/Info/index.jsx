import style from "./info.module.scss";

function Info({ info_title, info_text, info_img, children }) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.content}>
          <h2 className={style.title}>{info_title}</h2>
          <p className={style.text}>{info_text}</p>
          {children}
        </div>
        <div className={style.img_box}>
          <img className={style.img} src={info_img} alt="info-img" />
        </div>
      </div>
    </>
  );
}

export default Info;
