//函数类型的定义

function add1(n1:number,n2:number):number{
	return n1+n2
}

let add2=(n1:number,n2:number):number=>{
	return n1+n2
}


var m=add1(5,4)
var n=add2(6,7)

console.log(m,n)

// 函数参数 --可选参数
function add(n1:number,n2?:number):number{
	//如果函数参数出现可选参数。需要判断
	if(typeof n2==="undefined"){
		return n1
	}
	return n1+ (n2 as number)
}
//调用add 方法。传入不同的值。
var l=add(4)+add(4,6)+add(3,0)
console.log(l)

//函数参数默认值
function addplus(n1:number,n2?:number,n3:number=1):number{
	if(typeof n2==="undefined"){
		return n1+n3
	}
	return n1+n3+(n2 as number)
}
// null 和 undefined 都可以传递给可选参数，且不会报错，除非启用了 strictNullChecks。
// n2 as number 是类型断言，用来告诉 TypeScript 编译器在这里将 n2 视为 number。
console.log(addplus(4,5,6),addplus(7,undefined,8),addplus(7,null,8))


// 函数参数为接口类型
interface getUserListRequest{
	page?:number
	limit?:number
	key?:string
	name?:string
}

function getUserList(params:getUserListRequest){
	console.log(params.limit)
	console.log(params.name)
}

//实现接口
let List :getUserListRequest={
	 page:1,
	 limit:12,
	 key:"key",
	 name:"文章列表"
}
getUserList(List)


//函数重载
function addFn(n1:number,n2:number):number
function addFn(n1:number):number

function addFn(n1:number,n2:number=10):number{
	return n1+n2
}

console.log(addFn(1),addFn(1,20)) //11 21 函数addFn 实现了n2为空的情况。实现了重载。
