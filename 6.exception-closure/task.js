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
    number = parseCount (number);
  }
  catch (err) {
    return err;
  }
  finally {}
  return number;
}

// 2
class Triangle {
  constructor (a, b, c) {
    this.sides = [a, b, c];
    if (!this.validTriangle(a, b, c)) {
      this.error = true;
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter () {
    if (this.error) throw "Ошибка! Треугольник не существует";
    let sum = 0;
    this.sides.forEach((item) => sum +=item );
    return sum;
  }

  getArea () {
    if (this.error) throw "Ошибка! Треугольник не существует";
    let s, p = 0.5 * this.getPerimeter();
    let abcSqrt = p - this.sides[0];
    for (let i = 1; i < this.sides.length; i++) {
      abcSqrt *= p - this.sides[i];
    }
    s = Math.sqrt(p * abcSqrt);
    return Number(s.toFixed(3));
  }

  validTriangle (a, b, c) {
    let sum, max = Math.max(a, b, c);
    if (max <= 0 || Math.min(a, b, c) <= 0) false;
    switch (max) {
      case a: { sum = b + c; break; }
      case b: { sum = a + c; break; }
      case c: { sum = a + b; break; }
    }
    if (sum < max) return false;
    return true;
  }
}

function getTriangle (a, b, c) {
  let getTriangle;
  try {
    getTriangle = new Triangle(a, b, c);
  }
  catch (err) {
    return new Error (err);
  }
  return getTriangle;
}
