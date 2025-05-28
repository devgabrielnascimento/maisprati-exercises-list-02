function isAValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
    return true;
  else {
    return false;
  }
}
console.log(isAValidDate(31, 12, 2020));
console.log(isAValidDate(31, 11, 2020));
console.log(isAValidDate(29, 2, 2020));
console.log(isAValidDate(30, 2, 2024));
console.log(isAValidDate(29, 2, 2024)); 
console.log(isAValidDate(29, 2, 2023));