import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { MouseEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { PrimaryButton } from ".";

export interface IContextMenuOption {
  name: string;
  onClick: () => void;
}

interface IContextMenuButtonProps {
  id: string;
  options: Array<IContextMenuOption>;
  disabled?: boolean;
}

const useStyles = makeStyles(() => ({
  button: {
    minWidth: 40,
  },
}));

const ContextMenuButton = ({
  id,
  options,
  disabled,
}: IContextMenuButtonProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <PrimaryButton
        disabled={disabled}
        className={classes.button}
        aria-controls={id}
        aria-haspopup="true"
        onClick={handleClick}
        type="button"
      >
        <MoreHorizIcon />
      </PrimaryButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={uuid()}
            onClick={() => {
              handleClose();
              option.onClick();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ContextMenuButton;
