import React, { useEffect } from "react";
import List from "./PhotosList";
import { useDispatch } from "react-redux";
import { fetchList } from "../../store/actions/photos";
import { useParams } from "react-router-dom";

export default function Photos() {
  let { albumId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(albumId));
  }, [albumId]);
  
  return (
    <>
      <List />
    </>
  )
}