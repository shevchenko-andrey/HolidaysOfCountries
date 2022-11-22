import { Country } from 'components/Country/Country';
import React from 'react';

export const ListOfCountry = ({ countries }) => {
  return (
    <ul>
      {countries.map(country => (
        <Country key={country.name} name={country.name} />
      ))}
    </ul>
  );
};
