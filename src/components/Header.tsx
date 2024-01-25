import styles from "./Header.module.css"

import rocket from "../assets/rocket.svg"

export function Header() {
    return(
        <header className={styles.header}>
            <img src={rocket} alt="Logotipo da aplicação" />
            <span>to</span>
            <span>do</span>
        </header>
    )
}