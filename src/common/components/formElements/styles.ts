/* eslint-disable import/prefer-default-export */
import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormControlProps,
  OutlinedInput,
  OutlinedInputProps,
  Select,
  SelectProps,
  Slider,
  styled,
  Theme,
} from "@material-ui/core";
import { DatePicker, DatePickerProps } from "@material-ui/pickers";

export const FormInputWrapper = styled(FormControl)<Theme, FormControlProps>(
  ({ theme }) => ({
    width: "100%",
    margin: `0 0 ${theme.spacing(4)}px 0`,

    "& label": {
      marginBottom: 15,
      fontSize: 16,
      fontWeight: 500,
    },

    "& input": {
      padding: 0,
      borderRadius: 4,
    },

    "& .MuiOutlinedInput-adornedStart": {
      "& input": {
        paddingLeft: 8,
      },
    },

    "& .MuiOutlinedInput-adornedEnd": {
      "& input": {
        paddingRight: 8,
      },
    },
  })
);

export const TextInput = styled(OutlinedInput)<Theme, OutlinedInputProps>(
  ({ fullWidth, multiline }) => ({
    height: !multiline ? 48 : undefined,
    maxWidth: !fullWidth ? 500 : undefined,
    border: "1px solid #B3B3B3",
    padding: 10,
    lineHeight: "28px",
    boxShadow: "inset 0 2px 2px 0 rgba(0,0,0,0.1)",

    "& fieldset": {
      border: 0,
    },

    "&:hover": {
      borderColor: "#8B9197",
    },

    "&:focus": {
      borderColor: "#6C757D",
    },
  })
);

export const StyledDatePicker = styled(DatePicker)<Theme, DatePickerProps>(
  ({ fullWidth, theme }) => ({
    maxWidth: !fullWidth ? 200 : undefined,
    "& input": {
      height: 48,
      paddingLeft: theme.spacing(1),
    },
  })
);

export const SelectInput = styled(Select)<Theme, SelectProps>(() => ({
  height: 48,
  maxWidth: 500,
  border: "1px solid #B3B3B3",
  padding: 0,
  lineHeight: "28px",
  position: "relative",
  top: 0,
  boxShadow: "inset 0 2px 2px 0 rgba(0,0,0,0.1)",

  "& .MuiSelect-root": {
    padding: "10px 28px 10px 10px",
  },

  "& svg": {
    position: "absolute",
    top: "50%",
    right: 12,
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },

  "& fieldset": {
    border: 0,
  },

  "&:hover": {
    borderColor: "#8B9197",
  },

  "&:focus": {
    borderColor: "#6C757D",
  },
}));

export const LargeFormControlLabel = styled(FormControlLabel)<
  Theme,
  FormControlLabelProps
>(({ theme, checked }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 187,
  height: 68,
  marginLeft: 0,
  marginRight: 20,
  marginBottom: 20,
  padding: 25,
  border: 0,
  borderRadius: 4,
  fontSize: 16,
  fontWeight: 500,
  backgroundColor: checked ? `${theme.palette.primary.main}` : "#f2f2f2",
  color: checked ? "white" : `${theme.palette.text.primary}`,
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: checked ? `${theme.palette.primary.main}` : "#ebebeb",
  },

  "& > .MuiIconButton-root": {
    display: "none",
  },
}));

export const SmallFormControlLabel = styled(FormControlLabel)<
  Theme,
  FormControlLabelProps
>(({ theme, checked }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 64,
  height: 48,
  marginLeft: 0,
  marginRight: 10,
  marginBottom: 10,
  padding: 9,
  border: 0,
  borderRadius: 4,
  fontSize: 16,
  fontWeight: 500,
  backgroundColor: checked ? `${theme.palette.primary.main}` : "#f2f2f2",
  color: checked ? "white" : `${theme.palette.text.primary}`,
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: checked ? `${theme.palette.primary.main}` : "#dfdfdf",
  },

  "& > .MuiIconButton-root": {
    display: "none",
  },
}));

export const SliderInput = styled(Slider)<Theme>(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: 400,
  margin: 5,
  "&::before": {
    contnet: "'\\'",
    display: "block",
    width: "calc(100% + 10px)",
    height: 15,
    position: "absolute",
    top: 0,
    left: -5,
    background: theme.palette.structure.light,
    borderRadius: 10,
  },
  "& .MuiSlider-rail": {
    height: 5,
    borderRadius: 5,
    border: "5px solid lightgray",
    top: 7,
    left: -5,
  },
  "& .MuiSlider-track": {
    height: 5,
    top: 12,
    borderRadius: 5,
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
  "& .MuiSlider-markLabel": {
    left: "22px !important",
  },
  "& .MuiSlider-markLabel ~ .MuiSlider-markLabel": {
    left: "auto !important",
    right: -29,
  },
}));
