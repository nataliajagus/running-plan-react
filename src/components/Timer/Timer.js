import React, { Component } from 'react';
import styles from './Timer.module.css';

class Timer extends Component {

    state = {
        isRunning: false,
        isWalking: false,
        isWalkingStoped: false,
        runCounter: 0,
        numberOfRounds: 0,
        runTimeLeft: 0,
        walkTimeLeft: 0
    }

    render () {
        <div className={styles.container}>
            <span className={styles.time}>02:29</span>
            <span className={styles.mode}>bieg</span>
        </div>
    }

    convertSeconds = (s) => {
        var min = Math.floor(s / 60);
        var sec = s % 60;
        if (min < 10 && sec < 10) {
            return '0' + min + ':0' + sec;
        } else if (min > 10 && sec < 10) {
            return min + ':0' + sec;
        } else if (min < 10 && sec >= 10) {
            return '0' + min + ':' + sec;
        } else {
            return min + ':' + sec;
        }
    }

}

export default Timer;
