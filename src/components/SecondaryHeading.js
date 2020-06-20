import React, { useState } from "react";
import Data from "../driver_registration.json";
import ListItems from "./ListItems";
const SecondaryHeading = () => {
  const [limitTo, setLimitTo] = useState(10);
  return (
    <div>
      {Data.slice(0, limitTo).map((data, index) => (
        <ListItems Data={data} key={index} />
      ))}
      <button onClick={() => setLimitTo(limitTo + 10)}>Load more</button>
    </div>
  );
};

export default SecondaryHeading;
