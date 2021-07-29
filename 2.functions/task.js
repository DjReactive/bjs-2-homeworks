// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  // Ваш код
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min === undefined || min > arr[i]) min = arr[i];
    if (max === undefined || max < arr[i]) max = arr[i];
    sum += arr[i];
  }
  avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let check, max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    check = func(arrOfArr[i]);
    if (check > max) max = check;
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  for (let i=0; i < arr.length; i++) {
    if (min === undefined || min > arr[i]) min = arr[i];
    if (max === undefined || max < arr[i]) max = arr[i];
  }
  return Math.abs(max-min);
}

function mincer(arrOfArr, func) {
  let check, max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    check = func(arrOfArr[i]);
    if (check > max) max = check;
  }
  return max;
}
