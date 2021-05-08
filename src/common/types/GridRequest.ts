import SortDirection from "../enums/SortDirection";

export default interface IGridRequest {
  skip?: number;

  take?: number;

  searchText?: string;

  sortBy?: string;

  sortDirection?: SortDirection;
}
