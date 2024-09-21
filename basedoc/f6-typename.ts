//类型别名


// 类型别名的用法
type nameType = string|string[]

let zhangName1 :nameType="张三"
let zhangName2:nameType=["张三"]

// 张三 [ '张三' ]
console.log(zhangName1,zhangName2)

//可以用来定义函数 .type 定义了一个函数。返回值是字符串。
type fn=(name:string,age:number)=>string

//函数实现一。
let fn1:fn=function(name:string,age:number):string{
	return name
}
//函数实现二
let fn2:fn=(name:string,age:number):string=>name

//函数使用
console.log(fn1("张三丰",23))
console.log(fn1("张志超",23))
console.log(fn1("张杰",23),'\n')
console.log(fn2("林则徐",98))
console.log(fn2("李鸿章",98))
//张三丰
// 张志超
// 张杰

// 林则徐
// 李鸿章

// type 也可以用来定义对象
type infoType = {
	readonly Name:string,
	age?:number
}

let zhang:infoType={
	Name:"张三",
}
//赋值
zhang.age=27

console.log(zhang.Name,zhang.age) // 张三 27

// type 和 interface 的区别
// 1. interface 可以继承 ,type只能通过&交叉类型合并.
interface T1{
	name:string
}
interface T2 extends T1{
	age :string
}

type S1={
	name:string
}
type S2={
	age:number
}

let s:S1&S2={
	name:"董养龙",
	age:12
}
//2.type 可以定义 联合类型 和 可以使用一些操作符 interface不行。
type nameType1 =string|string[]
//3.interface遇到重名的会合并 type会报错。
interface A1{
	name:string
}

interface A1{
	age:number
}

let B1:A1={
	name:"A1",
	age:13
}
console.log(B1) //{ name: 'A1', age: 13 }

 




