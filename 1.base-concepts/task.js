function solveEquation(a, b, c) {
  let x1, x2, disc = Math.pow(b,2)-4*a*c;
  let arr = [];

  if (disc < 0) return arr;

  if (disc > 0) {
    x2 = (b*(-1) + Math.sqrt(disc))/2*a;
    arr.push(x2);
  }
  x1 = (b*(-1) - Math.sqrt(disc))/2*a;
  arr.push(x1);

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let bet,months,payment,totalAmount = amount;
  let dateEnd = new Date(date);
  let dateNow = new Date();
  if (isNaN(Number(percent))) return calcError('Процентная ставка', percent);
  if (isNaN(Number(contribution))) return calcError('Начальный взнос', contribution);
  if (isNaN(Number(amount))) return calcError('Общая стоимость', amount);

  totalAmount -= contribution;
  months = Math.abs(dateEnd.getMonth() - dateNow.getMonth()) + (dateEnd.getYear() - dateNow.getYear()) * 12;
  percent = percent / 100;
  bet = percent / 12;
  payment = totalAmount * (bet + bet / (Math.pow((1 + bet),months) - 1));
  totalAmount = parseFloat((payment * months).toFixed(2));
  console.log(months);

  return totalAmount;
}

function calcError(param, num) {
  return `Параметр "${param}" содержит неправильное значение "${num}"`;
}
