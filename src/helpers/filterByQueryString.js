export const filterByQueryString = (countries, query) =>
  countries.filter(country => country.name.includes(query));
