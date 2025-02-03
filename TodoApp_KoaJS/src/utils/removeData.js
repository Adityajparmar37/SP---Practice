export const removeData = (data, filterValue, filterField) => {
  return data.filter((element) => element[filterField] !== filterValue);
};
