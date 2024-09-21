//泛型
//编写一个函数，传入两个参数,返回这两个参数组成的数组。
//泛型就是把类型 当作参数。
function array(a, b) {
    return [a, b];
}
console.log(array(1, 2)); //[ 1, 2 ]
console.log(array(true, false));
console.log(array(null, null));
console.log(array(3, 4));
//多参数情况
function array2(a, b) {
    return [a, b];
}
console.log(array2(1, "home"));
console.log(array2(1, "homestring"));
//泛型约束 使用 extends 表达。
//any[]  代表任何数组。 string 代表字符串。
function array3(a, b) {
    console.log(a.length);
    return [a, b];
}
console.log(array3("123456", "2")); // 6  [ '123456', '2' ]
console.log(array3(["1", "333", "222"], ["6"])); // 3  [ [ '1', '333', '222' ], [ '6' ] ]
var fun1 = function (name) {
    return name;
};
console.log(fun1("msg")); //msg
var fun2 = function (a1, a2) {
    return [a1, a2];
};
console.log(fun2("test", "home")); //[ 'test', 'home' ]
var xiaoming = {
    like: "羽毛球"
};
var xiaopeng = {
    like: ["羽毛球"]
};
console.log(xiaoming.like, xiaopeng.like); //羽毛球 [ '羽毛球' ]
