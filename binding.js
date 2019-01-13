var name = "anu";

function foo() {
  console.log(this.name);
}

var obj1 = { name: "anu", foo };
foo();
obj1.foo();
