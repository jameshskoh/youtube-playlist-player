import App from "./App.tsx";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("App", () => {
  it("should render hello world", () => {
    render(<App />);

    expect(screen.getByText(/hello world/i)).toBeDefined();
  });
});
