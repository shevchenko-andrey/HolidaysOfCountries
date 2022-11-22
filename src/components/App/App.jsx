import { useState, useEffect } from 'react';
import { getCountries } from '../../services/api/countryService';
import styles from './App.module.scss';
import { ListOfCountry } from 'components/ListOfCountry/ListOfCountry';
import { SearchField } from 'components/SearchField/SearchField';
import { Button } from 'components/Button/Button';

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

/*
  #1 Place component ListItem here and use it in ListItems component below to display items
*/

export const App = () => {
  const [data, setData] = useState([]);
  const [selectedCountryHolidays, setselectedCountryHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      const date = await getCountries();
      setData(date);
    };
    fetchHolidays();
  }, []);

  const onCountyClick = () => {
    // #3 update this function to handle county click and fetch holidays
  };
  return (
    <div class={styles.container}>
      <h1>React Test</h1>
      <div class={styles.body}>
        <div class={styles['search-area']}>
          <section class={styles['search-field']}>
            {/* #2 On the input, filter the countries listed below */}
            <SearchField />
            {/* #4 Sort button */}
            <Button />
            {/* #5 Reset button */}
            <Button />
          </section>
          <ListOfCountry items={data}></ListOfCountry>
        </div>
        <div class={styles['info-area']}>
          {/* #3 display selectedCountryHolidays here */}
        </div>
      </div>
    </div>
  );
};
