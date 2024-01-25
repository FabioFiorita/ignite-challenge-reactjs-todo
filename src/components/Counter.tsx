import styles from "./Counter.module.css"

interface CounterProps {
    count: number;
}

export function Counter({ count }: CounterProps) {
    return (
        <span className={styles.counter}>{count}</span>
    )
}