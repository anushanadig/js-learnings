//all about scopes!
"use strict";

var foo = "yay";
console.log(foo);
console.log(baz.foo);

function baz () {

    //shadowing the global variable - do if needed
    //we cannot access the the outer scope's var if we shadow it in inner scope(except for global scope)
    var foo = "shadow";
    console.log(foo);
}

function bar(foo) {

    foo = "yolo";

    // if we don't use strict mode- 
    //global variable bam is created at runtime because it didn't find a formal declaration - terrible thing!
    //use strict will throw a reference error
    bam = "bam";
    console.log(foo);
    console.log(bam);    
}

baz();
bar("hi");