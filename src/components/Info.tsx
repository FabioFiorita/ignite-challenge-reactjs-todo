import { TaskType } from "../App";
import { Counter } from "./Counter"
import styles from "./Info.module.css"

interface InfoProps {
    tasks: TaskType[];
}

export function Info({ tasks }: InfoProps) {
    const createdTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <section className={styles.info}>
            <div>
                <span className={styles.created}>Tarefas criadas</span>
                <Counter count={createdTasks} />
            </div>
            <div>
                <span className={styles.done}>Concluídas</span>
                <Counter count={completedTasks} />
            </div>
        </section>
    )
}