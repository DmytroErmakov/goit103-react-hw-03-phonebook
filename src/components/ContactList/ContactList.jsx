import Contact from "../Contact/Contact";

import css from "../ContactList/ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  if (!Array.isArray(contacts)) {
    return <p>No contact available.</p>
  }
  
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
