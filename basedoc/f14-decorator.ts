//装饰器
// 装饰器是 ES7 提出的实验性功能
// 开启装饰器
// "experimentalDecorators": true,
// "emitDecoratorMetadata": true,
 
//类装饰器 -- 类装饰器,扩展了Animal的方法。可以让Animal有更多的属性或者方法。
const dr: ClassDecorator = (fn) => {
    // fn就是Animal的构造函数
    console.log(fn)
    // 可以给对象 挂载属性和方法
    fn.prototype.myName = "一念"
    fn.prototype.getMyName = function () {
        console.log(fn.prototype.myName)
    }
}

//装饰器语法糖 @dr
@dr
class Animal {
}



//方法二:手动调用装饰器函数。
// class Animal {
// }
// dr(Animal)

let an = new Animal()

//调用
console.log((an as any).myName);
(an as any).getMyName()


// 装饰器工厂 -- 使用函数柯里化


const big =  (name: string):ClassDecorator=>{
    return (fn)=>{
        fn.prototype.myName = name
        fn.prototype.getMyName = function () {
            console.log(fn.prototype.myName)
        }
    }
}


@big("割鹿刀是神器")
class Animals {

}


let ans = new Animals()

console.log((ans as any).myName);
(ans as any).getMyName()

