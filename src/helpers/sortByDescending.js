export const sortByDescending = (first, second) => {
  if (first.name.toLowerCase() < second.name.toLowerCase()) {
    return -1;
  } else if (first.name.toLowerCase() > second.name.toLowerCase()) {
    return 1;
  }
  return 0;
};
