import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function List() {
    
  const users = useSelector(state => state);
  const navigate = useNavigate();
    
  function onUserAlbumBtnClick(e, user) {
    e.stopPropagation();

    navigate(`/${user.id}/albums`)
  }

  return (
    <>
        <ul id="usersList">
            {users.map((user) => (
                <li
                key={user.id}
                >
                   {user.name}
                    <div>
                    <button onClick={e => onUserAlbumBtnClick(e, user)}>
                      Album
                    </button>
                    </div>        
                </li>
              ))}
        </ul>
    </>
  );
}