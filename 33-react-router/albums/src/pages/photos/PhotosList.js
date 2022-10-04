import React from "react";
import { useSelector } from "react-redux";
import style from "../../App.module.css";

export default function List() {
    
    const photos = useSelector(state => state);
  return (
    <>
      <ul
        id="usersList"
        className={style.photoList}
      >
            {photos.map((photo) => (
                <li className={style.photoItems}
                key={photo.id}
              >
                <div className={style.photoItem}>
                   <h3>{photo.title}</h3>
                  <img src={photo.thumbnailUrl}/>
                </div>
                   
                </li>
              ))}
        </ul>
    </>
  );
}