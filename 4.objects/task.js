function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  //ваш код
  if (this.marks === undefined){
      // добавить первую оценку
      this.marks = [mark];
  } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  //ваш код
  if (this.marks === undefined){
      this.marks = [];
  }
  for (let i=0; i < marks.length; i++) this.marks.push(marks[i]);
}

Student.prototype.getAverage = function () {
  //ваш код
  let sum = 0;
  let marks = this.marks;
  for (let i=0; i < marks.length; i++) sum += marks[i];

  return (sum / marks.length);
}

Student.prototype.exclude = function (reason) {
  //ваш код
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
