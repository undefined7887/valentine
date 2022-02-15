import React, {useEffect, useRef} from "react";
import Styles from "./ResultPage.module.scss"
import {classes} from "src/utils";
import {useNavigate, useParams} from "react-router-dom";
import {animate} from "src/animate";


const TEXTS = [
  "Ладно, ладно, я сдаюсь",
  "Эта загадака была слишком простой",
  "Что ж, тогда...",
  "Небольшой подарочек от меня",
  ":)"
]

const TEXT_DURATION = 2000

export function ResultPage() {
  let navigate = useNavigate();
  let params = useParams<{ name?: string }>();

  let pageRef = useRef();
  let textRef = useRef<HTMLDivElement>();

  useEffect(runTextAnimation, [])

  function runTextAnimation() {
    let pageAnimationDuration = 700;

    animate(pageRef.current, 0, {
      width: "100%",

      duration: 0.7,
      ease: "expo.inOut"
    })

    for (let i = 0; i < TEXTS.length; i++) {
      animate(document.getElementById(`text_${i}`), pageAnimationDuration + i * TEXT_DURATION, {
        opacity: 1,

        duration: 0.3,
        ease: "ease"
      })
    }

    setTimeout(() => {
      animate(textRef.current, 0, {
        opacity: 0,

        duration: 0.3,
        ease: "ease"
      }, () => {
        navigate(`/${params.name}/heart`)
      })
    }, pageAnimationDuration + TEXTS.length * TEXT_DURATION);
  }

  return (
    <div className={classes(Styles.Page, Styles.Background)}
         ref={pageRef}>

      <div className={Styles.Text}
           ref={textRef}>
        {
          TEXTS.map((text, index) => (
            <div key={`text_${index}`} className={Styles.TextItem} id={`text_${index}`}>
              {text}
            </div>
          ))
        }
      </div>
    </div>
  )
}
