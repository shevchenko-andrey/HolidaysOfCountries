import React from 'react';
import styles from './Button.module.scss';
export const Button = ({ onClick, title, type = 'button' }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
