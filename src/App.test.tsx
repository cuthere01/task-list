import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App component", () => {
    it("должен рендерить список задач, фильтры и форму", () => {
        render(<App />);
        
        expect(screen.getByText("Сделать тестовое задание")).toBeInTheDocument();
        expect(screen.getByText("Купить продукты")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("text here...")).toBeInTheDocument();
        
        fireEvent.click(screen.getByText("Active"));
        expect(screen.queryByText("Сделать тестовое задание")).toBeInTheDocument();
        expect(screen.queryByText("Купить продукты")).not.toBeInTheDocument();

        fireEvent.click(screen.getByText("Completed"));
        expect(screen.queryByText("Купить продукты")).toBeInTheDocument();
    });
});