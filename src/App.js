import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Anim = keyframes`
0%{transform:rotate(0deg);
border-radius: 0%;
}
50%{
border-radius: 50%;}
100%{transform:rotate(360deg);
border-radius: 0%;}}
`;

const Emoji = styled.span`
  font-size: 50px;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${Anim} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 80px;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>❓</Emoji>
    </Wrapper>
  );
};

export default App;
