import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import getSurveyQuestionApi from "../api/getSurveyQuestionApi";
import { questionType } from "../types/surveyType";
import GenderInput from "../components/GenderInput";
import DateInput from "../components/DateInput";
import SelectInput from "../components/SelectInput";
import LocationInput from "../components/LocationInput";
import Layout from "../components/styles/Layout";

function SurveyPage() {
  const { number } = useParams();
  const { data: questions } = useQuery<undefined | questionType[]>(
    ["survey", number],
    () => getSurveyQuestionApi(Number(number))
  );

  const sendSurveyData = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <Layout>
      <form>
        {questions?.map((question: questionType) => {
          let reactForm: React.ReactNode;
          const { atype } = question.answer[0];

          if (atype === "DATE")
            reactForm = <DateInput key={question.id} question={question} />;
          else if (atype === "SEL" || atype === "TEXT")
            reactForm = <SelectInput key={question.id} question={question} />;
          else if (atype === "GENDER")
            reactForm = <GenderInput key={question.id} question={question} />;
          else if (atype === "LOCATION")
            reactForm = <LocationInput key={question.id} question={question} />;
          return reactForm;
        })}
        <button onSubmit={sendSurveyData}>완료</button>
      </form>
    </Layout>
  );
}

export default SurveyPage;
