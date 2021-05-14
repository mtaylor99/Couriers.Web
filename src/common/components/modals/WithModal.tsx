/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType, PropsWithChildren } from "react";
import { Fab } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
// import DialogActions from "@material-ui/core/DialogActions";
// import Button from "@material-ui/core/Button";

export interface IModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const WithModal = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = ({
    title,
    open,
    onClose,
    ...rest
  }: PropsWithChildren<IModalProps>) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <div>
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <Fab onClick={onClose}>
            <CloseIcon />
          </Fab>
        </div>
        <DialogContent>
          <Component {...(rest as P)} />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    );
  };
  return WrappedComponent;
};

export default WithModal;
