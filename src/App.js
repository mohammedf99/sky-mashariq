import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MediaQuery from "react-responsive";
import Contact from "./components/Contact";

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
          <ParallaxLayer offset={2.5} speed={2.5}>
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
        </Parallax>
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
