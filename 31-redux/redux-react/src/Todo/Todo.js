import React from "react";
import List from "./List";
import Input from "./Input";
import { useSelector } from "react-redux";

export default function Todo() {
  const loading = useSelector(state => state.loading);

  return (
    <>
      {loading && <div>Loading...</div>}

      <List />
      <Input />
    </>
  )
}


 