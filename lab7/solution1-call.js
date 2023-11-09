let group = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    const res = (student)=> function (student) {
      console.log(this.title + ": " + student);
    }.call(this, student);
    this.students.forEach(res);
  },
};

group.showList();

// function foo(num1, num2){
//   console.log(this, num1, num2);
// }

// const result = foo.bind();

// result("abc",123,"cc");

// // foo();
// // foo.call("ABC", 123,12, "user");
// // foo.apply(["a"],["bb","cc"]);
