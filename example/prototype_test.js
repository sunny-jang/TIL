function Test() {
    this.test = 'test';
}
var test = new Test();

Test.prototype.test = 'test';
Test.prototype.func = function() {
    return this.test;
}

delete test.test;

var test2 = {};
test2.__proto__ = Test.prototype;
test2.test = 'test2';

console.log(test.func());