let group = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    }.bind(this));
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