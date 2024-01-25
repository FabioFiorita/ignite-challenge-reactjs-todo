import { TaskType } from "../App"
import styles from "./Task.module.css"
import { Circle, CheckCircle, Trash } from "phosphor-react"

interface TaskProps {
    task: TaskType;
    onToggleSelected: (task: TaskType) => void;
    onDelete: (task: TaskType) => void;
}

export function Task({ task, onToggleSelected, onDelete }: TaskProps) {
    function toggleSelected() {
        onToggleSelected(task);
    }

    function deleteTask() {
        onDelete(task)
    }

    return (
        <article className={styles.card}>
            {task.completed ?
                <CheckCircle className={styles.completedCheck} size={24} weight="fill" onClick={toggleSelected} /> :
                <Circle className={styles.check} size={24} onClick={toggleSelected} />}
            <p className={task.completed ? `${styles.paragraph} ${styles.selectedParagraph}` : styles.paragraph}>{task.title}</p>
            <Trash className={styles.trash} size={24} onClick={deleteTask} />
        </article>
    )
}