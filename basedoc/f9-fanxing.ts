//泛型
//编写一个函数，传入两个参数,返回这两个参数组成的数组。


//泛型就是把类型 当作参数。
function array<T>(a:T,b:T):T[]{
	return [a,b]
}

console.log(array(1,2)) //[ 1, 2 ]
console.log(array(true,false))
console.log(array(null,null))

console.log(array<number>(3,4))

//多参数情况
function array2<T,K>(a:T, b:K):(T|K)[]{
    return [a, b]
}
console.log(array2(1,"home"))
console.log(array2<number,string>(1,"homestring"))

//泛型约束 使用 extends 表达。
//any[]  代表任何数组。 string 代表字符串。
function array3<T extends string|any[]>(a:T, b:T):T[]{
    console.log(a.length)
    return [a, b]
}
 
console.log(array3("123456","2")) // 6  [ '123456', '2' ]
console.log(array3(["1","333","222"],["6"])) // 3  [ [ '1', '333', '222' ], [ '6' ] ]

//接口泛型

interface Fun{
	(name:string):string
}

let fun1:Fun=function(name:string):string{
	return name
}
console.log(fun1("msg")) //msg
//接口函数的泛型
interface ArrType<T>{
	(a1:T,a2:T):T[]
}
let fun2:ArrType<string>=function(a1:string,a2:string):string[]{
	return [a1,a2]
}
console.log(fun2("test","home")) //[ 'test', 'home' ]

// 接口属性泛型
// interface Info<T>{
// 	like:T
// }
// let xiaoming:Info<string> ={
// 	like:"足球"
// }
// let lisi:Info<string[]>={
// 	like:["羽毛球"]
// }
// console.log(lisi.like,xiaoming.like) //[ '羽毛球' ] 足球

//泛型约束
// interface Info<T extends string|string[]> {
//     like: T
// }

// let xiaoming: Info<string> = {
//     like: "羽毛球"
// }
// let lisi: Info<string[]> = {
//     like: ["羽毛球"]
// }
// console.log(lisi.like,xiaoming.like) //[ '羽毛球' ] 羽毛球


//和接口继承在一起的时候,容易混淆。
interface Peoples {
    name?: string
}
interface Infos<T extends string|string[]> extends Peoples{
    like: T
}

let xiaoming: Infos<string> = {
    like: "羽毛球"
}
let xiaopeng: Infos<string[]> = {
    like: ["羽毛球"]
}

console.log(xiaoming.like,xiaopeng.like) //羽毛球 [ '羽毛球' ]
