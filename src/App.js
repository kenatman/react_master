import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Text = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App = () => {
  return (
    <Wrapper>
      <Text>Hello</Text>
    </Wrapper>
  );
};

export default App;
