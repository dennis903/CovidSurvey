import React from "react";
import styled from "styled-components";
import StyleProps from "../../types/styleProps";

const LayoutStyle = styled.div`
  box-sizing: border-box;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Layout({ children }: StyleProps) {
  return <LayoutStyle>{children}</LayoutStyle>;
}

export default Layout;
