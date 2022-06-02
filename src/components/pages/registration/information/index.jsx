import React from "react";
import styles from './styles.module.scss'
import classNames from 'classnames';

const InformationData = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <p className={styles.itemText}>Имя <span>*</span></p>
                    <input type="text" placeholder="Имя"/>
                </div>
                <div className={styles.item}>
                    <p className={styles.itemText}>Фамилия <span>*</span></p>
                    <input type="text" placeholder="Фамилия"/>
                </div>
                <div className={styles.item}>
                    <p className={styles.itemText}>Email <span>*</span></p>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className={styles.item}>
                    <p className={styles.itemText}>Телефон</p>
                    <input type="tel" placeholder="Телефон"/>
                </div>
            </div>
            <div className={classNames(styles.itemPassword, styles.itemTextWrapper)}>
                <p className={styles.itemText}>Пароль <span>*</span></p>
                <input type="password" placeholder="*******">
                </input>
                <div className={styles.itemPasswordLogo}/>
            </div>
            <div className={styles.itemPassword}>
                <p className={styles.itemText}>ИНН <span>*</span></p>
                <input type="text" placeholder="ИНН">
                </input>
                <p className={styles.itemPasswordDescription}>Ваша компания уже зарегистрирована, пожалуйста обратитесь к менеджеру вашего аккаунта или
                    <span> напишите нам</span>
                </p>
            </div>
        </>
    )
}

export default InformationData;