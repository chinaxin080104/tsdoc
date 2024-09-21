//数组类型

//字符串数组
let a1:string[]=["e634"]
//布尔类型
let a2:boolean[]=[false,true]
//数字
let a3:Array<number>=[1,5,67,7]
//混合型1
let a4:any[]=[1,"s",[123,[13]]]
//混合型2
let a5:(string|number)[]=[1,2,"345"]

//普通输出
console.log(a1)
//更注重通知的告知
console.info(a1[0])
//[ false, true ] false true
console.log(a2,a2[0],a2[1])
//[ 1, 5, 67, 7 ]
console.log(a3)
//[ 1, 's', [ 123, [ 13 ] ] ]
console.log(a4)
// [ 1, 2, '345' ]
console.log(a5)

//元组  长度为2的元组。
let a7:[number,number]=[1,2]
// 输出 2
console.log(a7[0],a7[1])
//越界行为
// console.log(a7[2])

//[ '小明', 12, 45, 23 ]
let a8:[1,string,true]=[1,"",true]
let scope:[string,number,number,number] = ["小明",12,45,23]

console.log(scope)
//多维数组
let arr1:number[][]=[[1,2],[3,4]]
let arr2:Array<Array<number>>=[[1],[2]]
//[ [ 1, 2 ], [ 3, 4 ] ]
//           [ [ 1 ], [ 2 ] ]
console.log(arr1,"\n\t",arr2)
