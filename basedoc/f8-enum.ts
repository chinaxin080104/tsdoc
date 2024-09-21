//枚举参与编译文件
enum Color {
    Red = 2,
    Blue,
	Yellow
}

interface ColorInter {
    mcolor: Color,
    mblue: Color.Blue
}


let x1: ColorInter = {
    mcolor: Color.Red, // 这个color只能是Color里面的值
    mblue: Color.Blue, // blue就只能写 Color.Blue
}

