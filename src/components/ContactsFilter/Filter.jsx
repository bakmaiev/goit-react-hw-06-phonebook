import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      <span>Search contacts: </span>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
