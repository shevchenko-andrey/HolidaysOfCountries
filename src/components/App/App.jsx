import { useState, useEffect, useMemo, useRef } from 'react';
import { getCountries } from '../../services/api/countryService';
import { getPublicHolidays } from '../../services/api/holidaysService';
import styles from './App.module.scss';
import { ListOfCountry } from '../ListOfCountry/ListOfCountry';
import { ListOfHolidays } from '../ListOfHolidays/ListOfHolidays';
import { sortByDescending } from 'helpers/sortByDescending';
import { filterByQueryString } from 'helpers/filterByQueryString';
import { SearchArea } from 'components/SearchArea/SearchArea';

// >>>>> Instructions:
// Fork the exercises to create your own personal workspace.
// You will need to create an account. The tool is free.

// ToDo:
// #1 Display full list of items fethced from the API.
// #2 Filter fetched items based on 'Search text' input.
// #3 By clicking on country from the 'Search text' need to fetch and display holidays(selectedCountryHolidays) in the selected county.
// Endpoint for holidays: https://date.nager.at/api/v3/NextPublicHolidays/{countryCode}
// #4 Add a Sort button next to the input. It should sort the list of countries that the user sees on the screen in desc or asc order.
// Default order os desc. The name of the button should indicate what type of sorting will be performed when clicked.
// #5 Next to the Sort button, add a Reset button to empty the app
// * You are welcome to edit/refactor any piece of code below if you believe it can be improved or to express your code style.

// Notes:
// Feel free to edit the code base below as you like 👍
// API description: https://date.nager.at/swagger/index.html
// To see your changes click RUN on top menu

// >>>>>>> Coding part goes next <<<<<<<<

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSortingByDescending, setIsSortingByDescending] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountries();
      setCountries(countries);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fetchHolidays = async () => {
      if (!selectedCountry) {
        setHolidays([]);
        return;
      }
      const holidays = await getPublicHolidays(selectedCountry.countryCode);
      setHolidays(holidays);
    };

    fetchHolidays();
  }, [selectedCountry]);

  const filteredCountries = useMemo(() => {
    setSelectedCountry(null);
    return filterByQueryString(countries, query);
  }, [countries, query]);

  const sortedCountries = useMemo(() => {
    const sortedCountries = filteredCountries.sort(sortByDescending);
    return isSortingByDescending ? sortedCountries : sortedCountries.reverse();
  }, [filteredCountries, isSortingByDescending]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>React Test</h1>

        <SearchArea
          setIsSortingByDescending={setIsSortingByDescending}
          isSortingByDescending={isSortingByDescending}
          query={query}
          setQuery={setQuery}
          selectedCountry={selectedCountry}
        />

        <div className={styles.wrapper}>
          <ListOfCountry
            onSelectCountry={setSelectedCountry}
            countries={sortedCountries}
          ></ListOfCountry>

          <ListOfHolidays holidays={holidays} />
        </div>
      </div>
    </main>
  );
};
