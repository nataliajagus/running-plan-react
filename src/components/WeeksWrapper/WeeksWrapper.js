import React from 'react';
import styles from './WeeksWrapper.module.css';
import Week from '../Week/Week';

const WeeksWrapper = () => (
    <div className={styles.weeks}>
        <Week number="1" />
        <Week number="2" />
        <Week number="3" />
        <Week number="4" />
        <Week number="5" />
        <Week number="6" />
        <Week number="7" />
        <Week number="8" />
        <Week number="9" />
        <Week number="10" />
    </div>
);

export default WeeksWrapper;



