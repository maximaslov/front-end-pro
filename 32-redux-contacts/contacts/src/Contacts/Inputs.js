import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveContact } from "../store/actions/contacts";
import { isObjectEmpty } from "../utils";

export default function Inputs() {
  const editedContact = useSelector(state => state.editedContact);
  const [nameValue, setNameValue] = useState('');
  const [lastnameValue, setLastnameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isObjectEmpty(editedContact)){
      setNameValue(editedContact.firstname);
      setLastnameValue(editedContact.lastname);
      setNumberValue(editedContact.number);
    }
  },[editedContact])
  
  function onAddBtnClick() {
      dispatch(saveContact({
      firstname: nameValue,
      lastname: lastnameValue,
      number: numberValue,
      id: editedContact ? editedContact.id : ''
      }));
    
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