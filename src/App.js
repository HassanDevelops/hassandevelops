import React from "react";
import "./styleSheets/App.css";
import TitleHeading from "./components/TitleHeading";
import SecondaryHeading from "./components/SecondaryHeading";
import ThirdHeading from "./components/ThirdHeading";
import HeadingTitle from "./components/HeadingTitle";
import PrimaryButton from "./components/PrimaryButton";
import ParagrapghGrey from "./components/ParagrapghGrey";
import ListItems from "./components/ListItems";

const App = () => {
  return (
    <>
      <SecondaryHeading headingText="Hi, my name is" />
      <TitleHeading headingText="Ali Hassan. " />
      <ThirdHeading headingText="I build things for the web." />
      <ParagrapghGrey paragrapghText="I'm an engineer based in Lahore, Pakistan. Specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." />
      <PrimaryButton buttonText="Get In Touch" />
      <HeadingTitle titleText="about me" />
      <ParagrapghGrey paragrapghText="Hello! I'm Hasan, a software engineer based in Lahore, Pakistan. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis. Here are a few technologies I've been working with recently:" />

      <ListItems
        listItemsArray={[
          "Javascript (ES6+)",
          "HTML & (S)CSS",
          "React",
          "Wordpress",
          "Shopify",
          " Web Development",
        ]}
      />
    </>
  );
};

export default App;
