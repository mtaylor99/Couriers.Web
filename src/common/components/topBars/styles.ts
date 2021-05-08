import { AppBar, AppBarProps, styled, Theme } from "@material-ui/core";

export const DefaultTopBarAppBar = styled(AppBar)<Theme, AppBarProps>(
  ({ theme }) => ({
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.common.black,
    flexDirection: "row",
  })
);

export const DefaultTopBarIconWrapper = styled("div")<Theme>(({ theme }) => ({
  width: 150,
  height: "100%",
  backgroundColor: theme.palette.common.black,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 24,
  marginRight: 60,

  "& a": {
    display: "inline-block",
    height: 37,
  },
}));

export const DefaultTopBarLinkWrapper = styled("div")<Theme>(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  width: "auto",
  fontSize: 12,

  "& a": {
    padding: "8px 30px",
    fontWeight: 500,
    fontSize: 16,
    height: 45,
    lineHeight: "19px",
    textAlign: "center",
  },
}));

export const DefaultTopBarAddress = styled("div")<Theme>(({ theme }) => ({
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  width: "auto",
  fontSize: 16,
  marginRight: "auto",

  "& svg": {
    padding: "0 20px 0 0",
    width: "auto !important",
    fontWeight: 100,
    fontSize: 16,
    height: 20,
    lineHeight: "45px",
  },
}));
