import React from "react";
import styles from './Header.module.css'
export function Header( {title}: {title: string}) {
    
    return (
    <div>
        <header className={styles.wrapper}>
            <div className={styles.headerText}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.headerButtons}>
                <div className={styles.searchBox}>
                    <button className={styles.searchBtn}>
                        <img src="/img/HeaderIcons/magnifying-glass.svg" alt="" />
                    </button>
                    <input type="text" className={styles.searchBar} placeholder="Search for something"/>
                </div>
                <button className={styles.btn}>
                    <img src="/img/HeaderIcons/settings.svg" alt="" />
                </button>
                <button className={styles.btn}>
                    <img src="/img/HeaderIcons/notification.svg" alt="" />
                </button>
                <div className={styles.profileBox}>
                    <img src="/img/HeaderIcons/profile.jpg" alt="" className={styles.profileImg}/>
                </div>
            </div>
        </header>
        <header className={styles.mobileHeader}>
            <div className={styles.main}>
                <div className={styles.headerItems}>
                    <h1 className={styles.title}>{title}</h1>
                    
                    <div className={styles.profileBox}>
                        <img src="/img/HeaderIcons/profile.jpg" alt="" className={styles.profileImg}/>
                    </div>
                </div>

                <div className={styles.searchBox}>
                    <button className={styles.searchBtn}>
                        <img src="/img/HeaderIcons/magnifying-glass.svg" alt="" />
                    </button>
                    <input type="text" className={styles.searchBar} placeholder="Search for something"/>
                </div>
            </div>
        </header>
    </div>
    );
}