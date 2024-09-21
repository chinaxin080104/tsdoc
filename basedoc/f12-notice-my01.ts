//奇怪的错误 ？
import express from "express"


const app = express()

const router = express.Router()

app.use("/", router)

router.get("/", (req: any, res: any) => {
    res.json({code: 200})
})

app.listen(9000, () => {
    console.log("running: :9000")
})