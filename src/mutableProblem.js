export default function test() {
    let obj = {a: 1, b: 2, c: 3};

    function doSomething1(o) {
        console.log('doSomething1(%j)', o);
    };

    function doSomething2(o) {
        console.log('doSomething2(%j)', o);
    };

    doSomething1(obj);
    doSomething2(obj);
};
