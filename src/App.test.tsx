import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders welcome text", () => {
    render(<App />);
    expect(screen.getByText("ACME YouTube Player")).toBeInTheDocument();
    expect(screen.getByText("Featured Playlist")).toBeInTheDocument();
  });
});
