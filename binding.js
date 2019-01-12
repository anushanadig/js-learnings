var name = "anu";

function foo() {
    console.log(this.name);
}

var obj1 = {name : "manju", foo}
foo();
obj1.foo();