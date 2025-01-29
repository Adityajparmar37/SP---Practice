export const sortData = (data, sortOrder, sortField) => {
  if (sortOrder === "ASEC")
    return data.sort((a, b) => a[sortField] - b[sortField]);
  else return data.sort((a, b) => b[sortField] - a[sortField]);
};
