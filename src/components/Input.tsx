import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import Styles from "./Input.module.scss"
import set = gsap.set;

interface Props {
  onValue?: (value: string) => void;
  onEnterPress?: () => void;
}

export function Input({onValue, onEnterPress}: Props) {
  let [value, setValue] = useState<string>("");

  let inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;

    setValue(value);
    onValue?.(value);
  }

  function onKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      onEnterPress?.();
    }
  }

  return (
    <div className={Styles.Input}>
      <input className={Styles.InputElement}
             ref={inputRef}
             placeholder={"Ответ..."}
             value={value}
             onChange={onChange}
             onKeyPress={onKeyPress}/>
    </div>
  )
}
