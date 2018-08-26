const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const api=require('./routes/api')

app.use(bodyParser.json())
app.use('/api',api)

app.get('/', (req, res) => {
    res.json({ message: 'hello world' })
})


app.listen(8080, () => {
    console.log('server running on port 8080')
})