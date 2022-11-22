import React from 'react';
import styles from './Country.module.scss';

export const Country = ({ country, onSelectCountry }) => {
  const onClick = () => onSelectCountry(country);
  return (
    <li className={styles.card} onClick={onClick}>
      <span>{country.name}</span>
    </li>
  );
};
