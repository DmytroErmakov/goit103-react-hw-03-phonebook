import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";

import css from "../App/App.module.css";

const loadContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  try {
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  } catch (error) {
    console.error("Faled to parse contacts from localStorage:", error);
    return initialContacts;
  }
};


export default function App() {
  const [contacts, setContacts] = useState(loadContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) => {
    return (
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      {visibleContact.length === 0 && <p>No contacts found</p>}
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
