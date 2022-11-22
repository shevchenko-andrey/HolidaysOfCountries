import React from 'react';

export const Button = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};
