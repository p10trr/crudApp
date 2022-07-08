const { json } = require('express');
const express = require('express');
const app = express()
const PORT = 5000;
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
const shortid = require('shortid')
app.use(express.json())
app.use(cors({origin:'*'}))

//IMPORT ROUTES

const userRouter = require('./routes/user-routes')
const destinationsRouter = require('./routes/destination-routes')

//ACTIVE(USE) ROUTES

app.use('/',userRouter)
app.use('/',destinationsRouter)

app.get('/', (req, res)=>{
    res.json({message:"Helloooo World"})
})




app.listen(PORT, ()=>{
    console.log('my server is running')
})