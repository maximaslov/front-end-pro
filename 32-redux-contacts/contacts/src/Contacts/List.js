import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/actions/contacts";
import styles from "./List.module.css"

export default function List() {
  const contacts = useSelector(state => state);

  const dispatch = useDispatch();

  function onDelBtnClick(e, contact) {
    e.stopPropagation();

    dispatch(remove(contact.id));
  };

  function onEditBtnClick(e, contact) {
    e.stopPropagation();

    console.log(contact);
  }

  return (
      <>
          <ul className={styles.contactList} id="todoList">
              {contacts.map((contact) => (
                  <li
                    key={contact.id}
                      className={styles.contactItem}
                >
                    <p className="first-name contact-item">{contact.firstname}</p>
                    <p className="last-name contact-item">{contact.lastname}</p>
                    <p className="phone-number contact-item">{contact.number}</p>
                    <div className={styles.buttons}>
                        <button className={`${styles.btn} ${styles.contactEditBtn}`} onClick={e => onEditBtnClick(e, contact)}>Edit</button>
                        <button className={`${styles.btn} ${styles.contactEditBtn}`} onClick={e => onDelBtnClick(e, contact)}>Delete</button>
                    </div>  
                    
                  </li>
              ))}
        </ul>
    </>
  );
}