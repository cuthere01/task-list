
import styles from "./List.module.css";
import { ListProps } from "./List.props";
import { Task } from '../Task/Task';
import cn from 'classnames';

export const List = ({
    tasks,
    currentFilter,
    className,
    onToggleTaskStatus,
    onDeleteTask,
    ...props
}: ListProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={styles.list} {...props}>
                {tasks.map((task) => (
                    <Task
                        key={task._id}
                        {...task}
                        id={task._id}
                        onToggle={() => onToggleTaskStatus(task._id)}
                        onDelete={() => onDeleteTask(task._id)}
                    ></Task>
                ))}
            </div>
            {tasks.length > 0 ? (
                <p className={styles.info}>
                    {tasks.length} {currentFilter !== "all" && currentFilter}{" "}
                    task
                    {tasks.length > 1 && "s"}
                </p>
            ) : (
                <div className={styles.empty} data-testid="empty-message">
                    No {currentFilter !== "all" && currentFilter} tasks yet
                </div>
            )}
        </div>
    );
};
