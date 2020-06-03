import React from "react";
import "./styleSheets/App.css";
import TitleHeading from "./components/TitleHeading";
import SecondaryHeading from "./components/SecondaryHeading";
import ThirdHeading from "./components/ThirdHeading";
import ParagrapghGrey from "./components/ParagrapghGrey";

const App = () => {
  return (
    <>
      <SecondaryHeading headingText="Hi, my name is" />
      <TitleHeading headingText="Ali Hassan. " />
      <ThirdHeading headingText="I build things for the web." />
      <ParagrapghGrey paragrapghText="I'm an engineer based in Lahore, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." />
      <SecondaryHeading headingText="hello second heading" />
    </>
  );
};

export default App;
