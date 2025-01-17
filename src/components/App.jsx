import { nanoid } from 'nanoid';
import Section from './Section/Section';

import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSubmitContact = data => {
    const { name, number } = data;
    const id = nanoid();

    this.setState(prevState => ({
      contacts: [{ id, name, number }, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm handleSubmitContact={this.handleSubmitContact} />
        </Section>
        {this.state.contacts.length !== 0 && (
          <Section title="Contacts">
            <ContactFilter value={this.state.value} onChange={this.onChange} />
            <ContactList
              filteredContacts={filteredContacts}
              handleDeleteContact={this.handleDeleteContact}
            />
          </Section>
        )}
      </div>
    );
  }
}
