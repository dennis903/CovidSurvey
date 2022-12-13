import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { questionPropsType } from "../types/questtionPropsType";
import H2 from "./styles/H2";
import SurveyLayout from "./styles/SurveyLayout";

interface InputLayoutProps {
  checked: boolean;
}

const GenderInputLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputLayout = styled.div<InputLayoutProps>`
  width: 30vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    !props.checked ? "rgba(0, 0, 0, 0.05)" : `${props.theme.mainColor}`};
  color: ${(props) => (!props.checked ? "black" : "white")};
  border-radius: 10px;
  margin-right: 0.7rem;
  font-weight: ${(props) => props.theme.fontWeight};
  input {
    display: none;
  }
`;

function GenderInput({ question }: questionPropsType) {
  const questionText = question.q;
  const answers = question.answer;
  const [gender, setGender] = useState("남성");
  const [checkedArr, setCheckedArr] = useState(Array(2).fill(false));

  const onChangeGender = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const checked = event.target.checked;
    setGender(event.target.value);
    setCheckedArr(
      checkedArr.map((e: boolean, i: number) => {
        if (i === index) return true;
        else return false;
      })
    );
  };

  return (
    <SurveyLayout>
      <H2>{questionText}</H2>
      <GenderInputLayout>
        {answers.map((answer, index) => {
          return (
            <InputLayout key={answer.id} checked={checkedArr[index]}>
              <input
                id={answer.a}
                name="gender"
                checked={checkedArr[index]}
                value={gender}
                type="radio"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChangeGender(event, index)
                }
              />
              <label htmlFor={answer.a}>{answer.a}</label>
            </InputLayout>
          );
        })}
      </GenderInputLayout>
    </SurveyLayout>
  );
}

export default GenderInput;
