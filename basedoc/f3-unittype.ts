//联合类型和类型断言

// 联合类型
function getNum(num:string|number):number{
	return 1
}


getNum(123)
getNum("345")


// let div:HTMLElement|null = document.getElementById("#div")

// function clearTimeout(id: number | undefined): void;
 
// console.log(getNum(123),getNum("345"))

// 断言类型
// 将某一种不确定的类型断言为确定的类型.只是在编辑器层面进行的判断。
//let img =document.getElementById("#img")
//img 报错
//img.src ="http://xxx/img"

//断言的能力,拿到了src。
//两种写法value as Type    | <Type>value
// let img1 = document.getElementById("#img") as HTMLImageElement
// img1.src = "http://xxx.xxx/img"

// let img2 = <HTMLImageElement>document.getElementById("#img")
// img2.src = "http://xxx.xxx/img"

function getAny():any{
	return "董养龙"
}
//拿到字符串的第一个。
let s0 =(getAny()as string).charAt(0)
console.log(s0)

let s1 =(getAny()as string).charAt(1)
console.log(s1)

let s2=(<string>getAny()).charAt(2)
console.log(s2)

