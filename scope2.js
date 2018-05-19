//"use strict";
//lexical scope is fixed
var foo = "i am foo, in global scope";
console.log(foo);

var yay = function baz () {

    var foo = "foo,in baz";
    console.log(foo);

    function bam () {

        foo = "foo, in bam";
        bar = "bar, in bam"; //unfulfilled LHS, var will be declared in global scope

        console.log(foo);
        console.log(bar);

    }
    bam();
}

//baz();// for named function expressions, their name identifier is added to the enclosing scope, so we need to use yay!
yay();
console.log(bar);
//wow(); //unfulfilled RHS will throw reference error in non-strict mode