import React from "react";
import styled from "styled-components";
import StyleProps from "../../types/styleProps";

interface ButtonProps extends StyleProps {
  height: string;
}

interface ButtonStyleProps {
  height: string;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  width: 100%;
  height: ${(props) => props.height};
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  font-size: 25px;
  border: none;
  box-shadow: 0 4px 4px -4px black;
  border-radius: 10px;
  font-weight: 600;
`;

function Button({ children, height }: ButtonProps) {
  return <ButtonStyle height={height}>{children}</ButtonStyle>;
}

export default Button;
