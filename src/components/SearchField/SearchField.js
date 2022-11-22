import React from 'react';
import styles from './SearchField.module.scss';
export const SearchField = () => {
  return (
    <>
      <label htmlFor="search">Search country</label>
      <input id="search" type="text" />
    </>
  );
};
