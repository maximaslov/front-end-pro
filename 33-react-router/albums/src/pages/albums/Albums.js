import React, { useEffect } from "react";
import List from "./AlbumsList";
import { useDispatch } from "react-redux";
import { fetchList } from "../../store/actions/albums";
import { useParams } from "react-router-dom";

export default function Albums() {
  let { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(userId));
  }, [userId]);
  
  return (
    <>
      <List />
    </>
  )
}