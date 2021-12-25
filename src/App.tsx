import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const App = () => {
  return (
    <div>
      <Circle bgColor="teal" borderColor="yellow" text="From app" />
      <Circle bgColor="tomato" />
    </div>
  );
};

export default App;
