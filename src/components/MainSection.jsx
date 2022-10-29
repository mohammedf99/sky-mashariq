import Navbar from "./Navbar";

const MainSection = () => {  

  return (
    <main style={{ height: "100%", width: "100%" }} className="back-img">
      <Navbar />
      <div style={{ height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="center-column">
          <h1 style={{ fontSize: "2em", color: "var(--white)" }} >it is Time</h1>
          <h1 style={{ fontSize: "3em", color: "var(--gold)" }}>To Fly</h1>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
