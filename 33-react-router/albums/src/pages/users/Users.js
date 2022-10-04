import React, { useEffect } from "react";
import List from "./UsersList";
import { useDispatch } from "react-redux";
import { fetchList } from "../../store/actions/users";

export default function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);
  
  return (
    <>
      <List />
    </>
  )
}