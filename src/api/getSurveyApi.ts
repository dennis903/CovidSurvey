import axios from "axios";
import surveyType from "../types/surveyType";

const getSurveyApi = async () => {
  const data: surveyType[] = await axios
    .get("http://localhost:4000/posts")
    .then(({ data }) => {
      return data;
    });

  return data;
};

export default getSurveyApi;
