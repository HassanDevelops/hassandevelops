import React from "react";
import Data from "../driver_registration copy.json";
import ListItems from "./ListItems";
const SecondaryHeading = () => {
  return (
    <div>
      {Data.map((data, index) => (
        <ListItems Data={data} key={index} />
      ))}
    </div>
  );
};

export default SecondaryHeading;
