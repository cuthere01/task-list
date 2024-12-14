import { vi } from "vitest";

vi.mock("*.svg?react", () => ({
    ReactComponent: "svg",
}));
