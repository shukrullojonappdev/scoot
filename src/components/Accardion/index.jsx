import React from "react";

import Icon from "../../assets/icons/Path 3.png";

import style from "./accordion.module.scss";

function Accordion({ title, text }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div onClick={handleOpen} className={style.accordion}>
          <h4>{title}</h4>
          <img
            className={`${open ? style.opened_icon : style.closed_icon}`}
            src={Icon}
            alt="show"
          />
        </div>
        <div className={`${style.panel} ${open ? style.opened : style.closed}`}>
          {text}
        </div>
      </div>
    </>
  );
}

export default Accordion;
