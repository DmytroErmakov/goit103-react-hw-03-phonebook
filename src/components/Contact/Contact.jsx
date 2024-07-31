import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";

import css from "../Contact/Contact.module.css";

export default function Contact({data: {id, name, number}, onDelete}) {
 
  // if (!id || !name || !number) {
  //  return <p>Error: out data</p>
  // }
  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <FaUser className={css.icon} />
        <p className={css.text}>{name}</p>
      </div>
      <div className={css.contactInfo}>
        <FaPhone className={css.icon} />
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
