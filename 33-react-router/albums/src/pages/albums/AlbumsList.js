import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function List() {
  const albums = useSelector(state => state);
  const navigate = useNavigate();

  function onAlbumBtnClick(e, album) {
    e.stopPropagation();

    navigate(`/${album.userId}/albums/${album.id}/photos`)
  }
    
  return (
    <>
        <ul id="usersList">
            {albums.map((album) => (
                <li
                key={album.id}
                >
                   {album.title}
                   <button onClick={e => onAlbumBtnClick(e, album)}>
                      Show photos
                    </button>     
                </li>
              ))}
        </ul>
    </>
  );
}