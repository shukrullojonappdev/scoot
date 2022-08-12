import style from "./about.module.scss";

import Info from "../../components/Info";

import Mobility from "../../assets/imgs/Bitmap.png";
import Better from "../../assets/imgs/Bitmap-1.png";
import NavName from "../../components/NavName";
import Values from "../../components/Values";
import Accordion from "../../components/Accardion";

function About() {
  return (
    <>
      <NavName navLabel="About" />
      <div className="container">
        <div>
          <Info
            info_title="Mobility for the digital era"
            info_text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            info_img={Mobility}
          />
          <Info
            info_title="Better urban living"
            info_text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            info_img={Better}
          />
        </div>

        <Values title="Our values" />

        <div className={style.faq}>
          <h2>FAQs</h2>
          <div className={style.accordion_box}>
            <h3>How it works</h3>
            <div>
              <Accordion
                title="How do I download the app?"
                text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
              />
              <Accordion
                title="Can I find a nearby Scoots?"
                text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
              />
              <Accordion
                title="Do I need a license to ride?"
                text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
              />
            </div>
          </div>
          <div className={style.accordion_box}>
            <h3>Safe driving</h3>
            <div>
              <Accordion
                title="Should I wear a helmet?"
                text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
              />
              <Accordion
                title="How about the rules & regulations?"
                text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
              />
              <Accordion
                title="What if I damage my Scoot?"
                text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
