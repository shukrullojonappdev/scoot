import style from "./jobs.module.scss";

function Jobs({ job, place }) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.content}>
          <h4>{job}</h4>
          <span>{place}</span>
        </div>
        <button>Apply</button>
      </div>
    </>
  );
}

export default Jobs;
