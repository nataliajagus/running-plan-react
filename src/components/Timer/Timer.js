import React from 'react';
import styles from './Timer.module.css';

const Timer = () => (
    <div className={styles.container}>
        <span className={styles.time}>02:29</span>
        <span className={styles.mode}>bieg</span>
    </div>
);

export default Timer;