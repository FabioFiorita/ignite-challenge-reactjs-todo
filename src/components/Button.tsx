import styles from "./Button.module.css"
import { PlusCircle } from "phosphor-react"

export function Button() {
    return (
        <button className={styles.button}>
            <span>Criar</span>
            <PlusCircle size={16} />
        </button>
    )
}