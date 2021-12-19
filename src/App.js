import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  background-color: tomato;
  border-radius: 15px;
  border: none;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: green;
  border: 1px solid black;
`;

const App = () => {
  return (
    <Father>
      <Btn as="a">This is btn..</Btn>
      <Input />
      <Input />
      <Input />
    </Father>
  );
};

export default App;
