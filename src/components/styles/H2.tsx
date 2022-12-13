import React from "react";
import styled from "styled-components";
import StyleProps from "../../types/styleProps";

const H2Style = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.defaultFontSize + 1}px;
  margin-bottom: 8px;
`;

function H2({ children }: StyleProps) {
  return <H2Style>{children}</H2Style>;
}

export default H2;
