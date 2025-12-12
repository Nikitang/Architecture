import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setSount] = useState(0);

    const increment = () => {
        setSount((prev) => prev + 1);
    };
    console.log('styles:', styles);

    return (
        <h1 onClick={increment} className={styles.txt}>
            {count}
        </h1>
    );
};
