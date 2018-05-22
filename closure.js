
 (function foo () {

    var a = 1;

    function baz() {
        console.log(a);
    }

    bam(baz);
})();

function bam(baz) {

    baz();
}

