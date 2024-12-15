import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "./Form";
import { vi } from "vitest";

describe("Форма", () => {
    const renderTask = () => render(<Form addText={vi.fn()} />);
    const input = () => screen.getByPlaceholderText("text here...");

    it("должна отображаться корректно", () => {
        renderTask();

        expect(input()).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /add task/i })
        ).toBeInTheDocument();
    });

    it("должна обновлять значение при вводе текста", () => {
        renderTask();

        fireEvent.change(input(), { target: { value: "Тест" } });
        expect(input()).toHaveValue("Тест");
    });

    it("должна показывать ошибку, если текст пустой", () => {
        const { container } = renderTask();

        fireEvent.change(input(), { target: { value: "" } });

        const form = container.querySelector("form");
        if (form) {
            fireEvent.submit(form);
        }

        expect(
            screen.getByText("Текст не должен быть пустым")
        ).toBeInTheDocument();
    });

    it("должна показывать ошибку, если текст слишком длинный", () => {
        const { container } = renderTask();

        fireEvent.change(input(), { target: { value: "a".repeat(101) } });

        const form = container.querySelector("form");
        if (form) {
            fireEvent.submit(form);
        }

        expect(
            screen.getByText("Текст не должен превышать 100 символов")
        ).toBeInTheDocument();
    });

    it("должна вызывать addText при правильном вводе", () => {
        const addTextMock = vi.fn();
        const { container } = render(<Form addText={addTextMock} />);

        fireEvent.change(input(), { target: { value: "Тестовое задание" } });

        const form = container.querySelector("form");
        if (form) {
            fireEvent.submit(form);
        }

        expect(addTextMock).toHaveBeenCalledWith("Тестовое задание");
    });
});
