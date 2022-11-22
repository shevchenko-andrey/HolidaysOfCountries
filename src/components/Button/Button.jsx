import React from 'react';

export const Button = ({ onClick, title, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
};
