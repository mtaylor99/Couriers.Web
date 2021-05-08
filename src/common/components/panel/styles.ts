import { Card, CardProps, styled, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Panel = styled(Card)<Theme, CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3),

  "& hr": {
    opacity: 0.3,
    marginLeft: -theme.spacing(3),
    marginRight: -theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  "& p": {
    fontWeight: 500,
  },
}));

export const PanelFooter = styled("div")<Theme>(({ theme }) => ({
  height: 70,
  display: "flex",
  alignItems: "center",
  marginLeft: -theme.spacing(3),
  marginRight: -theme.spacing(3),
  marginBottom: -theme.spacing(3),
  marginTop: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.structure.light}`,
  paddingLeft: 10,
}));

export const PanelWarning = styled("div")<Theme>(({ theme }) => ({
  padding: "6px 10px",
  fontSize: 14,
  backgroundColor: theme.palette.tertiary.light,
  border: `1px solid ${theme.palette.tertiary.main}`,
  color: theme.palette.tertiary.dark,
  fontWeight: 500,
  borderRadius: 4,
  marginTop: 0,
  marginBottom: 24,

  "& > svg": {
    marginRight: 10,
  },
}));

export const PanelItemWrapper = styled("div")<Theme>(({ theme }) => ({
  margin: `${theme.spacing(2)}px 0px`,
  padding: 0,

  "& > .panel-item-heading": {
    fontSize: 14,
    margin: 0,
    color: theme.palette.info.main,
  },
}));

export const PanelItemContentWrapper = styled("div")<Theme>(() => ({
  fontSize: 18,
  marginTop: 2,
}));

export const PanelItemBelowContentWrapper = styled("div")<Theme>(() => ({
  fontSize: 16,
  marginTop: 2,
}));

export const PanelItemCancelButton = styled(Link)<Theme>(({ theme }) => ({
  padding: "6px 20px",
  backgroundColor: theme.palette.structure.light,
  color: theme.palette.text.hint,
  textDecoration: "none",
  lineHeight: "30px",
  display: "inline-block",
  transition: "all 0.3s ease-in-out",
  borderRadius: 4,

  "&:hover": {
    backgroundColor: theme.palette.structure.main,
    color: theme.palette.common.white,
  },
}));
