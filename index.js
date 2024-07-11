import express from "express"
import morgan from "morgan"
import compression from "compression"
import cookieParser from "cookie-parser"
import anotherRoute from "./src/routes/@Route.js"
import userRoute from "./src/routes/userRoute.js"
import categoryRoute from "./src/routes/categoryRoute.js"
import savingRoute from "./src/routes/savingRoute.js"
import transactionRoute from "./src/routes/transactionRoute.js"
import budgetRoute from "./src/routes/budgetRoute.js"
import authentication from "./src/utils/middleware/authentication.js"

// Initialize
const app = express()
const port = process.env.APP_PORT
const url = process.env.APP_URL 
const key = process.env.APP_KEY

// Third-party Middleware
app.use(compression())
app.use(express.json())
app.use(cookieParser(key))
app.set('views', './src/views')
app.set('view engine', 'ejs')
app.set('title', 'duwek')
app.use(morgan('tiny'))
app.use(express.static('public'))

// Routes
app.use(authentication)
app.use(anotherRoute)
app.use(userRoute)
app.use(budgetRoute)
app.use(transactionRoute)
app.use('/settings', categoryRoute)
app.use('/settings', savingRoute)

// Listening
app.listen(port, () => { console.log(`url: ${url}:${port}`) })