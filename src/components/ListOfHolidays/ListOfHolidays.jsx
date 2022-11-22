import { useMemo } from 'react';
import { PublicHoliday } from '../PublicHoliday/PublicHoliday';
import styles from './ListOfHolidays.module.scss';

export const ListOfHolidays = ({ holidays }) => {
  const isExistHolidays = useMemo(() => holidays.length > 0, [holidays]);
  if (isExistHolidays) {
    return (
      <ul>
        {holidays.map(holiday => (
          <PublicHoliday key={holiday.name} name={holiday.name} />
        ))}
      </ul>
    );
  }

  return (
    <p className={styles.feedback}>
      To see the holidays first choose the country
    </p>
  );
};
