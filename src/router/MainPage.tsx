import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import getSurveyApi from "../api/getSurveyApi";
import surveyType from "../types/surveyType";
import H1 from "../components/styles/H1";
import Layout from "../components/styles/Layout";
import Button from "../components/styles/Button";

function MainPage() {
  const { data: surveys } = useQuery("survey", getSurveyApi);

  return (
    <Layout>
      <H1>설문을 입력하시오.</H1>
      {surveys?.map((survey: surveyType) => {
        return (
          <Button key={survey.id} height="50px">
            <Link to={`/${survey.id}`}>{survey.name}</Link>
          </Button>
        );
      })}
    </Layout>
  );
}

export default MainPage;
