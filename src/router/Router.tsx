import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SurveyPage from "./SurveyPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:number" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
