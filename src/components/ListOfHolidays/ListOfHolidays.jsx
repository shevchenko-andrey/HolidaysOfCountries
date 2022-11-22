import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { PublicHoliday } from '../PublicHoliday/PublicHoliday';
import styles from './ListOfHolidays.module.scss';

export const ListOfHolidays = ({ holidays }) => {
  const isExistHolidays = useMemo(() => holidays.length > 0, [holidays]);
  if (isExistHolidays) {
    return (
      <ul className={styles.list}>
        {holidays.map(holiday => (
          <PublicHoliday key={`${nanoid()}`} name={holiday.name} />
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
