import React from "react";
import styled from "styled-components";
import StyleProps from "../../types/styleProps";

const SurveyLayoutStyle = styled.div`
  margin-bottom: 1rem;
`;

function SurveyLayout({ children }: StyleProps) {
  return <SurveyLayoutStyle>{children}</SurveyLayoutStyle>;
}

export default SurveyLayout;
