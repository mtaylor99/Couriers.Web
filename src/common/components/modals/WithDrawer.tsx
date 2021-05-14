/* eslint-disable react/jsx-props-no-spreading */
import { Drawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ComponentType, PropsWithChildren } from "react";

export interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

const WithDrawer = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = ({
    open,
    onClose,
    ...rest
  }: PropsWithChildren<IDrawerProps>) => {
    return (
      <Drawer anchor="right" open={open}>
        <div>
          <div>
            <CloseIcon onClick={onClose} />
          </div>
          <div>
            <Component {...(rest as P)} />
          </div>
        </div>
      </Drawer>
    );
  };
  return WrappedComponent;
};

export default WithDrawer;
