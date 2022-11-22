import React from 'react';
import styles from './Country.module.scss';

export const Country = ({ name, countryCode, onSelectCountry }) => {
  const onClick = () => onSelectCountry(countryCode);
  return (
    <li className={styles.card} onClick={onClick}>
      <span>{name}</span>
    </li>
  );
};
