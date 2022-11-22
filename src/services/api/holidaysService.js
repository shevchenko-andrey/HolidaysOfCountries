import axios from 'axios';
import { HOLIDAY_API_SERVICE } from '../../constants/api';

export const getPublicHolidays = selectedCountry =>
  axios
    .get(`${HOLIDAY_API_SERVICE}/${selectedCountry}`)
    .then(({ data }) => data)
    .catch(error => console.log('Axios error: ', error));
