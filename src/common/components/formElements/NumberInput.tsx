import { makeStyles } from "@material-ui/core";
import { ChangeEvent, useRef } from "react";
import { TextInput } from "./styles";

interface INumberInputProps {
  id?: string;
  name?: string;
  value: number | null;
  onChange: (newValue: number | null) => void;
}

const useStyles = makeStyles(() => ({
  root: {
    width: 64,
  },
}));

const NumberInput = ({
  id = undefined,
  name = undefined,
  value,
  onChange,
}: INumberInputProps) => {
  const classes = useStyles();
  const ref = useRef<HTMLInputElement>();

  const internalOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!ref.current) return;

    const inputValue = e.target.value;
    if (!inputValue && inputValue !== "0") {
      onChange(null);
      return;
    }

    const valid = inputValue.match(/^[0-9]*$/);
    if (!valid) {
      ref.current.value = inputValue.slice(0, -1);
      return;
    }

    onChange(+inputValue);
  };

  return (
    <TextInput
      inputRef={ref}
      className={classes.root}
      id={id}
      name={name}
      value={value == null ? "" : value}
      onChange={internalOnChange}
    />
  );
};

export default NumberInput;
