import { makeStyles } from "@material-ui/core";
import { PropsWithChildren } from "react";
import { PanelItemCancelButton } from "./styles";

interface IPanelFooterActionsProps {
  cancelLink?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    "& > *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const PanelFooterActions = ({
  cancelLink,
  children,
}: PropsWithChildren<IPanelFooterActionsProps>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {cancelLink ? (
          <PanelItemCancelButton to={cancelLink}>Cancel</PanelItemCancelButton>
        ) : null}
      </div>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default PanelFooterActions;
