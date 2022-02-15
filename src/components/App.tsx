import React from "react";
import Styles from "./App.module.scss"
import {QuestionPage} from "src/components/QuestionPage";
import {Routes, Route, BrowserRouter,} from "react-router-dom";
import {ErrorPage} from "src/components/ErrorPage";
import {ResultPage} from "src/components/ResultPage";
import {HeartPage} from "src/components/HeartPage";

export function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route path={":name"}>
              <Route path={""} element={<QuestionPage/>}/>
              <Route path={"error"} element={<ErrorPage/>}/>
              <Route path={"result"} element={<ResultPage/>}/>
              <Route path={"heart"} element={<HeartPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
