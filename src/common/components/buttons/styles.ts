import {
  Button,
  ButtonProps,
  darken,
  lighten,
  Link,
  LinkProps,
  styled,
  Theme,
} from "@material-ui/core";

export const PrimaryButton = styled(Button)<Theme, ButtonProps>(
  ({ theme }) => ({
    height: 42,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: "16px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: darken(theme.palette.secondary.main, 0.2),
    },
  })
);

export const SecondaryButton = styled(Button)<Theme, ButtonProps>(
  ({ theme }) => ({
    height: 42,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: "16px",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.structure.main}`,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.palette.structure.main,
      color: theme.palette.common.white,
    },
  })
);

export const LinkButton = styled(Link)<Theme, LinkProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 42,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.structure.light,
  color: theme.palette.text.primary,
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: darken(theme.palette.structure.light, 0.2),
    textDecoration: "none",
  },
}));

export const CallToActionButton = styled(Button)<Theme, ButtonProps>(
  ({ theme }) => ({
    margin: `${theme.spacing(3)} 0`,
    width: "100%",
    height: 70,
    borderRadius: 8,
    fontSize: 18,
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`,
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: darken(theme.palette.primary.main, 0.1),
    },

    "&.Mui-disabled": {
      height: 70,
      background: lighten(theme.palette.primary.main, 0.6),
      color: theme.palette.text.disabled,
    },

    "& .MuiButton-endIcon svg": {
      fontSize: 16,
    },
  })
);

export const ClickableIcon = styled(Button)<Theme, ButtonProps>(
  ({ theme }) => ({
    backgroundColor: "transparent",
    color: theme.palette.common.black,
    cursor: "pointer",
    minWidth: "unset",
    padding: 0,
    fontSize: 16,

    "&:hover": {
      color: darken(theme.palette.primary.main, 0.3),
      backgroundColor: "transparent",
    },
  })
);
