import App from "./App.tsx";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("App", () => {
  it("should render iframe player", () => {
    render(<App />);

    expect(screen.getByTestId("player")).toBeDefined();
  });
});
