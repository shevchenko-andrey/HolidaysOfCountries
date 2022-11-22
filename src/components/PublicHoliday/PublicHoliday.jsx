import styles from './PublicHoliday.module.scss';

export const PublicHoliday = ({ name }) => (
  <li className={styles.holiday}>
    <span>{name}</span>
  </li>
);
