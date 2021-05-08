/* eslint-disable react/jsx-props-no-spreading */
import { makeStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { TextInput } from "./styles";

interface ICurrencyInputProps {
  id?: string;
  name?: string;
  value: number | null;
  onChange: (newValue: number | null) => void;
  allowNegative?: boolean;
  decimalScale?: number;
}

interface IWrappedNumberComponentProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  allowNegative?: boolean;
  decimalScale?: number;
}

const useStyles = makeStyles(() => ({
  root: {
    width: 200,
  },
}));

const WrappedNumberComponent = ({
  inputRef,
  onChange,
  name,
  allowNegative,
  decimalScale,
  ...other
}: IWrappedNumberComponentProps) => {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      allowNegative={allowNegative || false}
      fixedDecimalScale={!!decimalScale}
      decimalScale={decimalScale || 0}
      prefix=""
    />
  );
};

const CurrencyInput = ({
  id,
  name,
  value,
  allowNegative,
  decimalScale,
  onChange,
}: ICurrencyInputProps) => {
  const classes = useStyles();
  return (
    <TextInput
      className={classes.root}
      startAdornment="£"
      id={id}
      name={name}
      value={value == null ? "" : value}
      onChange={(e) => {
        if (e.target.value || e.target.value === "0") {
          onChange(+e.target.value);
        } else {
          onChange(null);
        }
      }}
      inputComponent={WrappedNumberComponent as any}
      inputProps={{
        allowNegative,
        decimalScale,
      }}
    />
  );
};

export default CurrencyInput;
