import { waitFor } from "@testing-library/react";
import { render } from "./testUtils";
import App from "../App";

describe("With React Testing Library", () => {
  it("Snapshot for App component", async () => {
    const { container, getByText } = render(<App />);

    await waitFor(() => getByText("Dashboard Page"));

    expect(container).toMatchSnapshot();
  });
});
