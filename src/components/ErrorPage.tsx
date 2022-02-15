import React, {useEffect, useRef, useState} from "react";
import Styles from "./ErrorPage.module.scss"
import {classes, randomNumber} from "src/utils";
import {animate} from "src/animate";
import {useNavigate, useParams} from "react-router-dom";

const TEXTS = [
  "Если бы все было так просто...",
]

export function ErrorPage() {
  let params = useParams<{ name?: string }>();
  let navigate = useNavigate();

  let [text, setText] = useState<string>();

  let pageRef = useRef();
  let textRef = useRef();

  useEffect(() => {
    setText(TEXTS[randomNumber(0, TEXTS.length - 1)])
  }, [])

  useEffect(runAnimation, [])

  function runAnimation() {
    animate(pageRef.current, 0, {
      opacity: 1,

      duration: 0.2,
      ease: "ease"
    })
  }

  function onBackgroundClick() {
    navigate(`/${params.name}`)
  }

  return (
    <div className={classes(Styles.Page, Styles.Background)}
         ref={pageRef}
         onClick={onBackgroundClick}>
      <div className={Styles.Text}
           ref={textRef}>
        {text}

        <div className={Styles.Hint}>
          (Нажми в любое место, чтобы повторить попытку)
        </div>
      </div>
    </div>
  )
}

