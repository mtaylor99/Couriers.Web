import { styled, Theme } from "@material-ui/core";

export const WithPageLifecycleWrapper = styled("div")<Theme>(() => ({
  width: "100%",
}));

export const PageComponentWrapper = styled("div")<Theme>(() => ({
  width: "100%",
  display: "block",

  "&.page-hidden": {
    display: "none",
  },
}));
