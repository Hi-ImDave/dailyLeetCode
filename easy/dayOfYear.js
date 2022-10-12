var dayOfYear = function (date) {
  let [year, month, day] = date.split('-').map((number) => Number(number))
  const calendar = {
    1: 31,
    2: leapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }
  if (month < 2) return day
  let count = 1
  let dayCount = day
  while (count < month) {
    dayCount += calendar[count]
    count++
  }
  return dayCount
}

let leapYear = (year) => {
  if (year % 4 == 0 && year % 100 !== 0) return true
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) return true
  return false
}
