import "./IndustryLeader.scss";
import bottles from "../../assets/bottles.svg";
import { Fade } from "../Reveal/Reveal";

const IndustryLeader = () => {
  return (
    <section className="industry-wrapper" aria-labelledby="industry-heading">
      <div className="container">
        <div className="industryLeader">
          <div className="industry-left">
            <Fade top delay={1400}>
              <p className="eyebrow">
                The Industry Leader in Home Extraction Technology
              </p>
            </Fade>
            <Fade top delay={1600}>
              <h1 id="industry-heading">
                Craft high potency Real Simple Oil <br />
                and herbal concentrates from your <br />
                home grown plants and botanicals
              </h1>
            </Fade>
            <Fade top delay={1800}>
              <div>
                <button type="button" className="primary">
                  LEARN MORE
                </button>
              </div>
            </Fade>
          </div>
          <Fade bottom delay={2000}>
            <div className="right-side">
              <img
                src={bottles}
                alt="Bottles of home made herbal concentrate next to an ExtractCraft extractor"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default IndustryLeader;
