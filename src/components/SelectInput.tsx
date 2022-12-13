import React, { useState } from "react";
import { questionPropsType } from "../types/questtionPropsType";
import SurveyLayout from "./styles/SurveyLayout";
import H2 from "./styles/H2";

function SelectInput({ question }: questionPropsType) {
  const answers = question.answer;
  const [checkedArr, setCheckedArr] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [checkedIdx, setCheckedIdx] = useState(
    Array(answers.length).fill(false)
  );
  const checkTheBox = (checked: boolean, name: string, index: number) => {
    checkedIdx[index] = checked;
    setCheckedIdx([...checkedIdx]);
    if (checked) {
      checkedArr.push(name);
      setCheckedArr([...checkedArr]);
    } else {
      const targetIdx = checkedArr.findIndex(
        (element: string) => element === name
      );
      checkedArr.splice(targetIdx, 1);
      setCheckedArr([...checkedArr]);
    }
  };
  return (
    <SurveyLayout>
      <H2>{question.q}</H2>
      {answers.map((answer, index) => {
        if (answer.atype === "SEL")
          return (
            <div key={answer.id}>
              <input
                type="checkbox"
                id={index.toString()}
                name={answer.a}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  checkTheBox(event.target.checked, event.target.name, index)
                }
                checked={checkedIdx[index]}
              />
              <label>{answer.a}</label>
            </div>
          );
        else
          return (
            <div key={answer.id}>
              <input
                type="text"
                placeholder={answer.a}
                value={text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setText(event.target.value)
                }
              />
            </div>
          );
      })}
    </SurveyLayout>
  );
}

export default SelectInput;
