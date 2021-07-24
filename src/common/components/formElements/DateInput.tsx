import EventIcon from "@material-ui/icons/Event";
import { formatISO } from "date-fns";
import { StyledDatePicker } from "./styles";

interface IDateInputProps {
  value: Date | null;
  onChange: (newValue: string | null) => void;
  format?: string;
  id?: string;
  name?: string;
  disableFuture?: boolean;
  disablePast?: boolean;
}

const DateInput = ({
  onChange,
  value,
  format = "dd/MM/yyyy",
  name,
  id,
  disableFuture,
  disablePast,
}: IDateInputProps) => {
  return (
    <StyledDatePicker
      disableToolbar
      autoOk
      disableFuture={disableFuture}
      disablePast={disablePast}
      InputProps={{
        endAdornment: <EventIcon />,
      }}
      variant="inline"
      inputVariant="outlined"
      id={id}
      name={name}
      format={format}
      value={value}
      onChange={(d) => {
        onChange(d ? formatISO(d, { representation: "date" }) : null);
      }}
    />
  );
};

export default DateInput;
