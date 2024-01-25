import styles from "./Input.module.css"

interface InputProps {
    content: string;
}

export function Input({ content }: InputProps) {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={content} />
    )
}