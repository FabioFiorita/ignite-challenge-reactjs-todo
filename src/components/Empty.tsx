import styles from "./Empty.module.css"
import clipboard from "../assets/clipboard.png"

export function Empty() {
    return (
        <div className={styles.empty}>
            <img src={clipboard} alt="Imagem de uma Prancha de Anotações" />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}