import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { Task } from "./Task";

vi.mock("*.svg?react", () => ({
    ReactComponent: "svg",
}));

describe("Компонент Task", () => {
    const mockOnToggle = vi.fn();
    const mockOnDelete = vi.fn();

    const renderTask = () =>
        render(
            <Task
                _id="1"
                text="Тестовая задача"
                completed={false}
                onToggle={mockOnToggle}
                onDelete={mockOnDelete}
            />
        );

    it("Отображает текст задачи", () => {
        renderTask();
        expect(screen.getByText("Тестовая задача")).toBeInTheDocument();
    });

    it("Вызывает onToggle при клике на кнопку переключения", () => {
        renderTask();
        fireEvent.click(screen.getByTestId("mark"));
        expect(mockOnToggle).toHaveBeenCalledTimes(1);
    });

    it("Вызывает onDelete при клике на кнопку удаления", () => {
        renderTask();
        fireEvent.click(screen.getByRole("button", { name: /delete/i }));
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });
});
