import express from 'express'
import { AppDataSource } from './database'
import { router } from './routes'
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app = express()
const cors = require("cors")

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(cors())
app.use(express.json())

app.use(router)

AppDataSource.initialize()
    .then(() => {
        console.log("DB test initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.listen( process.env.PORT || 9000,() => console.log("rodando liso"))

export default app