import WarningIcon from "@material-ui/icons/Warning";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box, makeStyles, Theme } from "@material-ui/core";
import { LinkButton } from "../buttons";

interface IErrorMessageProps {
  reason?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  centerScreen?: boolean;
  accessError?: boolean;
}

const useStyles = makeStyles<Theme, IErrorMessageProps>((theme) => ({
  root: {
    borderRadius: 4,
    maxWidth: 773,
    margin: "0px auto",
    marginTop: ({ centerScreen }) => (centerScreen ? "30vh" : 0),
    padding: theme.spacing(3),
    backgroundColor: "#f5f5f5",
    border: "1px solid #e7e7e7",
    color: "#1A1C1D",
    textAlign: "center",

    "& > h1": {
      fontSize: "35px",
      lineHeight: "42px",
      color: "inherit",
      fontWeight: 300,
      marginTop: 0,
    },
  },
  icon: {
    textAlign: "center",
    fontSize: "60px",
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 20,
      fontWeight: 500,
      border: `1px solid ${theme.palette.structure.main}`,
      background: theme.palette.common.white,
      color: theme.palette.text.primary,

      "&:hover": {
        background: theme.palette.structure.main,
        color: theme.palette.common.white,
      },
    },
  },
  description: {
    fontSize: "18px",
    lineHeight: "28px",
    color: "#000000",
    fontWeight: 400,
  },
  reason: {
    fontSize: "11px",
    lineHeight: "18px",
    color: "#1A1C1D",
  },
}));

const ErrorMessage = (props: IErrorMessageProps) => {
  const { reason, accessError } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <WarningIcon />
      </div>
      <h1>{accessError ? "You do not have access" : "An error has occured"}</h1>
      <p className={classes.description}>
        {accessError
          ? "You do not currently have permission to access this site. If you believe you should have access please contact The New Homes Group:"
          : "Try refreshing your browser. If the problem persists, please contact TNHG"}
      </p>
      <div className={classes.buttonGroup}>
        <LinkButton href="tel:01206 716 000">
          <PhoneIcon />
          <Box ml={1}>01206 716 000</Box>
        </LinkButton>
        <LinkButton href="mailto:info@tnhg.co.uk">
          <EmailIcon />
          <Box ml={1}>info@tnhg.co.uk</Box>
        </LinkButton>
      </div>
      {reason ? <p className={classes.reason}>{`Reason: ${reason}`}</p> : null}
    </div>
  );
};

export default ErrorMessage;
