
var bar = "bar";
var foo = function() {

    var boo = "boo";

    ( function () {
            boo = "fdl";
            console.log(bar);
    })();
    
}

foo();