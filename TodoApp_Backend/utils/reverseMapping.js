export const reverseMap = (map) =>
  new Map([...map.entries()].map(([key, value]) => [value, key]));
