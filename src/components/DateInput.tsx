import React, { useState } from "react";
import styled from "styled-components";
import { questionPropsType } from "../types/questtionPropsType";
import H2 from "./styles/H2";
import P from "./styles/P";
import SurveyLayout from "./styles/SurveyLayout";

const InputStyle = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
  display: block;
  label {
    position: absolute;
    font-size: 0.3rem;
    transform: translate(-11.3rem, -0.1rem);
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.backgroundColor};
  }
  input {
    border-radius: 0.4rem;
    background-color: ${(props) => props.theme.backgroundColor};
    border: rgba(0, 0, 0, 0.1) 0.1rem solid;
    width: 12rem;
    height: 3rem;
    padding: 0rem 1rem;
    &:focus-visible {
      outline: ${(props) => props.theme.mainColor} 0.1rem solid;
    }
  }
`;

function DateInput({ question }: questionPropsType) {
  const questionText = question.q;
  const questionInfo = question.group.name;
  const answer = question.answer;
  const [birthday, setBirthday] = useState("");

  const onChangeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  return (
    <SurveyLayout>
      <P>
        <span dangerouslySetInnerHTML={{ __html: questionInfo }}></span>
      </P>
      <H2>{questionText}</H2>
      <InputStyle>
        <input type="date" value={birthday} onChange={onChangeBirthday} />
        <label htmlFor="userId">{answer[0].a}</label>
      </InputStyle>
    </SurveyLayout>
  );
}

export default DateInput;
