//内置对象
// ECMAScript 的内置对象

// 如果是new 对象的，它的类型就是那个对象的名字

let date: Date = new Date()
let regex: RegExp = /12/
let regex1: RegExp = new RegExp(/\s+/)
//输出错误
let err: Error = new Error("123")

console.log(date) //2024-09-20T07:47:58.344Z
console.log(regex) // /12/
console.log(regex1) //\s+/
console.log(err.name,err.message)//Error 123

//DOM 与BOM
// 常见的DOM类型 都在HTMLElementTagNameMap里面
// "a": HTMLAnchorElement;
// "body": HTMLBodyElement;
// "button": HTMLButtonElement;
// "canvas": HTMLCanvasElement;
// "div": HTMLDivElement;
// "footer": HTMLElement;
// "form": HTMLFormElement;
// "h1": HTMLHeadingElement;
// "head": HTMLHeadElement;
// "header": HTMLElement;
// "html": HTMLHtmlElement;
// "title": HTMLTitleElement;
// "input": HTMLInputElement;
// "img": HTMLImageElement;
const body: HTMLElement = document.body;
const divList: NodeList = document.querySelectorAll('div');
document.addEventListener('click', (e: MouseEvent) => {
   
});

let lo :Location = location
let loc:Storage = localStorage
let se1:Storage = sessionStorage
let c:string = document.cookie