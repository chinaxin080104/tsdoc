//d.ts声明文件。 ?


// 在引入一些年久的js文件的时候，会存在编辑器不提示或报错的情况
// 主要原因是这些库是js编写的，开发者并没有编写为ts支持的声明文件
// npm i @types/包名 -D  安装某个库的声明文件.
// npm i@types/express -D 导入express 库的声明文件。
import express from "express"

const app = express()

const router = express.Router()

app.use("/", router)

router.get("/", (req, res) => {
    res.json({msg: "hi fengfeng",code: 200})
})

app.listen(9000, () => {
    console.log("server: http://127.0.0.1:9000")
})





