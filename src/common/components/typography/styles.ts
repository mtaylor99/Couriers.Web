import { styled, Theme, Typography, TypographyProps } from "@material-ui/core";

export const H1Label = styled(Typography)<Theme, TypographyProps>(
  ({ theme }) => ({
    fontSize: 36,
    color: theme.palette.primary.main,
  })
);

export const H2Label = styled(Typography)<Theme, TypographyProps>(
  ({ theme }) => ({
    fontSize: 18,
    color: theme.palette.primary.main,
  })
);
