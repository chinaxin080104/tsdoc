//枚举参与编译文件
const enum Color {
    Red = 2,
    Blue,
	Yellow
}

interface ColorInter {
    color: Color,
    blue: Color.Blue
}

let c1: ColorInter = {
    color: Color.Red, // 这个color只能是Color里面的值
    blue: Color.Blue, // blue就只能写 Color.Blue
}

