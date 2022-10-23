import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="title contact-us center" style={{ color: "var(--white)" }}>
        Contact<span className="gold-title">us</span>
      </h2>
      <div className="contact-item">
        <span className="icon-size icon-margin">
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        <span className="normal-font white-title">+964 770 091 3535</span>
        <span className="normal-font white-title">+964 770 091 3636</span>
        <span className="normal-font white-title">+964 770 091 3737</span>
      </div>
      <div className="contact-item">
        <span className="icon-size icon-margin">
          <FontAwesomeIcon icon={faLink} />
        </span>
        <span className="white-title">
          ops<span className="normal-font">@</span>skymashariq
          <span className="normal-font">.</span>com
        </span>
        <span className="white-title">
          skymashariq<span className="normal-font">.</span>com
        </span>
      </div>
      <div className="contact-item">
        <span className="icon-size icon-margin">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <span className="location white-title">
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
