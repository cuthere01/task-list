import { render, screen } from "@testing-library/react";
import { Button } from "./Button"; // Импортируем ваш компонент
import "@testing-library/jest-dom";

it("должен рендерить кнопку с переданным текстом", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
});
