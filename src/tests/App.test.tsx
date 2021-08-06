import { waitFor } from "@testing-library/react";
import { render } from "./testUtils";
import mockFetch from "./mockFetch";
import App from "../App";

describe("With React Testing Library", () => {
  it("Loading", async () => {
    const { getByText } = render(<App />);

    const textNode = await waitFor(() => getByText("Loading"));
    expect(textNode).not.toBeNull();
  });

  it("Dashboard", async () => {
    const { getByText } = render(<App />);

    const textNode = await waitFor(() => getByText("Dashboard Page"));
    expect(textNode).not.toBeNull();
  });
});

beforeAll(() => jest.spyOn(window, "fetch"));
beforeEach(() => (window.fetch as jest.Mock).mockImplementation(mockFetch));
