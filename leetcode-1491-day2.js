var average = function(salary) {
  let averageSalary = 0;
  let min = Number.MAX_VALUE;
  let max = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] < min) min = salary[i];
    if (salary[i] > max) max = salary[i];
    averageSalary += salary[i];
  }
  averageSalary = (averageSalary - min - max) / (salary.length - 2);
  return averageSalary;
};

// Time complexity O(n)
// Space Complexity O(1)
