//接口类型

//接口定义 
interface UserInfo1Face{
	name:string
	age:number
}

let zhangsan :UserInfo1Face={
	name:"张三",
	age:26
}
//张三 26
console.log(zhangsan.name,zhangsan.age)

//接口可选属性
interface UserInfo{
	readonly id:number //只读属性
	name:string
	age?:number //可选属性
	addr?:string
	like?:string[]
	getName:()=>string
	setAge:(age:number)=>void
}

let liming:UserInfo={
		id:66,
	name:"李明",
	getName:function():string{
		return this.name
	},
	setAge:function(age:number){
		this.age=age
	}
}
liming.age=26
//{ id: 66, name: '李明', age: 26 }
console.log(liming)
console.log(liming.id,liming.name)
liming.name="张涛"
console.log(liming)
liming.setAge(28)

//28 张涛 66
console.log(liming.age,liming.getName(),liming.id)

//接口继承extends

interface People{
	gender:number //0 女 1 男 2 未知
}
//用户继承至people
interface UserInfoFace extends People{
	readonly id:number
	name:string
	age?:number
	addr?:string
	like?:string[]
	getName:()=>string
	setName:(name:string)=>void
	setAge:(age:number)=>void
}

//实现接口
let MsDong :UserInfoFace={
	id:129,
	name:"董养龙",
	getName:function():string{
		return this.name
	},
	setName:function(name:string){
		this.name=name
	},
	setAge:function(age:number){
		this.age=age
	},
	gender:1
}


MsDong.setAge(28)
console.log(MsDong.getName())
MsDong.setName("董海龙")
console.log(MsDong.id,MsDong.age,MsDong.getName())
// 董养龙
// 129 28 董海龙

//交叉类型 &  
//作用,会将两个类型中的属性合并。
let Ms :UserInfoFace & People={
	id:129,
	name:"董先生",
	getName:function():string{
		return this.name
	},
	setName:function(name:string){
		this.name=name
	},
	setAge:function(age:number){
		this.age=age
	},
	gender:1
}
//调试
Ms.setAge(28)
console.log(Ms.getName())
Ms.setName("董老师")
console.log(Ms.id,Ms.age,Ms.getName())
// 董先生
// 129 28 董老师
