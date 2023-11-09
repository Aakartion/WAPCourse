let group = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    // Replace arrow and remove "function" word
    this.students.forEach( (student) => {
      console.log(this.title + ": " + student);
    });
  },
};

group.showList();
