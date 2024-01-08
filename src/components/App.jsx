import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import * as s from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filterValue: '',
  };

  handleAddProfile = formData => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === formData.name
    );

    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    const newProfile = { ...formData, id: nanoid() };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newProfile],
    }));
  };

  inputId = nanoid();

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filterValue: e.target.value });
  };

  searchContact = () => {
    const { contacts, filterValue } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('update');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <s.Container>
        <h1>Phonebook</h1>
        <ContactForm handleAddProfile={this.handleAddProfile} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filterValue}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          users={this.searchContact()}
          deleteContact={this.deleteContact}
        />
      </s.Container>
    );
  }
}
