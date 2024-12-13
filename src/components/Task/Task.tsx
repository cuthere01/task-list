import cn from "classnames";
import styles from "./Task.module.css";
import { TaskProps } from "./Task.props";
import MarkIcon from "./mark.svg?react";

export const Task = ({
    text,
    completed,
    onToggle,
    className,
    ...props
}: TaskProps): JSX.Element => {
    return (
        <div
            className={cn(styles.task, className, {
                [styles.completed]: completed,
                [styles.active]: !completed,
            })}
            {...props}
        >
            <button className={styles.mark} onClick={onToggle}>
                <MarkIcon/>
            </button>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
