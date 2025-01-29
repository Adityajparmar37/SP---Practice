export const sortData = (data, sortOrder, sortField) => {
  console.log(sortOrder);
  if (sortOrder === "ASEC")
    return data.sort((a, b) => a[sortField] - b[sortField]);
  else return data.sort((a, b) => b[sortField] - a[sortField]);
};
