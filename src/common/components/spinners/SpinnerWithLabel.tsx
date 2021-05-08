import { CircularProgress, makeStyles, Theme } from "@material-ui/core";

interface ISpinnerWithLabelProps {
  label: string;
  // eslint-disable-next-line react/no-unused-prop-types
  centerScreen?: boolean;
}

const useStyles = makeStyles<Theme, ISpinnerWithLabelProps>(() => ({
  root: {
    marginTop: ({ centerScreen }) => (centerScreen ? "30vh" : ""),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",

    "> *": {
      margin: "20px 0px",
    },
  },
}));

const SpinnerWithLabel = (props: ISpinnerWithLabelProps) => {
  const { label } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <CircularProgress />
      <p>{label}</p>
    </div>
  );
};

export default SpinnerWithLabel;
