import * as React from 'react';

import styles from './App.scss';

export class App extends React.Component {
    public render(): React.ReactNode {
        return <div className={styles.App}>Hello, world!</div>;
    }
}
