import { render, screen, fireEvent } from "@testing-library/react";
import { Filter } from "./Filter";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("Filter component", () => {
    const mockChangeFilter = vi.fn();

    it("должен отображать кнопки с правильным текстом", () => {
        render(<Filter current="all" changeFilter={mockChangeFilter} />);
		
        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getByText("Active")).toBeInTheDocument();
        expect(screen.getByText("Completed")).toBeInTheDocument();
    });

    it("должен вызывать changeFilter с правильным аргументом при клике", () => {
        render(<Filter current="all" changeFilter={mockChangeFilter} />);

        fireEvent.click(screen.getByText("Active"));
        expect(mockChangeFilter).toHaveBeenCalledWith("active");
        fireEvent.click(screen.getByText("Completed"));
        expect(mockChangeFilter).toHaveBeenCalledWith("completed");
    });
});
