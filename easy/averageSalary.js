var average = function (salary) {
  return (
    salary
      .filter(
        (employee) =>
          employee !== Math.max(...salary) && employee !== Math.min(...salary)
      )
      .reduce((a, b) => a + b, 0) /
    (salary.length - 2)
  )
}

average([4000, 3000, 1000, 2000])
