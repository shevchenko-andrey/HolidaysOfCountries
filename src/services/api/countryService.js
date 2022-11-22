import axios from 'axios';
import { HOLIDAY_API_SERVICE } from 'constants/api';

export const getCountries = () =>
  axios
    .get(HOLIDAY_API_SERVICE)
    .then(({ data }) => data)
    .catch(error => console.log('Axios error: ', error));
