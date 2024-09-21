//泛型 keyof
interface Info{
	name:string
	age:number
}

let zhangsan:Info={
	name:"zhangsan",
	age:28
}
//keyof  效验 Info 的参数是否在Info 中。 
function getInfoValue(info:Info,key:keyof Info):void{
	console.log(info[key])
}

function getInfoValue2<T extends keyof Info>(info:Info,key:T):Info[T]{
	 return info[key]
}
getInfoValue(zhangsan,"name")
getInfoValue(zhangsan,"age")
console.log("\n")
console.log(getInfoValue2(zhangsan,"name"),getInfoValue2(zhangsan,"age")) //zhangsan 28