import React from "react";
import styles from './styles.module.scss'
import InformationData from "./information";

const Registration = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperInfo}>
                <div className={styles.infoContainer}>
                    <p className={styles.infoTitle}>Регистрация</p>
                    <InformationData />
                    <div className={styles.infoDescription}>
                        <p className={styles.itemText}><span>*</span>- обязательные поля</p>
                    </div>
                    <div>
                        <input type="checkbox" id="cb1" />
                            <label htmlFor="cb1" >Да, я хочу получать письма с новостями и предложениями</label>
                    </div>
                    <button className={styles.infoBtn}>Далее</button>
                </div>
            </div>
            <div className={styles.wrapperImgLogo}/>
        </div>
    )
}

export default Registration;