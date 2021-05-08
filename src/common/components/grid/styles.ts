import {
  styled,
  Table,
  TableBody,
  TableBodyProps,
  TableCell,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableHeadProps,
  TablePagination,
  TablePaginationProps,
  TableProps,
  TableRow,
  TableRowProps,
  Theme,
} from "@material-ui/core";

export const GridContainer = styled(TableContainer)<Theme, TableContainerProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
  })
);

export const Grid = styled(Table)<Theme, TableProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const GridHead = styled(TableHead)<Theme, TableHeadProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
  })
);

export const GridBody = styled(TableBody)<Theme, TableBodyProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
  })
);

export const GridRow = styled(TableRow)<Theme, TableRowProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const GridCell = styled(TableCell)<Theme, TableCellProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
  })
);

export const GridPagination = styled(TablePagination)<
  Theme,
  TablePaginationProps
>(({ theme }) => ({
  color: theme.palette.primary.main,
}));
