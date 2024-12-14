//your JS code here. If required.
function daysOfAYear(year) {
  if (year < 1 || year > 9999 || !Number.isInteger(year)) {
    throw new Error("Invalid input. Year must be an integer between 1 and 9999.");
  }
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  return isLeapYear ? 366 : 365;
}