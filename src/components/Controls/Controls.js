import React from 'react';
import styles from './Controls.module.css';

const Controls = () => (
    <>
        <button id="start" type="button" className={styles.start}>START</button>
        <button id="stop" type="button" disabled class={styles.stop}>STOP</button>
    </>
);

export default Controls;



