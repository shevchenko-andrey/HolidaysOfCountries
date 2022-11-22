import React from 'react';
import { SearchField } from '../SearchField/SearchField';
import { Button } from '../Button/Button';
import styles from './SearchArea.module.scss';
export const SearchArea = ({
  query,
  setQuery,
  isSortingByDescending,
  setIsSortingByDescending,
}) => {
  return (
    <div className={styles.area}>
      <SearchField value={query} onChange={setQuery} />
      {/* #4 Sort button */}
      <Button
        title={isSortingByDescending ? 'DESC' : 'ASC'}
        onClick={() => setIsSortingByDescending(!isSortingByDescending)}
      />
      {/* #5 Reset button */}
      <Button title={'reset'} onClick={() => setQuery('')} />
    </div>
  );
};
