import React from "react";
import Styles from "./Button.module.scss"
import {classes} from "src/utils";

interface Props {
  className?: string

  onClick?: () => void
}

export function Button({className, onClick}: Props) {
  return (
    <div className={classes(Styles.Button, Styles.Center, className)}
         onClick={onClick}>
      Далее
    </div>
  )
}
