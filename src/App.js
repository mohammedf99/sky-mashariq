import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MediaQuery from "react-responsive";
import Contact from "./components/Contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

import Introduction from "./components/Introduction";
import MainSection from "./components/MainSection";
import Services from "./components/Services";
import {
  ServiceMobileTitle,
  ServiceMobileItems,
} from "./components/ServicesMobile";

import OutlinePattern from "./assets/images/pattern_outline.png";

function App() {
  return (
    <>
      <MediaQuery maxWidth={760}>
        <Parallax
          pages={1.75}
          style={{
            top: "0",
            left: "0",
            color: "var(--gold)",
            backgroundColor: "var(--green)",
          }}
        >
          <ParallaxLayer offset={0} speed={2}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "100%",
                marginLeft: "1%",
                marginTop: "+72.5%",
                opacity: "0.1",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3.5}>
            <MainSection />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1.5}>
          <FontAwesomeIcon
              icon={faPlane}
              style={{
                display: "block",
                marginLeft: "45%",
                transform: "rotate(90deg)",
                fontSize: "36px",
                color: "var(--white)",
                marginTop: "25%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.98} speed={2.5}>
            <Introduction />
            <ServiceMobileTitle />
            <ServiceMobileItems />
          </ParallaxLayer>
          <ParallaxLayer offset={0.98} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "90%",
                marginTop: "20%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.98} speed={3}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "-38%",
                marginTop: "150%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.99} speed={2.5}
            style={{ marginTop: "270%", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "90%",
                marginTop: "250%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={3}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "-38%",
                marginTop: "345%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
        </Parallax>
        {/* <Parallax
          pages={4}
          style={{ top: "0", left: "0", color: "#f9f9f9" }}
          className="gold-background"
        >
          <ParallaxLayer
            offset={0}
            speed={2.5}
            className="green-background"
            style={{ width: "100%" }}
          >
            <MainSection />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "100%",
                marginLeft: "1%",
                marginTop: "-35%",
                opacity: "0.1",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} className="green-background" />
          <ParallaxLayer offset={1} speed={0.75} className="center">
            <Introduction />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.75}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "-38%",
                marginTop: "-87.5%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.75}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "90%",
                marginTop: "51%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} className="green-background" />
          <ParallaxLayer offset={2} speed={0.75}>
            <ServiceMobileTitle />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.5}
            speed={1.5}
            className="green-background"
          />
          <ParallaxLayer offset={2.25} speed={0.5}>
            <ServiceMobileItems />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} className="green-background"  />
          <ParallaxLayer offset={3} speed={0.75} className="center">
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "-38%",
                marginTop: "-87.5%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "90%",
                marginTop: "51%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
        </Parallax> */}
      </MediaQuery>

      {/* Big Screen Version */}

      <MediaQuery minWidth={761}>
        <Parallax
          pages={4}
          style={{ top: "0", left: "0", color: "#f9f9f9" }}
          className="gold-background"
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="center green-background"
          >
            <MainSection />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "37.5%",
                marginTop: "-7.5%",
                opacity: "0.2",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} className="green-background" />
          <ParallaxLayer offset={1} speed={0.75} className="center">
            <Introduction />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "-15.5%",
                marginTop: "-9%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "91.25%",
                marginTop: "-9%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} className="green-background" />
          <ParallaxLayer offset={2} speed={0.75} className="center">
            <Services />
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "-15.5%",
                marginTop: "-9%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "91.25%",
                marginTop: "-9%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} className="green-background" />
          <ParallaxLayer offset={3} speed={0.75} className="center">
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "-15.5%",
                marginTop: "-9%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "91.25%",
                marginTop: "-9%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
        </Parallax>
      </MediaQuery>
    </>
  );
}

export default App;
