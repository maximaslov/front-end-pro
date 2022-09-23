import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { set } from "../store/actions/counter";

export default function Input() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  function onSetBtnClick() {
    dispatch(set(Number(value)));
  }

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={onSetBtnClick}>Set</button>
    </>
  )
}