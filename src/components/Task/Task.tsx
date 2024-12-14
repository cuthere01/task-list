import cn from "classnames";
import styles from "./Task.module.css";
import { TaskProps } from "./Task.props";
import { Button } from '../Button/Button';

export const Task = ({
    text,
    completed,
    onToggle,
    onDelete,
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
            <button
                className={styles.mark}
                onClick={onToggle}
                data-testid="mark"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.8 8.3999L9.64043 15.5999L7 13"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <p className={styles.text}>{text}</p>
            <Button
                size="s"
                onClick={onDelete}
                notice
                className={styles.notice}
            >
                Delete
            </Button>
        </div>
    );
};
