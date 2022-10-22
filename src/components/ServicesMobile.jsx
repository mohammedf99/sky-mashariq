import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faPassport,
  faCar,
  faTicket,
  faHotel,
  faTicketAlt,
  faTree,
  faPersonChalkboard,
  faDriversLicense,
} from "@fortawesome/free-solid-svg-icons";

const availableServices = [
  {
    title: "Local trip",
    icon: faBus,
  },
  {
    title: "Residency and citizenship",
    icon: faPassport,
  },
  {
    title: "Car rental",
    icon: faCar,
  },
  {
    title: "Flight ticket",
    icon: faTicketAlt,
  },
  {
    title: "Hotel reservation",
    icon: faHotel,
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
  {
    title: "International driving license",
    icon: faDriversLicense,
  },
];

export const ServiceMobileTitle = () => {
  return (
    <section className="center">
      <h2 className="title">
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

}
