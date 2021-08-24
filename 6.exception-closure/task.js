// 1
function parseCount (number) {
  number = Number.parseInt(number);
  if ( Number.isNaN(number) ) {
    throw new Error("Невалидное значение");
  }

  return number;
}

function validateCount (number) {
  try {
    return parseCount (number);
  }
  catch (err) {
    return err;
  }
}

// 2
class Triangle {
  constructor (a, b, c) {
    this.sides = [a, b, c];
    this.sides.sort((n, m) => n - m);
    if (this.sides[2] > this.sides[0] + this.sides[1])
      throw new Error("Треугольник с такими сторонами не существует");
  }

  getPerimeter () {
    let sum = 0;
    this.sides.forEach((item) => sum += item );
    return sum;
  }

  getArea () {
    let s, p = 0.5 * this.getPerimeter();
    let abcSqrt = p - this.sides[0];
    for (let i = 1; i < this.sides.length; i++) {
      abcSqrt *= p - this.sides[i];
    }
    s = Math.sqrt(p * abcSqrt);
    return Number(s.toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch (err) {
    return {
      getPerimeter() { return "Ошибка! Треугольник не существует" },
      getArea() { return "Ошибка! Треугольник не существует" }
    }
  }
  return getTriangle;
}
