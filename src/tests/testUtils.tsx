import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import defaultTheme from "../styles/defaultTheme";
import { testStore } from "./state";

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Provider store={testStore}>
      <ThemeProvider theme={defaultTheme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
