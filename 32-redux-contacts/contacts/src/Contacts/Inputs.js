import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveContact } from "../store/actions/contacts";

export default function Inputs() {

  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState('');
  const [lastnameValue, setLastnameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  function onAddBtnClick() {

    const newContat = {
        "firstname": nameValue,
        "lastname": lastnameValue,
        "number": numberValue,
        "id": '',
        } 

    dispatch(saveContact(newContat));
    setNameValue('');
    setLastnameValue('');
    setNumberValue('');
  }

  return (
    <>
      <input
        value={nameValue}
        placeholder="enter firsname"
        onChange={e => setNameValue(e.target.value)
        }
      />
      <input
        value={lastnameValue}
        placeholder="enter lastname"
        onChange={e => setLastnameValue(e.target.value)}
      />
      <input
        value={numberValue}
        placeholder="enter phone number"
        onChange={e => setNumberValue(e.target.value)}
      />
      <button onClick={onAddBtnClick}>Add</button>
    </>
  )
}