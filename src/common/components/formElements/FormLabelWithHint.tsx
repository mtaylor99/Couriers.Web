import { FormHelperText, FormLabel, makeStyles } from "@material-ui/core";
import { PropsWithChildren } from "react";

interface IFormLabelWithHintProps {
  hint: string;
  htmlFor?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:950px)": {
      display: "block",
    },
  },
  hint: {
    fontSize: 12,
    lineHeight: "14px",
    color: "#686868",
    "@media (max-width:950px)": {
      width: "100%",
      margin: "7px 0 10px",
    },
  },
}));

const FormLabelWithHint = ({
  hint,
  htmlFor,
  children,
}: PropsWithChildren<IFormLabelWithHintProps>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormLabel htmlFor={htmlFor}>{children}</FormLabel>
      <FormHelperText className={classes.hint}>{hint}</FormHelperText>
    </div>
  );
};

export default FormLabelWithHint;
