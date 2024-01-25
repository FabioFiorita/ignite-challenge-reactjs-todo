import { Button } from "./Button"
import { Input } from "./Input"
import styles from "./NewTask.module.css"

export function NewTask() {
    return (
        <div className={styles.wrapper}>
            <Input content="" />
            <Button />
        </div>
    )
}