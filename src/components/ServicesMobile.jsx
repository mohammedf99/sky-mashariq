import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPassport,
  faTicket,
  faTicketAlt,
  faTree,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

const availableServices = [
  {
    title: "Residency and citizenship",
    icon: faPassport,
  },
  {
    title: "Flight ticket",
    icon: faTicketAlt,
  },
  {
    title: "Visa services",
    icon: faTicket,
  },
  {
    title: "Vacation package",
    icon: faTree,
  },
  {
    title: "Travel and tourism course",
    icon: faPersonChalkboard,
  },
];

export const ServiceMobileTitle = () => {
  return (
    <section className="center mobile-title-section">
      <h2 className="title" style={{ color: "var(--white)" }}>
        Our <span className="gold-title">services</span>
      </h2>
    </section>
  );
};

export const ServiceMobileItems = () => {
  return (
    <section className="service-section2-mobile">
      <div className="service-grid-mobile">
        {availableServices.map((service) => (
          <div className="service-grid-item">
            <span className="icon-size-mobile">
              {<FontAwesomeIcon icon={service.icon} />}
            </span>
            <h4 className="service-title-mobile">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
