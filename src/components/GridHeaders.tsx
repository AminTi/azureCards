import React from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

interface Text {
  text?: string;
}

const Wrapper = styled(Paper)<Text>`
  grid-area: ${(props) => (props.text ? props.text : null)};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const GridHeaders: React.FC<Text> = ({ text }): JSX.Element => {
  return (
    <>
      <Wrapper text={text}>{text}</Wrapper>
    </>
  );
};

export default GridHeaders;
