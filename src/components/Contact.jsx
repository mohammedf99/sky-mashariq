import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="title contact-us center">
        Contact<span className="gold-title">us</span>
      </h2>
      <div className="contact-item">
        <span className="icon-size icon-margin">
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        <span className="normal-font">+964 770 983 1999</span>
        <span className="normal-font">+964 770 091 3737</span>
      </div>
      <div className="contact-item">
        <span className="icon-size icon-margin">
          <FontAwesomeIcon icon={faLink} />
        </span>
        <span>
          ops<span className="normal-font">@</span>skymashariq
          <span className="normal-font">.</span>com
        </span>
        <span>
          skymashariq<span className="normal-font">.</span>com
        </span>
      </div>
      <div className="contact-item">
        <span className="icon-size icon-margin">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <span className="location">
          Iraq<span className="normal-font">,</span> Sulaymaniyah
          <span className="normal-font">,</span> Near Bakhtiari Technical
          Institute
        </span>
      </div>
      <div className="center">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
