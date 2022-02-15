import React, {useEffect, useRef} from "react";
import Styles from "./HeartPage.module.scss"
import {classes} from "src/utils";

import HeartSvg from "assets/images/Heart.svg";
import {useParams} from "react-router-dom";
import {animate, enableBlock} from "src/animate";

export function HeartPage() {
  let params = useParams<{ name?: string }>();

  let pageRef = useRef();

  let nameRef = useRef();
  let fromRef = useRef();
  let heartRef = useRef();

  useEffect(() => {
    setTimeout(runAnimation, 100)
  }, [])

  function runAnimation() {
    animate(pageRef.current, 0, {
      width: "50%",

      duration: 0.5,
      ease: "expo.inOut"
    }, () => {
      enableBlock(nameRef)
      enableBlock(fromRef)
      enableBlock(heartRef)
    })

    animate(pageRef.current, 600, {
      // left: "50%",
      width: "100%",

      duration: 0.4,
      ease: "expo.inOut"
    })

    animate(pageRef.current, 800, {
      left: "50%",

      duration: 0.4,
      ease: "expo.inOut"
    })
  }

  return (
    <div className={classes(Styles.Page, Styles.HideOverflow)}>
      <div className={classes(Styles.Page, Styles.Background)}
           ref={pageRef}/>

      <div className={classes(Styles.Text, Styles.Left, Styles.Disabled)}
           ref={nameRef}>
        Кому: {decodeName(params.name)}
      </div>

      <div className={classes(Styles.Text, Styles.Right, Styles.Disabled)}
           ref={fromRef}>
        От кого: undefined7887
      </div>

      <img alt="" className={classes(Styles.Heart, Styles.Disabled)}
           ref={heartRef}
           src={HeartSvg}/>
    </div>
  )
}

function decodeName(encoded: string): string {
  let hex = encoded.toString();
  let result = '';

  for (let n = 0; n < hex.length; n += 2) {
    result += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  return result;
}
