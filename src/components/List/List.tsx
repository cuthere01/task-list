
import styles from "./List.module.css";
import { ListProps } from "./List.props";
import { Task } from '../Task/Task';

export const List = ({
    tasks,
    onToggleTaskStatus,
    ...props
}: ListProps): JSX.Element => {
    return (
        <div className={styles.list} {...props}>
            {tasks.map((task) => (
                <Task
                    key={task._id}
                    {...task}
                    id={task._id}
                    onToggle={() => onToggleTaskStatus(task._id)}
                ></Task>
            ))}
        </div>
    );
};
