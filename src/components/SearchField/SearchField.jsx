import React from 'react';

export const SearchField = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="search">Search country</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value || '')}
        id="search"
        type="text"
      />
    </>
  );
};
