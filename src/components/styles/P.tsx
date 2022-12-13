import React from "react";
import styled from "styled-components";
import StyleProps from "../../types/styleProps";

const PStyle = styled.p`
  margin: 40px 0px;
`;

function P({ children }: StyleProps) {
  return <PStyle>{children}</PStyle>;
}

export default P;
