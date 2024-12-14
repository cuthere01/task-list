import { render, screen } from "@testing-library/react";
import { List } from "./List";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("Компонент List", () => {
    const mockToggleTaskStatus = vi.fn();
    const mockDeleteTask = vi.fn();

    const tasks = [
        { _id: "1", text: "Task 1", completed: false },
        { _id: "2", text: "Task 2", completed: true },
    ];

    const renderTask = () =>
        render(
            <List
                tasks={tasks}
                currentFilter={"all"}
                onToggleTaskStatus={mockToggleTaskStatus}
                onDeleteTask={mockDeleteTask}
            />
        );

    it("должен корректно отображать задачи", () => {
        renderTask();

        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    it("должен отображать количество задач", () => {
        renderTask();

        expect(screen.getByText("2 tasks")).toBeInTheDocument();
    });

    it("должен отображать сообщение, если задач нет", () => {
        
		render(
            <List
                tasks={[]}
                currentFilter={"all"}
                onToggleTaskStatus={mockToggleTaskStatus}
                onDeleteTask={mockDeleteTask}
            />
        );

        expect(screen.getByTestId("empty-message")).toBeInTheDocument();
    });

    
});
