import style from "./action.module.scss";

function Action({ icon, title, text }) {
  return (
    <>
      <div className={style.action}>
        <div className={style.icon__border}>
          <img className={style.icon} src={icon} alt="action-icon" />
        </div>
        <div className={style.content}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Action;
