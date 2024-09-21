// 类

import { clear } from "console"

// 构造函数
// class People{
// 	name:string
	
// 	constructor(name:string){
// 		this.name=name
// 	}
	
// 	getName(){
// 		console.log(this.name)
// 	}
// }

// let p:People=new People("虚竹")
// console.log(p.name) //访问属性。
// p.getName()//方法调用


// 类的 public ,private, protected
// public：类的所有成员都可以被类的实例获取。 不写默认就是public
// private：类成员只能在当前类中被访问。
// protected：类成员在类以及子类中可以被访问

class Man {
    private mName: string
    protected mAge: number

    constructor(name: string, age: number) {
        this.mName = name
        this.mAge = age
    }
    getMName(){
        console.log('mname',this.mName) // private  只能在当前类中访问
    }
}


// 在 TypeScript（TS）中，constructor 是一个类的特殊方法，用于创建和初始化类的实例对象。它是在实例化类的时候被调用的，主要用于初始化对象的属性或执行一些初始逻辑。

class PeopleN extends Man {

    name: string
    private age: number

    constructor(name: string, age: number = 18) {
        super(name, age) // 调用父类的构造方法
        this.name = name
        this.age = age
    }

    getName() {
        console.log('name',this.mAge) // protected 类的子类可以访问
        console.log('name',this.name)
    }
}

// constructor 的作用
// 实例化对象时自动调用：当你用 new 关键字创建类的实例时，constructor 会自动执行，并初始化该实例的属性。
// 接受参数：constructor 可以接受参数，用来初始化对象的属性。你可以通过参数来动态地为实例设置不同的初始值。
// 继承和 super 调用：当一个类继承了另一个类时，constructor 可以通过 super() 调用父类的构造函数，确保父类的构造逻辑也被执行。

let p12: PeopleN = new PeopleN("男子汉",19)
console.log(p12.name)
// console.log(p12.age) // 不能在外面访问
console.log(p12.getName(),p12.getMName())

//static 只能通过类去调用。
class People {

    static ClassName:string = "类名"
    nickName: string

    constructor(nickName: string) {
        this.nickName = nickName
    }

    static getName() {
        console.log(People.ClassName)
    }
}

let p: People = new People("小明")
People.getName() //类名 通过类去调用。

// public和上面三个关键字可以连用 (static,constructor,super)
// static作用于属性上，可以被称为静态属性，类属性
// static作用于方法上，可以被称为静态方法，类方法

class PeopleM {

    private static ClassName:string = "类名"
    nickName: string

    constructor(nickName: string) {
        this.nickName = nickName
    }

    static getName() {
        console.log(PeopleM.ClassName)
    }
}

let mp: People = new PeopleM('小溪')
PeopleM.getName()
console.log(PeopleM)

//接口类。 接口只能定义公共属性和方法。
interface PersonType {
    name: string
    age: number
    getName():string
}

class PersonN implements PersonType{
    name: string
    age: number
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    getName(): string {
        return this.name
    }
}

let p1 = new PersonN("刘才", 12)
console.log(p1.getName())