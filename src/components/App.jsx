// import React, { useState, useEffect } from 'react';
import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList';
import { Filter } from './ContactsFilter';
import { Title } from './Title';
import { Main } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     localStorage.removeItem('contacts');
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContacts = contact => {
    const normalizedContact = contact.name.toLowerCase().trim();
    console.log(contacts);
    if (contacts.some(el => el.name === normalizedContact)) {
      alert(`${normalizedContact} is already in contacts!`);
      return;
    }

    dispatch(addContact(contact));
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();
  return (
    <Main>
      <PhonebookForm title="Phonebook" onSubmit={addContacts} />
      <Title title="Contacts"></Title>
      <Filter></Filter>
      <ContactsList
        title="Contacts"
        contacts={visibleContacts}
        onDelete={deleteContacts}
      />
    </Main>
  );
};
