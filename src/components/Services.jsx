import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPassport,
  faTicket,
  faTicketAlt,
  faTree,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
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

  return (
    <section className="service-section center-column">
      <div className="full-width">
        <h2 className="title center">
          <span>Our</span>
          <span className="gold-title">services</span>
        </h2>
      </div>
      <div className="services-grid full-width">
        {availableServices.map((service) => (
          <div className="service-grid-item">
            <span className="icon-size">
              {<FontAwesomeIcon icon={service.icon} />}
            </span>
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
