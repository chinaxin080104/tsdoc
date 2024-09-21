//枚举参与编译文件
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Yellow"] = 4] = "Yellow";
})(Color || (Color = {}));
var x1 = {
    mcolor: Color.Red, // 这个color只能是Color里面的值
    mblue: Color.Blue, // blue就只能写 Color.Blue
};
