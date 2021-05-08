import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import DropdownIcon from "../common/components/DropdownIcon";
import {
  workSansBold,
  workSansLight,
  workSansMedium,
  workSansRegular,
  workSansSemiBold,
  workSansThin,
} from "../common/fonts";
import mixins from "./mixinValues";

const defaultTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "antialiased",
        },
        strong: {
          fontWeight: 600,
        },
        "@font-face": [
          workSansBold as any,
          workSansLight as any,
          workSansMedium as any,
          workSansRegular as any,
          workSansSemiBold as any,
          workSansThin as any,
        ],
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        transition: "all 0.2s ease-in-out",
      },
    },
  },
  typography: {
    fontFamily: "Work Sans",
    fontSize: 16,
    h1: {
      fontSize: 30,
      fontWeight: 400,
    },
    h2: {
      fontSize: 20,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: 24,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: 24,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    h4: {
      fontSize: 14,
      fontWeight: 400,
      marginBottom: 4,
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 24,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#F3F2F3",
    },
    primary: {
      main: "#327A7F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#BF8651",
      contrastText: "#fff",
    },
    tertiary: {
      main: "#6A8A99",
      light: "#DEE5EA",
      dark: "#395664",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#D58315",
      contrastText: "#fff",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#636363",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    structure: {
      main: "#1A1A1A",
      dark: "#000",
      light: "#dddddd",
      contrastText: "#fff",
    },
    action: {
      disabledBackground: "#444",
      disabled: "#fffa",
    },
  },
  mixins,
  props: {
    MuiFormControl: {
      variant: "outlined",
    },
    MuiButton: {
      disableElevation: true,
      variant: "contained",
    },
    MuiSelect: {
      IconComponent: DropdownIcon,
    },
  },
});

export default defaultTheme;
