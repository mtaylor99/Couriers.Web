import {
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  styled,
  Theme,
} from "@material-ui/core";

export const FooterWrapper = styled(Container)<Theme, ContainerProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),

    "@media (max-width: 950px)": {
      display: "block",
    },
  })
);

export const CopyrightWrapper = styled("div")<Theme>(({ theme }) => ({
  color: theme.palette.text.hint,
  fontSize: 14,
  paddingLeft: theme.spacing(2),

  "@media (max-width: 950px)": {
    width: "100%",
  },
}));

export const FooterLinkWrapper = styled("div")<Theme>(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  width: "auto",
  fontSize: 14,

  "@media (max-width: 950px)": {
    width: "100%",
  },

  "& *": {
    textTransform: "none",
  },
}));

export const FooterLinkDivider = styled("span")<Theme>(() => ({
  margin: "0px 10px",
}));

export const FooterLink = styled(Button)<Theme, ButtonProps>(() => ({
  background: "transparent",
  textDecoration: "underline",
  color: "inherit",
  fontSize: "inherit",

  "&:hover": {
    background: "inherit",
    textDecoration: "underline",
  },
}));
