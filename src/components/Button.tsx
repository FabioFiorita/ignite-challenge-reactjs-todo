import styles from "./Button.module.css"
import { PlusCircle } from "phosphor-react"

export function Button({
    ...rest
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {

    return (
        <button className={styles.button} {...rest}>
            <span>Criar</span>
            <PlusCircle size={16} />
        </button>
    )
}