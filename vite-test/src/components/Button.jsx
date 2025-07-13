import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.color};
  width: 400px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  display: flex;
  align-items : center;
  justify-content: center;
`;

export function Button({ label, color, buttonhandler}) {
  return <ButtonWrapper color={color} onClick={buttonhandler}>{label}</ButtonWrapper>;
}
