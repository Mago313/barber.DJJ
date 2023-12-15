import React from "react";
import MainLayout from "../layouts/Mainlayout";

import styles from '../styles/pages/DatePage.module.scss'
import { Calendar } from "../components/Calendar";
import { formatDate, getMonthesNames } from "../utils/helpers/date";

console.log(getMonthesNames());


 
const DatePage = () => {
  const [selectedDate, selectDate] = React.useState(new Date())
  return (
    <MainLayout title="Время" isArrow>
      <div className={styles.container}>
      <div className={styles.date__container}>{formatDate(selectedDate, 'DDD DD MMM YYYY')}</div>
        <Calendar locale="ru" selectDate={selectDate} selectedDate={selectedDate}/>
      </div>
    </MainLayout>
  );
};

export default DatePage;

