import React from "react";
import styles from './App.module.scss';
import Registration from "./components/pages/registration";


function App() {
    return (
        <div className={styles.container}>
            <Registration />
        </div>
    );
}

export default App;
