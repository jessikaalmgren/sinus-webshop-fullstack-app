const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const products = require('./routes/products.js')
const hoodies = require('./routes/hoodies.js')
const shirts = require('./routes/shirts.js')
const skateboards = require('./routes/skateboards.js')
const caps = require('./routes/caps.js')
const accessories = require('./routes/accessories.js')

const PORT = process.env.PORT || 1226

const buildFolder = path.join(__dirname, '../build')
const staticFolder2 = path.join(__dirname, '../build/img')
//TODO serve the frontend files from the build folder

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static(buildFolder))
app.use(express.static(staticFolder2))

//app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})

//Routes
app.get('/', (req, res) => {
	res.send('Fullstack project')
})

//REST API for /products
app.use('/api/products', products)
app.use('/api/hoodies', hoodies)
app.use('/api/shirts', shirts)
app.use('/api/skateboards', skateboards)
app.use('/api/caps', caps)
app.use('/api/accessories', accessories)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})