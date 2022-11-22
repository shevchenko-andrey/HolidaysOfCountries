import { Country } from 'components/Country/Country';
import { useMemo } from 'react';
import styles from './CountriesList.module.scss';

export const ListOfCountry = ({ countries }) => {
  const isExistCountries = useMemo(() => countries.length > 0, [countries]);
  if (isExistCountries) {
    return (
      <ul>
        {isExistCountries &&
          countries.map(country => (
            <Country key={country.name} name={country.name} />
          ))}
      </ul>
    );
  }

  return (
    <p className={styles.feedback}>
      No countries according to such a filter were found
    </p>
  );
};
