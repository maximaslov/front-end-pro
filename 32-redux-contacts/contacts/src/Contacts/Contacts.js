import React, { useEffect } from "react";
import List from "./List";
import Inputs from "./Inputs";
import { useDispatch } from "react-redux";
import { fetchList } from "../store/actions/contacts";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);
  
  return (
    <>
      <List />
      <Inputs />
    </>
  )
}