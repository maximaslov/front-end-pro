import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/counter";

export default function Buttons() {
  const dispatch = useDispatch();

  function onIncBtnClick() {
    dispatch(increment());
  }
  function onDecBtnClick() {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={onIncBtnClick}>Increment</button>
      <button onClick={onDecBtnClick}>Decrement</button>
    </>
  )
}
