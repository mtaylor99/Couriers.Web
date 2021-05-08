enum SortDirection {
  Asc = 1,
  Desc = 2,
}

export const SortDirectionLanguage: { [key in SortDirection]: string } = {
  [SortDirection.Asc]: "Ascending",
  [SortDirection.Desc]: "Descending",
};

export default SortDirection;
