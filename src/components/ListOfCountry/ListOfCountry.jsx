import { Country } from 'components/Country/Country';
import { useMemo } from 'react';
import styles from './ListOfCountry.module.scss';

export const ListOfCountry = ({ countries, onSelectCountry }) => {
  const isExistCountries = useMemo(() => countries.length > 0, [countries]);
  if (isExistCountries) {
    return (
      <ul>
        {isExistCountries &&
          countries.map(country => (
            <Country
              onSelectCountry={onSelectCountry}
              countryCode={country.countryCode}
              key={country.countryCode}
              name={country.name}
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
