import React from "react";
import "./styleSheets/App.css";
import TitleHeading from "./components/TitleHeading";
import SecondaryHeading from "./components/SecondaryHeading";
import ThirdHeading from "./components/ThirdHeading";

const App = () => {
  return (
    <>
      <div>hello world.!</div>
      <SecondaryHeading headingText="Hi, my name is" />
      <TitleHeading headingText="Ali Hassan. " />
      <ThirdHeading headingText="I build things for the web." />
      <SecondaryHeading headingText="hello second heading" />
    </>
  );
};

export default App;
