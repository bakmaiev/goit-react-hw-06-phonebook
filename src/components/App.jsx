import React, { useState, useEffect } from 'react';
import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList';
import { Filter } from './ContactsFilter';
import { Title } from './Title';
import { Main } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem('contacts');
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.some(el => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContact = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();
  return (
    <Main>
      <PhonebookForm title="Phonebook" onSubmit={addContact} />
      <Title title="Contacts"></Title>
      <Filter filter={filter} onChange={filterContact}></Filter>
      <ContactsList
        title="Contacts"
        contacts={visibleContacts}
        onDelete={deleteContact}
      />
    </Main>
  );
};
