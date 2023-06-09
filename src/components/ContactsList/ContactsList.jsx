import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem, StyledWrapper } from './ContactsList.styled';
import { Btn } from 'components/PhonebookForm/PhonebookForm.styled';

export const ContactsList = ({ contacts = [], onDelete }) => {
  return (
    <StyledWrapper>
      <ul>
        {Array.isArray(contacts) &&
          contacts.map(contact => {
            return (
              <ContactsItem key={contact.id}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <Btn type="button" onClick={() => onDelete(contact.id)}>
                  Delete
                </Btn>
              </ContactsItem>
            );
          })}
      </ul>
    </StyledWrapper>
  );
};

ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
