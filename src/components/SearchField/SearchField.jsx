import React from 'react';
import styles from './SearchField.module.scss';
export const SearchField = ({ onChange, value }) => {
  return (
    <div className={styles.field}>
      <label htmlFor="search">Search country</label>
      <input
        className={styles.input}
        value={value}
        onChange={e => onChange(e.target.value || '')}
        id="search"
        type="text"
      />
    </div>
  );
};
