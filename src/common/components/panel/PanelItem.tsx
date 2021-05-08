import { Typography } from "@material-ui/core";
import { PropsWithChildren, ReactNode } from "react";
import { PanelItemWrapper } from "./styles";

interface IPanelitemProps {
  title: string;
  belowContent?: ReactNode;
}
const PanelItem = ({
  title,
  children,
  belowContent,
}: PropsWithChildren<IPanelitemProps>) => {
  return (
    <PanelItemWrapper>
      <Typography variant="h4" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="body1">{children}</Typography>
      {belowContent ? (
        <Typography variant="body2">{belowContent}</Typography>
      ) : null}
    </PanelItemWrapper>
  );
};

export default PanelItem;
