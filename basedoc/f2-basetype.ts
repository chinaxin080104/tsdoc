//基本类型

import { strict } from "assert"

//直接输出 hello world
// const hw:string ="hello,world"
// console.log(hw)

//数字类型 number
let n1:number =1
let n2:number =3.14
let n3:number =0xf
let n4:number =0o7
let n5:number =0b01
let n6:number =NaN
//输出如下值:  1 3.14 15 7 1 NaN
console.log(n1,n2,n3,n4,n5,n6)

// 字符串类型
let s:string	="栗子"
console.log(s)
//布尔类型
let b1 :boolean=true
let b2 :boolean=false
console.log(b1,b2)

// 空类型
// null,undefined,void
//null 代表空值
//undefined 指没有值 或者 从未赋值.

// 严格模式下 strict:true 
//null就是null,undefined 就是undefinded
// 他们不能相互赋值.
let u1:null =null
let u2:undefined=undefined
// 关闭严格模式,他们就可以相互赋值
let u3:null =undefined
let u4:undefined=null

//void 表示没有返回值。
function setName(name:string):void{
	return 
}

//使用 any 类型,ts 就会关闭类型检查。这样就和 写js 一模一样了。
function setAge(age:Int16Array):any{
	return 1
}
//unknown。不能 【.点】 属性。
function setSchool(school:string):unknown{
	return "清华大学"
}

console.log(setSchool("清华"))
let xuexiao:unknown =setSchool("清华");
console.log(xuexiao)





