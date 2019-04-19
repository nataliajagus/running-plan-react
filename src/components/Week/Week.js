import React from 'react';
import styles from './Week.module.css';

const Week = (props) => (
    <button className={styles.week} id="weekOne"><span className={styles.weekNumber}>{props.number}</span> week</button>
);

export default Week;



