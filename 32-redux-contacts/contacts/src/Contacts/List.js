import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, edit} from "../store/actions/contacts";
import styles from "./List.module.css"

export default function List() {
  const contacts = useSelector(state => state.list);
  const dispatch = useDispatch();

  function onDelBtnClick(e, contact) {
    e.stopPropagation();

    dispatch(remove(contact.id));
  };

  function onEditBtnClick(e, contact) {
    e.stopPropagation();
    console.log(contact.id+1)
    
    dispatch(edit(contact));
  }

  return (
      <>
          <ul className={styles.contactList} id="todoList">
              {contacts.map((contact) => (
                  <li
                    key={contact.id}
                      className={styles.contactItem}
                >
                    <p key={contact.id + 1} className="first-name contact-item">{contact.firstname}</p>
                    <p key={contact.id+2} className="last-name contact-item">{contact.lastname}</p>
                    <p key={contact.id+3} className="phone-number contact-item">{contact.number}</p>
                    <div className={styles.buttons}>
                        <button key={contact.id+4} className={`${styles.btn} ${styles.contactEditBtn}`} onClick={e => onEditBtnClick(e, contact)}>Edit</button>
                        <button key={contact.id+5} className={`${styles.btn} ${styles.contactEditBtn}`} onClick={e => onDelBtnClick(e, contact)}>Delete</button>
                    </div>  
                    
                  </li>
              ))}
        </ul>
    </>
  );
}