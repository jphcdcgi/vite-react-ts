import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders h1 and h2 headings", () => {
    render(<App />);
    expect(screen.getByText("ACME YouTube Player")).toBeInTheDocument();
    expect(screen.getByText("Featured Playlist")).toBeInTheDocument();
  });
});
