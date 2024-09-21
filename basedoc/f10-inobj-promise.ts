//Promise ?
//使用fetch 请求一个json文件，把相应的数据显示出来。
interface dataType {
    name: string
    age: number
}

interface responseType<T> {
    code: number
    data: T[]
    msg: string
}


//异步 Promise 
async function getList():Promise<responseType<dataType>>{
	// console.log("success")
	// return 
    let response = await fetch("./data.json")
    return response.json()
}
async function getData(){
    let res:responseType<dataType> = await getList()
    let app = document.getElementById("app") as HTMLDivElement
    res.data.forEach((item:dataType)=>{
        let li = document.createElement("li")
        li.innerHTML = `
        <span>name: ${item.name}</span> <span style="margin-left: 10px">age:${item.age}</span>
        `
        app.append(li)
    })
}

getData()