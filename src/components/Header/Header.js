import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/jogging.svg';

const Header = () => (
    <header className={styles.main_header}>
        <img src={logo} className={styles.jogging_img}/>
        <h2 id="title" className={styles.title}>Runner's 10-Week Training Plan</h2>
    </header> 
);

export default Header;



