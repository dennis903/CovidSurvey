import { questionType } from "./../types/surveyType";
import axios from "axios";
import surveyType from "../types/surveyType";

const getSurveyQuestionApi = async (number: number) => {
  const question: questionType[] = await axios
    .get("http://localhost:4000/posts")
    .then(({ data: surveys }) => {
      const { question } = surveys.filter(
        (survey: surveyType) => survey.id === number
      )[0];
      return question;
    });
  return question;
};

export default getSurveyQuestionApi;
