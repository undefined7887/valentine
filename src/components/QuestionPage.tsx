import React, {useEffect, useRef, useState} from "react";
import Styles from "./QuestionPage.module.scss"
import {classes, randomNumber} from "src/utils";
import {Input} from "src/components/Input";
import {Button} from "src/components/Button";
import {useNavigate, useParams, useRoutes} from "react-router-dom";
import set = gsap.set;
import {animate} from "src/animate";

const QUESTIONS = [
  "5 - 4 = ? (3)",
  "2 + 2 = ? (3)",
  "Второй месяц года? (3)"
]

const ANSWERS = [
  "14 февраля",
  "14 february"
]

export function QuestionPage() {
  let params = useParams<{ name?: string }>();
  let navigate = useNavigate();

  let [question, setQuestion] = useState<string>();

  let questionRef = useRef();

  useEffect(() => {
    setQuestion(QUESTIONS[randomNumber(0, QUESTIONS.length - 1)])
  }, [])

  let answer = "";

  function onButtonClick() {
    if (ANSWERS.includes(answer.toLowerCase())) {
      answerCorrect();
    } else {
      navigate(`/${params.name}/error`)
    }
  }

  function answerCorrect() {
    animate(questionRef.current, 0, {
      opacity: 0,

      duration: 0.2,
      ease: "ease"
    })

    animate(questionRef.current, 200, {
      opacity: 1,

      duration: 0.2,
      ease: "ease"
    })

    setTimeout(setQuestion, 200, "Хм...")
    setTimeout(navigate, 1000, `/${params.name}/result`)
  }

  function onInputValue(value: string) {
    answer = value;
  }

  return (
    <div className={classes(Styles.Page, Styles.Center)}>
      <div>
        <div className={Styles.Text}
             ref={questionRef}>
          {question}
        </div>

        <div className={Styles.Line}>
          <Input onValue={onInputValue}
                 onEnterPress={onButtonClick}/>

          <Button className={Styles.Button}
                  onClick={onButtonClick}/>
        </div>
      </div>
    </div>
  )
}
