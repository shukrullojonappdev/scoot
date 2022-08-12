import Info from "../../components/Info";
import NavName from "../../components/NavName";
import Values from "../../components/Values";

import Img from "../../assets/imgs/Bitmap 5.png";
import Jobs from "../../components/Jobs";

function Careers() {
  return (
    <>
      <NavName navLabel="Careers" />
      <div className="container">
        <Info
          info_img={Img}
          info_title="Care to join our mission?"
          info_text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        >
          <button>Say Hello</button>
        </Info>
        <Values title="Why join us?" />

        <div style={{ marginBottom: 90 }}>
          <Jobs job="General Manager" place="Jakarta, Indonesia" />
          <Jobs job="UI/UX Designer" place="Yokohama, Japan" />
          <Jobs job="Blog Content Copywriter" place="New York, United States" />
          <Jobs job="Graphic Designer" place="New York, United States" />
          <Jobs job="Fleet Supervisor" place="Jakarta, Indonesia" />
          <Jobs job="UX Analyst" place="London, United Kingdom" />
        </div>
      </div>
    </>
  );
}

export default Careers;
