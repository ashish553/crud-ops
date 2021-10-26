const path = require('path')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const query = require('./db/queries')
const cors = require('cors')
const port = 8000

app.use(bodyparser.json())
app.use(cors())
app.use(bodyparser.urlencoded({
    extended: true,
}))
app.use(express.static(path.join(__dirname+'../my-app/public')))

//Routes for API
app.get('/api/users',query.getUsers)
app.post('/api/user',query.createUser)
app.delete('/api/user/:id',query.deleteUser)
app.put('/api/user',query.updateUser)

//Route for dashboard
app.get('/',(req,res)=>{
    res.send('Seems you are lost!')
})

//Start server on localhost at port 8000
app.listen(process.env.PORT||port,()=>{
    console.log('Running at port 8000')
})