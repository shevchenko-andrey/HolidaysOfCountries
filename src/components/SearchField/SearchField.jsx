import React from 'react';

export const SearchField = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="search">Search country</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value || console.log(e.target))}
        id="search"
        type="text"
      />
    </>
  );
};
