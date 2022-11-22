import { Country } from 'components/Country/Country';
import { useMemo } from 'react';
import styles from './ListOfCountry.module.scss';

export const ListOfCountry = ({ countries, onSelectCountry }) => {
  const isExistCountries = useMemo(() => countries.length > 0, [countries]);
  if (isExistCountries) {
    return (
      <ul className={styles.list}>
        {isExistCountries &&
          countries.map(country => (
            <Country
              onSelectCountry={onSelectCountry}
              country={country}
              key={country.countryCode}
            />
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
