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

      {/* iPhone 11, 12, 13, and 14 Pr display */}

      <MediaQuery maxWidth={391}>
        <Parallax
          pages={2.3}
          style={{
            top: "0",
            left: "0",
            color: "var(--gold)",
            backgroundColor: "var(--green)",
          }}
        >
          <ParallaxLayer offset={0} speed={2} >
            <MainSection />
          </ParallaxLayer>
          {/* <ParallaxLayer offset={0.35} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                width: "100%",
                marginLeft: "1%",
                opacity: "1"
              }}
              alt="pattern"
            />

          </ParallaxLayer> */}
          <ParallaxLayer offset={0.65} speed={2.5}>
          <FontAwesomeIcon
              icon={faPlane}
              style={{
                display: "block",
                marginLeft: "45%",
                transform: "rotate(-90deg)",
                fontSize: "36px",
                color: "var(--white)",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.98} speed={1.25}>
              <Introduction />
              <ServiceMobileTitle />
              <ServiceMobileItems />
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} speed={1.25}>
            <Contact />
            {/* <p>I am smallest screen</p> */}
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1.5}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "90%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
            </ParallaxLayer>
            <ParallaxLayer offset={1.25} speed={1.5}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "-38%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
            </ParallaxLayer>
        </Parallax>
      </MediaQuery>

      <MediaQuery minWidth={392} maxWidth={760}>
        <Parallax
          pages={2.15}
          style={{
            top: "0",
            left: "0",
            color: "var(--gold)",
            backgroundColor: "var(--green)",
          }}
        >
          <ParallaxLayer offset={0} speed={2} >
            <MainSection />
          </ParallaxLayer>
          {/* <ParallaxLayer offset={0.35} speed={1}>
            <img
              src={OutlinePattern}
              style={{
                width: "100%",
                marginLeft: "1%",
                opacity: "1"
              }}
              alt="pattern"
            />

          </ParallaxLayer> */}
          <ParallaxLayer offset={0.65} speed={2.5}>
          <FontAwesomeIcon
              icon={faPlane}
              style={{
                display: "block",
                marginLeft: "45%",
                transform: "rotate(-90deg)",
                fontSize: "36px",
                color: "var(--white)",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.98} speed={1.25}>
              <Introduction />
              <ServiceMobileTitle />
              <ServiceMobileItems />
          </ParallaxLayer>
          <ParallaxLayer offset={1.6} speed={1.25}>
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1.5}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "90%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "-38%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
            </ParallaxLayer>
        </Parallax>
      </MediaQuery>

      {/* Big Screen Version */}

      <MediaQuery minWidth={761}>
        <Parallax
          pages={2.4}
          style={{ top: "0", left: "0", color: "#f9f9f9" }}
          className="green-background"
        >
          <ParallaxLayer
            offset={0}
            speed={1}
            className="center green-background"
          >
            <MainSection />
          </ParallaxLayer>
          {/* <ParallaxLayer offset={0.5} speed={0.5}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "37.5%",
                marginTop: "-7.5%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer> */}
          <ParallaxLayer offset={0.65} speed={2.5}>
          <FontAwesomeIcon
              icon={faPlane}
              style={{
                display: "block",
                marginLeft: "48%",
                transform: "rotate(-90deg)",
                fontSize: "36px",
                color: "var(--white)",
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={1} className="center">
            <Introduction />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "-15.5%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <img
              src={OutlinePattern}
              style={{
                display: "block",
                width: "25%",
                marginLeft: "91.25%",
                opacity: "0.5",
              }}
              alt="pattern"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} className="center">
            <Services />
          </ParallaxLayer>
          <ParallaxLayer offset={1.9} speed={0}>
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
          <ParallaxLayer offset={1.9} speed={0}>
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
          <ParallaxLayer offset={1.8} speed={1} className="center">
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </MediaQuery>
    </>
  );
}

export default App;
