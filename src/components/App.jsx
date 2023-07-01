import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    filter: '',
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      // { id: 'id-5 ', name: 'Michael Silva', number: '645-17-77' },
      // { id: 'id-6', name: 'Jane Austen', number: '227-91-27' },
      // { id: 'id-7', name: 'Michael Silva', number: '645-17-78' },
    ],
  };

  formSubmitHemdler = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };

    this.state.contacts.find(contact => contact.name === name)
      ? window.alert(`${name} is alredy in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        });
  };

  handlerChangeFilter = evt => {
    // this.setState({ name: evt.currentTarget.value });
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value.toLowerCase() });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    // console.log('~ filterContact', filterContact);
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts !== null && parsedContacts.length > 0) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts !== this.state.contacts) {
      // console.log('contacts updated');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterContacts = this.filterContacts();

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHemdler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handlerChangeFilter} />
        <ContactList contacts={filterContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}
