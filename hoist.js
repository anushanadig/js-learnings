
//hoisting - adding varible to the enclosing lexical scope
console.log(a);
console.log(b);
console.log(c); // let is actually  hoisted, but it's not initialized unlike var, so we get reference error

var a = foo();
var b = 2;
//var c = baz(); // typeError - because only func declaration is hoisted and not function expression
let d ="d";
console.log(a);
console.log(b);

function foo () {

    console.log("foo");

}

var baz = function () {

    console.log("baz");
}