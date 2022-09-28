import React, { useEffect } from "react";
import List from "./List";
import Inputs from "./Inputs";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../store/actions/contacts";

export default function Contacts() {
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchList());
  }, []);
  
  return (
    <>
      {loading && <div>Loading...</div>}

      <List />
      <Inputs />
    </>
  )
}