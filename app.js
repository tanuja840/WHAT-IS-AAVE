const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3333
app.get('/', (req,res)=> res.json({data:'Secret data'}))
app.listen(port,()=>console.log('example app listening at http://localhost:${port}'))