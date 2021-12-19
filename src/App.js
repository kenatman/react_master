import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
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
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${Anim} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 50px;

    &:hover {
      font-size: 80px;
    }
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Box>
        <span>😍</span>
      </Box>
    </Wrapper>
  );
};

export default App;
