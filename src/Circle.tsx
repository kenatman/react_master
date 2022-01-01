import React, { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
      // Null 병합연산자
    />
  );
};

export default Circle;
