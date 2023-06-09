import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Btn,
  FormInput,
  FormLabel,
  StyledForm,
  StyledFormTitle,
} from './PhonebookForm.styled';
import { nanoid } from 'nanoid';

export const PhonebookForm = ({ title, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
    setId(nanoid());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number, id });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormTitle>{title}</StyledFormTitle>
      <FormLabel>
        <span>Name: </span>
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        <span>Number: </span>
        <FormInput
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Btn type="submit">Add contacts</Btn>
    </StyledForm>
  );
};

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
