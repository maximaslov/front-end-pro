import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";
import Input from "./Input";

export default function Counter() {
  const counts = useSelector(state => state.counts);

  return (
    <>
      <div>
        Counts: {counts}
      </div>
      <div>
        <Buttons />
      </div>
      <div>
        <Input />
      </div>
    </>
  );
}