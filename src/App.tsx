import { useState } from "react";
import styles from "./App.module.css";
import { Filter, Form } from "./components";
import { List } from "./components/List/List";
import { ITask } from "./interfaces/task";
import { IFilter } from "./interfaces/filter";
import cn from "classnames";
import { nanoid } from 'nanoid';

function App(): JSX.Element {
    const [tasks, setTasks] = useState<ITask[]>([
        { _id: nanoid(), text: "Сделать задание", completed: false },
        { _id: nanoid(), text: "Купить продукты", completed: true },
    ]);

    const [filter, setFilter] = useState<IFilter>("all");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "active") return !task.completed;
        return true;
    });

    const updateTaskStatus = (id: string) => {
        setTasks(
            tasks.map((task) =>
                task._id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const addTask = (text: string) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { _id: nanoid(), text: text, completed: false },
        ]);
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task._id !== id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <List
                    className={cn(styles.box, styles.list)}
                    tasks={filteredTasks}
                    onToggleTaskStatus={updateTaskStatus}
                    onDeleteTask={deleteTask}
                />
                <Filter
                    className={cn(styles.box, styles.filter)}
                    current={filter}
                    changeFilter={setFilter}
                />
                <Form
                    className={cn(styles.box, styles.form)}
                    addText={addTask}
                />
            </div>
        </div>
    );
}

export default App;
