import React from "react";
import styled from "styled-components";
import StyleProps from "../../types/styleProps";

const H1Style = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

function H1({ children }: StyleProps) {
  return <H1Style>{children}</H1Style>;
}

export default H1;
