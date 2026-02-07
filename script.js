class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Setter for age
  set age(year) {
    if (year > 0) this.#age = year;
    else console.log("Invalid age");
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

class Teacher extends Person {
  teach() {
    console.log(this.name + " is teaching");
  }
}

// Testing
let obj1 = new Person("John", 25);
console.log(obj1.name); // John
obj1.age = 30;
console.log(obj1.age);  // 30

let obj2 = new Student("Alice", 22);
obj2.study();           // Alice is studying

let obj3 = new Teacher("Bob", 40);
obj3.teach();           // Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
