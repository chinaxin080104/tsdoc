//枚举

// 数字枚举
// enum Color2{
// 	Red,//0
// 	Blue,//1
// 	Green//2
// }
// let c1:Color2=Color2.Red
// let c2:Color2=Color2.Green
// // let c3:Color=5 //类型不匹配
// console.log(c1,c2) //0 2

// enum Color1 {
//     Red=100,
//     Blue, // 101
//     Green=104, // 104
//     Yellow, // 105
// }
// let c4:Color1=Color1.Blue
// let c5:Color1=Color1.Green
// console.log(c4,c5) // 101 104

// 字符串枚举 ,如果是字符串枚举,定义时全部写上
// enum ColorStr{
// 	Red="red",
// 	Blue="blue",
// }

//接口枚举
// enum Color{
// 	Red,
// 	Blue,
// 	Yellow
// }

// interface ColorInter{
// 	color:Color
// 	blue:Color.Blue
// 	yellow:Color.Yellow
// }

// let m1:ColorInter={
// 	color:Color.Blue,//Color.Red 这个color只能是Color里面的值。
// 	blue:Color.Blue,
// 	yellow:Color.Yellow
// }

// console.log(m1)

//const 枚举
//主要作用是节省因为枚举带来的性能消耗。
enum mColor {
    Red = 2,
    Blue,
	Yellow
}

interface ColorInter {
    mcolor: mColor,
    mblue: mColor.Blue
}


let x1: ColorInter = {
    mcolor: mColor.Yellow, // 这个color只能是Color里面的值
    mblue: mColor.Blue, // blue就只能写 Color.Blue
}

console.log(x1) //{ mcolor: 4, mblue: 3 }













