import React from "react";
import "./styleSheets/App.css";
import TitleHeading from "./components/TitleHeading";
import SecondaryHeading from "./components/SecondaryHeading";
import ThirdHeading from "./components/ThirdHeading";
import ParagrapghGrey from "./components/ParagrapghGrey";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="container-child">
          <SecondaryHeading headingText="Hi, my name is" />
          <TitleHeading headingText="Ali Hassan. " />
          <ThirdHeading headingText="I build things for the web." />
          <ParagrapghGrey paragrapghText="I'm an engineer based in Lahore, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." />
        </div>
      </div>
    </>
  );
};

export default App;
